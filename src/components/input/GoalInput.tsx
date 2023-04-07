import React, { useState, SetStateAction, Dispatch, } from 'react';
import { BsTrash } from 'react-icons/bs'
import { useClickOutside } from 'src/hooks/useClickOutside';
import { Goals, categoryType } from 'src/context/goalContext';
import { useAtomValue } from 'jotai';
import { toast } from 'react-toastify';

type SetAtom<Args extends unknown[], Result> = <A extends Args>(
  ...args: A
) => Result;

interface InputWithSelectI {
  value: string
  placeholder?: string
  setState: Dispatch<SetStateAction<string>>
  options: categoryType[]
  setoption: SetAtom<[SetStateAction<categoryType[]>], void>
}

export function GoalInput({ options, setState, placeholder, setoption, value }: InputWithSelectI) {

  const goals = useAtomValue(Goals)

  const [inputSearch, setInputSearch] = useState(value)
  const [focus, setFocus] = useState(false)

  const optionsTratado = options.map(item => {
    const firstletterUppercase = item.name.slice(0, 1).toUpperCase()
    const OtherLetters = item.name.slice(1).toLowerCase()
    item.name = firstletterUppercase + OtherLetters
    return item
  })

  const domRef = useClickOutside(() => {
    setFocus(false)
  })

  const inputTratado = inputSearch.length > 1 ? options.filter(item => item.name.toLowerCase().includes(inputSearch.trim().toLowerCase())) : optionsTratado
  setState(inputSearch)

  const deleteItem = (id: number) => {
    const optionWillBeDeleted = options.filter(item => item.id === id)
    const hasGoals = goals.filter(item => item.Categoria === optionWillBeDeleted[0].name)
    if (hasGoals.length > 0) {
      const notify = () => toast.error('Não é possivel excluir uma categoria caso haja metas nela');
      notify();
      return
    }
    const optionsEdited = options.filter(item => item.id != id)
    setoption(optionsEdited)
  }

  return (
    <menu
      className='flex flex-col w-full relative'
      ref={domRef}
    >
      <input className='py-2 px-2 rounded-lg focus:outline-none bg-transparent border-[1px] border-black h-10  placeholder:text-sm'
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
      />
      <section className='absolute top-[40px] z-10 bg-white w-full shadow-2xl rounded-lg'>
        {focus
          &&
          <>
            <p className='text-sm pt-4 px-4 pb-3'>Selecione uma opção ou crie uma</p>
            {inputTratado.length > 0 ?
              inputTratado.map(item => (
                <div
                  className='hover:bg-gray-200 cursor-pointer'
                  key={item.id}
                >
                  <div className='flex  items-center py-1 px-4 '>
                    <button
                      type='button'
                      className='flex items-center w-full'
                      onClick={() => {
                        setInputSearch(item.name)
                        setFocus(false)
                      }}
                    >
                      <p
                        className='px-2 py-1 rounded-md min-w-[70px] flex '
                      >{item.name}</p>
                    </button>
                    <button
                      type='button'
                      className='hover:bg-gray-300 w-6 h-6 flex justify-center items-center'
                      onClick={() => {
                        deleteItem(item.id)
                      }}>
                      <BsTrash className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              ))
              :
              options.length < 9
                ?
                <button
                  type='button'
                  className='hover:bg-gray-200 cursor-pointer w-full'
                  onClick={() => {
                    setoption(prev => [...prev, { name: inputSearch, id: options.length, }])
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
                :
                <p className='text-center py-2'>você atingiu o numero máximo de categorias</p>
            }
          </>
        }
      </section>
    </menu>
  );
};
