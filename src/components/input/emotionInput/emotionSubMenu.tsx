import { useAtom } from 'jotai';
import { diaryPage } from 'src/context/diaryContext';
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useClickOutside } from 'src/hooks/useClickOutside';
import { SetAtom } from 'src/interfaces/diaryTypes';
import { emotionOptions, emotionColors } from 'src/context/emotionsOptions';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

interface ISubMenu {
  setSubModalIsOpen: Dispatch<SetStateAction<boolean>>
  y: number
  x: number
  emotion: string
  setEmotion: Dispatch<SetStateAction<string>>
  options: emotionOptions[]
  setOption: SetAtom<[SetStateAction<emotionOptions[]>], void>
  setOptionsState: Dispatch<React.SetStateAction<emotionOptions[]>>
  itemId: number
  defaultColor: string
}

export const SubMenu = ({ setSubModalIsOpen, x, y, emotion, setEmotion, options, itemId, setOption, setOptionsState, defaultColor }: ISubMenu) => {

  const [diary, setDiary] = useAtom(diaryPage);
  const [colorSelected, setColorSelected] = useState(defaultColor)
  const domRef = useClickOutside(() => { setSubModalIsOpen(false) })

  const deleteItem = () => {
    const optionsEdited = options.filter(item => item.id != itemId)
    setOption(optionsEdited)
    setOptionsState(optionsEdited)
  }

  const optionsEdited = options.map(item => {
    if (item.id === itemId) {
      item.name = emotion
    }
    return item
  })

  const changeColor = (color: string) => {
    const optionWithNewColor = options.map(item => {
      if (item.id === itemId) {
        item.color = color
      }
      return item
    })
    setOption(optionWithNewColor)

    const diaryUpdate = diary.map(item => {
      if (item.feeling === emotion) {
        item.color = color
      }
      return item
    })
    setDiary(diaryUpdate)
  }

  useEffect(() => {
    setOption(optionsEdited)
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
