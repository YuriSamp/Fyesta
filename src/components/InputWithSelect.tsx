import React, { useEffect, useState, SetStateAction, Dispatch, useRef } from 'react';
import { BsThreeDots, BsTrash } from 'react-icons/bs'
import { useClickOutside } from 'src/hooks/useClickOutside';

type emotionOptions = { name: string, id: number }

type SetAtom<Args extends unknown[], Result> = <A extends Args>(
  ...args: A
) => Result;

interface InputWithSelectI {
  value?: string
  defaultValue?: string
  placeholder?: string
  setState: Dispatch<SetStateAction<string>>
  options: emotionOptions[]
  setoption: SetAtom<[SetStateAction<emotionOptions[]>], void>

}

// DESCOBRIR COMO FECHAR UM MODAL E MANTER O OUTRO ABERTO

export function InputWithSelect({ options, setState, placeholder, setoption }: InputWithSelectI) {

  const optionsTratado = options.map(item => {
    const firstletterUppercase = item.name.slice(0, 1).toUpperCase()
    const OtherLetters = item.name.slice(1).toLowerCase()
    item.name = firstletterUppercase + OtherLetters
    return item
  }
  )

  const [inputSearch, setInputSearch] = useState('')
  const [focus, setFocus] = useState(false)
  const [subModalIsOpen, setSubModalIsOpen] = useState(false)
  const [optionsState, setOptionsState] = useState(optionsTratado)


  const domRef = useClickOutside(() => {
    setFocus(false)
  })

  useEffect(() => {
    if (inputSearch.length > 1)
      setOptionsState(options.filter(item => item.name.toLowerCase().includes(inputSearch.trim().toLowerCase())))
    else {
      setOptionsState(optionsTratado)
    }
  }, [inputSearch])

  useEffect(() => {
    setState(inputSearch)
  }, [inputSearch])

  console.log(subModalIsOpen)

  return (
    <div
      className='flex flex-col h-10'
      ref={domRef}
    >
      <input className='py-2 px-2 rounded-lg focus:outline-none bg-transparent border-[1px] border-black h-10 w-44 text-center placeholder:text-sm'
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
      />
      <div className='relative z-10 bg-white w-64 shadow-2xl rounded-lg'>
        {focus
          &&
          <div className=''>
            <div className='text-sm pt-4 px-4 pb-3'>
              <p>Selecione uma opção ou crie uma</p>
            </div>
            {optionsState.length > 0 ?
              optionsState.map(item => (
                <div
                  className='hover:bg-gray-200 cursor-pointer'
                  key={item.id}
                >
                  <div className='flex  items-center py-1 px-4 '
                  >
                    <div className='flex items-center w-full'
                      onClick={() => {
                        setInputSearch(item.name)
                        setFocus(false)
                      }}
                    >
                      <p>{item.name}</p>
                    </div>
                    <span className="relative">
                      <div className='hover:bg-gray-300 w-6 h-6 flex justify-center items-center'>
                        <BsThreeDots
                          onClick={() => setSubModalIsOpen(true)}
                        />
                      </div>
                       {subModalIsOpen &&
                          <SubMenu
                            setSubModalIsOpen={setSubModalIsOpen}
                          />
                        }
                    </span>
                  </div>
                </div>
              ))
              :
              <div
                className='hover:bg-gray-200 cursor-pointer'
                key={options.length + 1}
                onClick={() => {
                  setInputSearch(inputSearch)
                  setFocus(false)
                }}
              >
                <div
                  className='flex gap-5 items-center py-1 px-4 '
                  onClick={() => {
                    setoption(prev => [...prev, { name: inputSearch, id: options.length }])
                  }}
                >
                  <p>Criar</p>
                  <p>{inputSearch}</p>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
};


interface ISubMenu {
  setSubModalIsOpen: Dispatch<React.SetStateAction<boolean>>
}

const SubMenu = ({ setSubModalIsOpen }: ISubMenu) => {

  const domRef = useClickOutside(() => setSubModalIsOpen(false))

  return (
    <div
      className='bg-white w-64 shadow-2xl z-20 px-5 relative translate-x-20 -translate-y-4 absolute bottom-0'
      ref={domRef}
    >
      <div className='py-4 flex flex-col gap-2 border-b'>
        <input
          className='bg-[rgb(245,237,237)] border'
          autoFocus={true}
        />
        <div className='flex gap-5 items-center'>
          <BsTrash />
          <p>Deletar</p>
        </div>
      </div>
      <p>Colors</p>
      <ul className='flex flex-col gap-2 py-2'>
        <li className='hover:bg-gray-200'>
          <button className='flex gap-5'>
            <div className='h-5 w-5 bg-blue-500 rounded-md'></div>
            <p>Blue</p>
          </button>
        </li>
        <li className='hover:bg-gray-200'>
          <button className='flex gap-5'>
            <div className='h-5 w-5 bg-blue-500 rounded-md'></div>
            <p>Blue</p>
          </button>
        </li>
        <li className='hover:bg-gray-200'>
          <button className='flex gap-5'>
            <div className='h-5 w-5 bg-blue-500 rounded-md'></div>
            <p>Blue</p>
          </button>
        </li>
        <li className='hover:bg-gray-200'>
          <button className='flex gap-5'>
            <div className='h-5 w-5 bg-blue-500 rounded-md'></div>
            <p>Blue</p>
          </button>
        </li>
        <li className='hover:bg-gray-200'>
          <button className='flex gap-5'>
            <div className='h-5 w-5 bg-blue-500 rounded-md'></div>
            <p>Blue</p>
          </button>
        </li>
        <li className='hover:bg-gray-200'>
          <button className='flex gap-5'>
            <div className='h-5 w-5 bg-blue-500 rounded-md'></div>
            <p>Blue</p>
          </button>
        </li>

      </ul>
    </div>
  )
}
