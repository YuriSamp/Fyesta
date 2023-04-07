import { useAtomValue } from 'jotai'
import React, { useRef } from 'react'
import { BsLayers } from 'react-icons/bs'
import { IoLayersSharp } from 'react-icons/io5'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { categoryOptions } from 'src/context/goalContext'
import { GoalsProps, IField, TaskWithCategory } from 'src/interfaces/goalsTypes'

//TODO fazer a animação do scroll

export default function Fields({ Metas }: GoalsProps) {

  const categoryOptionsArr = useAtomValue(categoryOptions)

  const arrTratado = Metas.map(item => {
    const newObject = {
      Tarefas: item.Tarefas,
      Categoria: item.Categoria,
      Id: item.Id
    }
    return newObject
  })

  const progressTasks = (item: TaskWithCategory[], categoria: string) => {
    const arrDeCategoriaFiltrado = item.filter(item => item.Categoria === categoria)
    const arrFinal = arrDeCategoriaFiltrado.map(item => {
      const arrVerificado = item.Tarefas.filter(item => item.realizada === false)
      if (arrVerificado.length === 0) {
        return <RiCheckboxCircleFill className='w-5 h-5  text-violet-900 dark:text-DarkModeGreen' key={item.Id} />
      }
      return <RiCheckboxBlankCircleLine className='w-5 h-5' key={item.Id} />
    })
    return arrFinal
  }

  return (
    <section className='self-start'>
      <div className='pb-2 border-b-2 mb-2 '>
        <h3 className='text-3xl  dark:text-white '>Áreas</h3>
      </div>
      <div
        className='flex gap-2 max-w-[980px] overflow-x-scroll '>
        {categoryOptionsArr.map(item => (
          <Field
            key={item.id}
            FieldName={item.name}
            Metas={progressTasks(arrTratado, item.name)}
          />
        ))}
      </div>
    </section>
  )
}

function Field({ FieldName, Metas }: IField) {
  return (
    <div className='min-w-[320px] flex flex-col border-2 px-4 py-3 shadow-xl'>
      <IoLayersSharp className='w-20 h-20 self-center my-5' />
      <div className='flex gap-2 items-center pb-4 text-lg'>
        <BsLayers />
        <p>{FieldName}</p>
      </div>
      <p className='pb-2'>Progresso</p>
      <div className='flex gap-2 flex-wrap h-10'>
        {Metas}
      </div>
    </div>
  )
}
