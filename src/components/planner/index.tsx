import { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs'

// TODO Remover a props editavel

type Editable = { editable: boolean }

export function PlannerListaInput({ editable }: Editable) {
  const [Quantidade, setQuantidade] = useState(3)
  const arr = []

  for (let index = 0; index < Quantidade; index++) {
    arr.push({ Id: index, Selecionado: false })
  }

  const [lista, setLista] = useState(arr)

  function BooleanChange(id: number) {
    const ListaVerificada = lista.map(item => {
      if (item.Id === id) {
        item.Selecionado = !item.Selecionado
      }
      return item
    })
    setLista([...ListaVerificada]);
  }

  function AddNewTask() {
    setLista(prev => [...prev, { Id: Quantidade, Selecionado: false }])
    setQuantidade(prev => prev + 1)
  }

  function RemoveTask(id: number) {
    const newLista = lista.filter(item => item.Id !== id)
    setLista(newLista)
  }


  return (
    <div className='flex flex-col gap-3 items-center'>
      {lista.map((item) => (
        <div className='flex gap-3 items-center' key={item.Id}>
          <Checkbox.Root
            className={`w-5 h-5 border-[1px] border-[#383838]  flex items-center justify-center cursor-pointer ${item.Selecionado ? 'bg-violet-900 dark:bg-green-700' : ''} `}
            id="c1"
            onClick={() => BooleanChange(item.Id)}>
            <Checkbox.Indicator
              className="text-white">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <div className='flex w-full' key={item.Id}>
            <input className={`bg-transparent  outline-none w-72 text-xl text-black dark:text-white  ${item.Selecionado ? 'line-through  text-gray-400' : ''} placeholder:text-gray-600 placeholder:dark:text-gray-400`}
              placeholder='To - do'
              readOnly={item.Selecionado}
            />
          </div>
          {editable &&
            <button className='w-5 h-5'>
              <BsTrash
                className='cursor-pointer text-black dark:text-white'
                onClick={() => RemoveTask(item.Id)}
              />
            </button>
          }
        </div>
      ))}
      {editable &&
        <button
          className='flex gap-3 items-center self-start cursor-pointer'
          onClick={AddNewTask}
        >
          <AiOutlinePlus className='w-5 h-5 text-gray-600 dark:text-gray-400 ' />
          <p className='text-gray-600 dark:text-gray-400 text-lg'>Tarefa</p>
        </button>
      }
    </div>
  )
}
