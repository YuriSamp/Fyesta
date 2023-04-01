import { Select } from '@ui/Select'
import { useState } from 'react'
import { SheetsProps, Task, Goal } from 'src/interfaces/GoalsTypes'

//TODO organizar esse filter

type Filter = 'Todas' | 'Concluidas' | 'Em progresso' | 'Não iniciadas'

export default function GoalTracker({ Metas, setState }: SheetsProps) {

  const tasksDone = (Tasksarr: Task[]) => {
    const Tasks = Tasksarr.map(item => item.realizada)
    const TasksDoneArr = Tasks.filter(item => item === true)
    return TasksDoneArr.length
  }

  const [FilterState, setFilterState] = useState<Filter>('Todas')

  function OrdenaPlanilha(Metas: Goal[], filtro: Filter) {
    if (filtro === 'Todas') {
      return Metas
    }
    if (filtro === 'Concluidas') {
      const tasksDonearr = Metas.filter(meta => meta.Tarefas.every(task => task.realizada === true))
      return tasksDonearr
    } if (filtro === 'Não iniciadas') {
      const tasksToDoarr = Metas.filter(meta => meta.Tarefas.every(task => task.realizada === false))
      return tasksToDoarr
    }
    if (filtro = 'Em progresso') {
      const tasksTodoarr = Metas.filter(meta => !meta.Tarefas.every(task => task.realizada === false))
      const tasksinProgress = tasksTodoarr.filter(meta => !meta.Tarefas.every(task => task.realizada === true))
      return tasksinProgress
    }
  }

  return (
    <section className='flex flex-col  w-[600px]  self-start'>
      <div className='pb-2 border-b-2 mb-2 flex items-center justify-between '>
        <h3 className='text-3xl  dark:text-white'>Metas</h3>
        <Select
          Options={['Todas', 'Concluidas', 'Em progresso', 'Não iniciadas']}
          onChange={setFilterState}
          value={FilterState}
          Width='md' />
      </div>
      <div className='flex flex-col gap-3 pt-2'>
        <div className='flex '>
          <div className='w-60 text-center'>
            <p className='text-lg'>Objetivo</p>
          </div>
          <div className='w-96 text-center'>
            <p className='text-lg'>Progresso</p>
          </div>
          <div className='w-60 text-center'>
            <p className='text-lg pl-10'>Categoria</p>
          </div>
        </div>
        <section className='flex flex-col gap-3 h-[200px] overflow-y-auto  scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
          {OrdenaPlanilha(Metas, FilterState)?.map(item => (
            <div
              className='w-full flex gap-3'
              key={item.Id}
            >
              <div className='flex gap-2 items-center w-60'>
                <p className='text-xl'>{item.Meta}</p>
              </div>
              <div className='w-96 flex gap-2 items-center justify-center'>
                <p>Ações</p>
                <p> {tasksDone(item.Tarefas)} / {item.Tarefas.length} </p>
              </div>
              <div className='w-60 text-center'>
                <p>{item.Categoria}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}
