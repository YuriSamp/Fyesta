import { Select } from '@ui/Select'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { SheetsProps, Task, Goal } from 'src/interfaces/Goals'
import { BsTrash, BsPencil } from 'react-icons/bs'
import * as Progress from '@radix-ui/react-progress';

// TODO adicionar um editar 

export default function Sheets({ Metas, setState, setMetas }: SheetsProps) {

  const options = ['Todas', 'Concluidas', 'Em progresso', 'Não iniciadas', 'Intelectual', 'Pessoal', 'Financeiro'] as const
  type Filter = typeof options[number]

  const [FilterState, setFilterState] = useState<Filter>('Todas')

  const ordenaPlanilha = (Metas: Goal[], filtro: Filter) => {

    switch (filtro) {
      case "Todas":
        return Metas;
      case "Concluidas":
        return Metas.filter(meta => meta.Tarefas.every(task => task.realizada));
      case "Não iniciadas":
        return Metas.filter(meta => meta.Tarefas.every(task => !task.realizada));
      case "Em progresso":
        return Metas.filter(meta => meta.Tarefas.some(task => !task.realizada) && meta.Tarefas.some(task => task.realizada));
      case "Financeiro":
      case "Intelectual":
      case "Pessoal":
        return Metas.filter(meta => meta.Categoria === filtro);
      default:
        throw new Error("Filtro inválido");
    }
  }

  const RemoveTask = (id: number) => {
    const newLista = Metas.filter(item => item.Id !== id)
    setMetas(newLista)
  }

  const ProgressBarfunc = (tarefas: Task[]) => {
    const TarefasFeitas = tarefas.filter(task => task.realizada === false)
    return tarefas.length - TarefasFeitas.length
  }

  const EditTask = (id: number) => { }

  return (
    <section className='flex flex-col w-[976px]  self-start'>
      <div className='pb-2 border-b-2 mb-2 flex items-center justify-between '>
        <h3 className='text-3xl  dark:text-white'>Metas</h3>
        <Select
          Options={options}
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
            <p className='text-lg pl-10 '>Categoria</p>
          </div>
        </div>
        <section className='flex flex-col gap-3 h-[200px] overflow-y-auto  scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
          {ordenaPlanilha(Metas, FilterState)?.map(item => (
            <div
              className='w-full flex gap-3'
              key={item.Id}
            >
              <div className='flex gap-2 items-center w-60'>
                <p className='text-xl'>{item.Meta}</p>
              </div>
              <div className='w-96 flex gap-2 items-center justify-center'>
                <Progress.Root
                  className="relative overflow-hidden bg-white border-[1px] border-black rounded-full w-52 h-[25px]"
                  style={{
                    transform: 'translateZ(0)',
                  }}
                  value={item.Tarefas.length}
                >
                  <Progress.Indicator
                    className="bg-violet-900 dark:bg-green-700 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                    style={{ transform: `translateX(-${100 - (ProgressBarfunc(item.Tarefas) * (100 / item.Tarefas.length))}%)` }}
                  />
                </Progress.Root>
              </div>
              <div className='w-60 text-center'>
                <p>{item.Categoria}</p>
              </div>
              <div className='flex gap-5 items-center'>
                <BsPencil className='w-4 h-4 cursor-pointer' />
                <BsTrash className='w-4 h-4 cursor-pointer'
                  onClick={() => RemoveTask(item.Id)}
                />
              </div>
            </div>
          ))}
          <button
            className='flex gap-2 items-center text-gray-400 cursor-pointer w-48'
            onClick={() => setState(true)}
          >
            <AiOutlinePlus className='w-7 h-7' />
            <p className='text-xl'>Nova meta</p>
          </button>
        </section>
      </div>
    </section>
  )
}
