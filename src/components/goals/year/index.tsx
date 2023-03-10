import React from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { GoalProp, Tarefa } from 'src/interfaces/Goals'

export default function YearBox({ Metas }: GoalProp) {

  const MetasPlanejadas = Metas.map(item => item.Tarefas.length)

  function VerificaTarefas(item: Tarefa[], id: number) {
    const arrVerificado = item.filter(item => item.realizada === false)
    if (arrVerificado.length === 0) {
      return <RiCheckboxCircleFill className='w-5 h-5  text-violet-900 dark:text-DarkModeGreen' key={id} />
    }
    return <RiCheckboxBlankCircleLine className='w-5 h-5' key={id} />
  }

  return (
    <section className='w-80'>
      <div className='pb-2 border-b-2 mb-2 '>
        <h3 className='text-3xl dark:text-white '>Ano</h3>
      </div>
      <div className=' flex flex-col border-2 px-4 py-4 '>

        <div className='py-10 text-center '>
          <h4 className='text-3xl'>2022</h4>
        </div>

        <div className='pb-2'>
          Progresoo :
        </div>
        <div className='flex gap-2 flex-wrap h-10'>
          {Metas.map((item, index) => (
            VerificaTarefas(item.Tarefas, item.Id)
          ))}
        </div>
        <div className='pt-4 pb-2'>
          <p>Planejadas</p>
        </div>
        <div className=''>
          <p>{MetasPlanejadas.length} metas</p>
        </div>
        <div className='pt-4 pb-2'>
          <p>Realizadas</p>
        </div>
        <div className=''>
          <p>4 metas</p>
        </div>
      </div>
    </section>
  )
}
