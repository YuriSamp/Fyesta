import React from 'react'
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { SlArrowDown } from 'react-icons/sl'
import { GoalsWithSetterProps } from 'src/interfaces/Goals'

export default function Actions({ Metas, setMetas }: GoalsWithSetterProps) {

  const ActionComplete = (id: number) => {
    const Tasks = Metas.map(item => {
      item.Tarefas.map(item => {
        if (item.id === id) {
          item.realizada = !item.realizada
        }
      })
      return item
    })
    setMetas(Tasks)
  }

  return (
    <section className='w-80 self-start'>
      <div className='pb-2 border-b-2 mb-2 flex items-center gap-6 '>
        <h3 className='text-3xl  dark:text-white '>Ações</h3>
        <div className='flex gap-2 text-gray-100 self-end items-center'>
          <p className='text-lg'>Feitas</p>
          <SlArrowDown />
        </div>
      </div>
      <div className='flex flex-col gap-3 h-[248px] overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
        {Metas.map(item => (
          item.Tarefas.map((item, index) => (
            <div
              className='flex gap-2 pt-2 items-center cursor-pointer'
              key={index}
              onClick={() => ActionComplete(item.id)}
            >
              {item.realizada === true ?
                <>
                  <RiCheckboxCircleFill className='w-5 h-5  text-violet-900 dark:text-DarkModeGreen' />
                  <p className='text-xl select-none'>{item.Tarefa}</p>
                </>
                :
                <>
                  <RiCheckboxBlankCircleLine className='w-5 h-5' />
                  <p className='text-xl select-none'>{item.Tarefa}</p>
                </>
              }
            </div>
          ))
        ))
        }
      </div>
    </section>
  )
}
