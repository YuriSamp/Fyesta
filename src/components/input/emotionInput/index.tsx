import { useEffect, useState, SetStateAction, Dispatch } from 'react';
import { BsThreeDots } from 'react-icons/bs'
import { useClickOutside } from 'src/hooks/useClickOutside';
import { emotionOptions, emotionColors } from 'src/context/emotionsOptions';
import { UpperCaseFirstLetter } from 'src/utils/uppercaseFirstLetter';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { SetAtom } from 'src/interfaces/diaryTypes';
import { SubMenu } from './emotionSubMenu';

interface InputWithSelectI {
  value?: string
  defaultValue: string
  placeholder?: string
  setState: Dispatch<SetStateAction<string>>
  options: emotionOptions[]
  setoption: SetAtom<[SetStateAction<emotionOptions[]>], void>
  setColor: Dispatch<SetStateAction<string>>
}

export function EmotionInput({ options, setState, placeholder, setoption, setColor, defaultValue }: InputWithSelectI) {

  const [focus, setFocus] = useState(false)
  const [inputSearch, setInputSearch] = useState(defaultValue)
  const [subModalIsOpen, setSubModalIsOpen] = useState(false)
  const [optionsState, setOptionsState] = useState(options)
  const [emotion, setEmotion] = useState('')
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [itemId, setItemId] = useState(0)
  const [defaultColor, setDefaultColor] = useState('')
  const domRef = useClickOutside(() => { setFocus(false) })

  useEffect(() => {
    if (inputSearch && inputSearch.length > 1) {
      setOptionsState(options.filter(item => item.name.toLowerCase().includes(inputSearch.trim().toLowerCase())))
      setState(inputSearch)
    }
    else {
      setOptionsState(options)
      setState(inputSearch)
    }
  }, [inputSearch, options, setState])

  useEffect(() => {
    if (defaultValue !== '') {
      options.map((option) => {
        if (option.name === defaultValue) {
          setColor(option.color)
        }
      })
    }

  }, [defaultValue])

  const matches = useMediaQuery('(min-width: 500px)')

  const setter = (name: string, id: number, color: string) => {
    setEmotion(name)
    setSubModalIsOpen(true)
    setX(matches ? 260 : 20)
    setY(-100)
    setItemId(id)
    setDefaultColor(color)
  }

  return (
    <menu
      className='flex flex-col h-10'
      ref={domRef}
    >
      <input className='py-2 px-2 rounded-lg focus:outline-none bg-transparent border-[1px] border-black dark:border-white h-10 w-44 text-center placeholder:text-sm dark:placeholder:text-white'
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
      />
      <section className='relative z-10 bg-white dark:bg-[#151515] w-52 sm:w-64 shadow-2xl rounded-lg'>
        {focus
          &&
          <>
            <p className='text-sm pt-4 px-4 pb-3'>Selecione uma opção ou crie uma</p>
            <div className='max-h-[160px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
              {optionsState.length > 0 ?
                optionsState.map((item) => (
                  <div
                    className='hover:bg-gray-200 dark:hover:bg-gray-800  cursor-pointer'
                    key={item.id}
                  >
                    <div className='flex  items-center py-1 px-4 '>
                      <button
                        type='button'
                        className='flex items-center w-full'
                        onClick={() => {
                          setInputSearch(item.name)
                          setFocus(false)
                          setColor(item.color)
                        }}
                      >
                        <p
                          style={{ backgroundColor: item.color }}
                          className='px-2 py-1 bg-red-300 rounded-md dark:text-black min-w-[70px] flex justify-center'
                        >
                          {UpperCaseFirstLetter(item.name)}
                        </p>
                      </button>
                      <button
                        type='button'
                        className='hover:bg-gray-300 dark:hover:bg-DarkModeGreen w-6 h-6 flex justify-center items-center'
                        onClick={() => setter(item.name, item.id, item.color)}
                        onKeyDown={(e) => e.key == 'Enter' && setter(item.name, item.id, item.color)
                        }
                      >
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>
                ))
                :
                <button
                  type='button'
                  className='hover:bg-gray-200 cursor-pointer w-full'
                  onClick={() => {
                    const randomColor = emotionColors.sort(() => 0.5 - Math.random()).slice(0, 1).map(item => item.color)
                    setColor(randomColor[0])
                    setoption(prev => [...prev, { name: inputSearch, id: options.length, color: randomColor[0] }])
                    setInputSearch('')
                    setFocus(false)
                  }}
                >
                  <p
                    className='flex gap-5 items-center py-1 px-4 '
                  >
                    <span>Criar</span>
                    <span>{inputSearch}</span>
                  </p>
                </button>
              }
            </div>
          </>
        }
      </section>
      {subModalIsOpen &&
        <SubMenu
          setSubModalIsOpen={setSubModalIsOpen}
          y={y}
          x={x}
          emotion={emotion}
          setEmotion={setEmotion}
          options={options}
          itemId={itemId}
          setOption={setoption}
          setOptionsState={setOptionsState}
          defaultColor={defaultColor}
        />
      }
    </menu>
  );
};
