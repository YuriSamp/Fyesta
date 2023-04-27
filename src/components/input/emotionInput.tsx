import React, { useEffect, useState, SetStateAction, Dispatch, } from 'react';
import { BsThreeDots, BsTrash } from 'react-icons/bs'
import { useClickOutside } from 'src/hooks/useClickOutside';
import { AiOutlineCheck } from 'react-icons/ai'
import { emotionOptions, emotionColors } from 'src/context/emotionsOptions';
import { useAtom } from 'jotai';
import { diaryPage } from 'src/context/diaryContext';
import { UpperCaseFirstLetter } from 'src/utils/uppercaseFirstLetter';
import useMediaQuery from 'src/hooks/useMediaQuery';


//TODO escrever a animação daqui

type SetAtom<Args extends unknown[], Result> = <A extends Args>(
  ...args: A
) => Result;

interface InputWithSelectI {
  value?: string
  defaultValue: string
  placeholder?: string
  setState: Dispatch<SetStateAction<string>>
  options: emotionOptions[]
  setoption: SetAtom<[SetStateAction<emotionOptions[]>], void>
  setColor: Dispatch<SetStateAction<string>>
}

interface ISubMenu {
  setSubModalIsOpen: Dispatch<React.SetStateAction<boolean>>
  y: number
  x: number
  emotion: string
  setEmotion: Dispatch<SetStateAction<string>>
  options: emotionOptions[]
  setoption: SetAtom<[SetStateAction<emotionOptions[]>], void>
  setOptionsState: Dispatch<React.SetStateAction<emotionOptions[]>>
  itemId: number
  defaultColor: string
}

export function EmotionInput({ options, setState, placeholder, setoption, setColor, defaultValue }: InputWithSelectI) {

  const [inputSearch, setInputSearch] = useState(defaultValue)
  const [focus, setFocus] = useState(false)
  const [subModalIsOpen, setSubModalIsOpen] = useState(false)
  const [optionsState, setOptionsState] = useState(options)
  const [emotion, setEmotion] = useState('')
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [itemId, setItemId] = useState(0)
  const [defaultColor, setDefaultColor] = useState('')
  setState(inputSearch)

  const domRef = useClickOutside(() => {
    setFocus(false)
  })

  useEffect(() => {
    if (inputSearch && inputSearch.length > 1)
      setOptionsState(options.filter(item => item.name.toLowerCase().includes(inputSearch.trim().toLowerCase())))
    else {
      setOptionsState(options)
    }
  }, [inputSearch])

  const matches = useMediaQuery('(min-width: 500px)')

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
                optionsState.map((item, index) => (
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
                        >{UpperCaseFirstLetter(item.name)}</p>
                      </button>
                      <button
                        type='button'
                        className='hover:bg-gray-300 dark:hover:bg-DarkModeGreen w-6 h-6 flex justify-center items-center'
                        onClick={() => {
                          setEmotion(item.name)
                          setSubModalIsOpen(true)
                          setX(matches ? 260 : 20)
                          setItemId(item.id)
                          setDefaultColor(item.color)
                          setY(-100)
                        }}
                        onKeyDown={(e) => {
                          if (e.key == 'Enter') {
                            setEmotion(item.name)
                            setSubModalIsOpen(true)
                            setX(matches ? 260 : 20)
                            setItemId(item.id)
                            setDefaultColor(item.color)
                            setY(-100)
                          }
                        }
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
          setoption={setoption}
          setOptionsState={setOptionsState}
          defaultColor={defaultColor}
        />
      }
    </menu>
  );
};

const SubMenu = ({ setSubModalIsOpen, x, y, emotion, setEmotion, options, itemId, setoption, setOptionsState, defaultColor }: ISubMenu) => {

  const [diary, setDiary] = useAtom(diaryPage);
  const [colorSelected, setColorSelected] = useState(defaultColor)

  const domRef = useClickOutside(() => {
    setSubModalIsOpen(false)
  })

  const optionsEdited = options.map(item => {
    if (item.id === itemId) {
      item.name = emotion
    }
    return item
  })

  const deleteItem = () => {
    const optionsEdited = options.filter(item => item.id != itemId)
    setoption(optionsEdited)
    setOptionsState(optionsEdited)
  }

  const changeColor = (color: string) => {
    const optionWithNewColor = options.map(item => {
      if (item.id === itemId) {
        item.color = color
      }
      return item
    })
    setoption(optionWithNewColor)


    const diaryUptade = diary.map(item => {
      if (item.feeling === emotion) {
        item.color = color
      }
      return item
    })
    setDiary(diaryUptade)
  }

  useEffect(() => {
    setoption(optionsEdited)
  }, [emotion])


  return (
    <menu
      style={{ transform: `translate(${x + 'px'}, ${y + 'px'})`, }}
      className=' bg-white dark:bg-[#151515]  shadow-2xl  z-20 px-5 relative '
      ref={domRef}
    >
      <section className='pt-4 flex flex-col'>
        <input
          className='bg-[rgb(243,239,239)] dark:bg-InputGray  border px-2 py-1 focus:outline-none'
          autoFocus={true}
          value={emotion}
          onChange={e => setEmotion(e.target.value)}
        />
        <div className='py-3 '>
          <button
            type='button'
            className='flex gap-2 w-full items-center pl-1 py-1  hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer'
            onClick={() => {
              deleteItem()
              setSubModalIsOpen(false)
            }}
          >
            <BsTrash className='w-4 h-4' />
            <p>Deletar</p>
          </button>
        </div>
      </section>
      <p className='pb-3 text-lg'>Colors</p>
      <ul className='flex flex-col gap-2 pb-2 max-h-[200px] overflow-y-scroll scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
        {emotionColors.map((item, index) => (
          <li className='hover:bg-gray-200 dark:hover:bg-gray-800 pr-3 ' key={index}>
            <button
              type='button'
              className='flex justify-between items-center w-full cursor-pointer'
              onClick={() => {
                setColorSelected(item.color)
                changeColor(item.color)
              }}
            >
              <div className='flex gap-3 items-center'>
                <div
                  style={{ backgroundColor: item.color }}
                  className={`h-5 w-5 rounded-md`}
                >
                </div>
                <p className=''>{item.name}</p>
              </div>
              {colorSelected === item.color &&
                <AiOutlineCheck />
              }
            </button>
          </li>
        ))}
      </ul>
    </menu>
  )
}
