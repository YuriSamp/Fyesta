import React, { useState } from 'react'
import * as Portal from '@radix-ui/react-portal';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { ModalProps } from 'src/interfaces/Modal';
import { useAtom } from 'jotai';
import { Goals } from 'src/context/Goals/GoalContext';
import { Tarefa } from 'src/interfaces/Goals';


export default function GoalsModal({ State, SetState }: ModalProps) {

  const [Metas, setMetas] = useAtom(Goals)
  const [id, setId] = useState(0)
  const [taskarr, setTaskarr] = useState<Tarefa[]>([])
  const [taskId, setTaskId] = useState(0)

  const [taskName, setTaskName] = useState('')
  const [task, setTask] = useState('')

  const domNode = useClickOutside(() => SetState(false))


  const addGoal = () => {
    if (Metas.length < 24) {
      setMetas(prev => [...prev, {
        Id: id,
        Meta: taskName,
        Tarefas: taskarr,
        Categoria: 'Intelectual',
      },])
      setId(prev => prev + 1)
    }
  }

  const addTask = (task: string) => {
    const taskobj = {
      Tarefa: task,
      realizada: false,
      id: taskId
    }
    setTaskId(prev => prev + 1)
    setTaskarr(prev => [...prev, taskobj])
  }


  return (
    <Portal.Root>
      {State &&
        <section className='border-2 w-[450px] fixed left-[720px] top-[300px] flex flex-col bg-white text-black'
          ref={domNode}
        >
          <div className='pt-4 text-center'>
            <h1 className='text-2xl'>Adicione uma nova meta</h1>
          </div>
          <div className='pt-2 pl-4'>
            <input
              placeholder='Adicione um nome'
              className='bg-transparent placeholder:text-black w-72 border-[1px] border-black rounded-lg px-2 focus:outline-none '
              onChange={e => setTaskName(e.target.value)}
            />
          </div>
          <div className='pt-2 pl-4'>
            <input
              placeholder='Adicione uma ação'
              className='bg-transparent placeholder:text-black w-72 border-[1px] border-black rounded-lg px-2 focus:outline-none'
              onChange={e => setTask(e.target.value)}
            />
          </div>
          <div className='py-2 pl-4'>
            <button
              className='bg-green-700 p-1 rounded-md text-white'
              onClick={() => addTask(task)}
            >
              Incluir meta
            </button>
          </div>
          <div className='h-52 px-4 mx-4 my-4 border-[1px] border-black rounded-lg'>
            <ul>
              {taskarr.map(item => (
                <li key={item.id}>{item.Tarefa}</li>
              ))}
            </ul>
          </div>
          <div className='flex px-4 justify-center gap-4'>
            <div className='flex gap-2'>
              <input type='radio' id='op1' />
              <label htmlFor="op1">Intelectual</label>
            </div>
            <div className='flex gap-2'>
              <input type='radio' id='op1' />
              <label htmlFor="op1">Pessoal</label>
            </div>
            <div className='flex gap-2'>
              <input type='radio' id='op1' />
              <label htmlFor="op1">Financeiro</label>
            </div>
          </div>
          <div className='pl-4 py-4' >
            <button
              className='bg-green-700 p-4 rounded-md text-white'
              onClick={() => addGoal()}
            >
              Incluir meta
            </button>
          </div>
        </section>
      }
    </Portal.Root>
  )
}
