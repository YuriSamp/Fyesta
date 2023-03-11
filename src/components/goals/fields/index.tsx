import React from 'react'
import { BsLayers } from 'react-icons/bs'
import { IoLayersSharp } from 'react-icons/io5'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { GoalsProps, TaskWithCategory } from 'src/interfaces/Goals'

export default function Fields({ Metas }: GoalsProps) {

  const arrTratado = Metas.map(item => {
    const newObject = {
      Tarefas: item.Tarefas,
      Categoria: item.Categoria,
    }
    return newObject
  })

  const ProgressTasks = (item: TaskWithCategory[], categoria: 'Intelectual' | 'Pessoal' | 'Financeiro') => {
    const arrDeCategoriaFiltrado = item.filter(item => item.Categoria === categoria)
    const arrFinal = arrDeCategoriaFiltrado.map((item, index) => {
      const arrVerificado = item.Tarefas.filter(item => item.realizada === false)
      if (arrVerificado.length === 0) {
        return <RiCheckboxCircleFill className='w-5 h-5  text-violet-900 dark:text-DarkModeGreen' key={index} />
      }
      return <RiCheckboxBlankCircleLine className='w-5 h-5' key={index} />
    })
    return arrFinal
  }

  return (
    <section className='self-start'>
      <div className='pb-2 border-b-2 mb-2 '>
        <h3 className='text-3xl  dark:text-white '>Áreas</h3>
      </div>
      <div className='flex gap-2'>
        <div className='w-80 flex flex-col border-2 px-4 py-4'>
          <IoLayersSharp className='w-20 h-20 self-center my-5' />
          <div className='flex gap-2 items-center pb-4 text-lg'>
            <BsLayers />
            <p>Intelectual</p>
          </div>
          <p className='pb-2'>Progresso</p>
          <div className='flex gap-2 flex-wrap h-10'>
            {ProgressTasks(arrTratado, 'Intelectual')}
          </div>
        </div>
        <div className='w-80 flex flex-col border-2 px-4 py-4'>
          <IoLayersSharp className='w-20 h-20 self-center my-5' />
          <div className='flex gap-2 items-center pb-4 text-lg'>
            <BsLayers />
            <p>Pessoal</p>
          </div>
          <p className='pb-2'>Progresso</p>
          <div className='flex gap-2 flex-wrap h-10'>
            {ProgressTasks(arrTratado, 'Pessoal')}
          </div>
        </div>
        <div className='w-80 flex flex-col border-2 px-4 py-4'>
          <IoLayersSharp className='w-20 h-20 self-center my-5' />
          <div className='flex gap-2 items-center pb-4 text-lg'>
            <BsLayers />
            <p>Financeiro</p>
          </div>

          <p className='pb-2'>Progresso</p>
          <div className='flex gap-2 flex-wrap h-10'>
            {ProgressTasks(arrTratado, 'Financeiro')}
          </div>
        </div>
      </div>
    </section>
  )
}
