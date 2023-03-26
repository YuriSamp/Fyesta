import { Select } from '@ui/Select'
import { useMemo, useState } from 'react'
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { Goal, GoalsWithSetterProps } from 'src/interfaces/Goals'

//TODO concertar o bug de ficar com o filtro errado, mesmo se a opção não existir mais

export default function Actions({ Metas, setMetas }: GoalsWithSetterProps) {
  const [Filter, setFilter] = useState('Todas')

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

  const options = useMemo(() => {
    const arr = Metas.map(meta => meta.Meta)
    return ['Todas', ...arr]
  }, [Metas])

  const ActionFilter = (Metas: Goal[], Filter: string) => {
    if (Filter === 'Todas') return Metas
    return Metas.filter(meta => meta.Meta === Filter)
  }

  return (
    <section className='w-80 self-start'>
      <div className='pb-2 border-b-2 mb-2 flex items-center justify-between'>
        <h3 className='text-3xl  dark:text-white'>Ações</h3>
        {options.length > 2 &&
          <Select
            Options={options}
            onChange={setFilter}
            value={Filter}
            Width='xmd' />
        }
      </div>
      <div className='flex flex-col gap-3 h-[248px] overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
        {ActionFilter(Metas, Filter).map(item => (
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
