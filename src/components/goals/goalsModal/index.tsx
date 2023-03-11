import React, { useState } from 'react'
import * as Portal from '@radix-ui/react-portal';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { ModalProps } from 'src/interfaces/Modal';
import { useAtom } from 'jotai';
import { Goals } from 'src/context/Goals/GoalContext';
import { Task } from 'src/interfaces/Goals';
import { toast } from 'react-toastify';

export default function GoalsModal({ State, SetState }: ModalProps) {

  //AJEITAR O NOME DA META


  const [Metas, setMetas] = useAtom(Goals)
  const [id, setId] = useState(0)
  const [taskarr, setTaskarr] = useState<Task[]>([])
  const [taskId, setTaskId] = useState(0)
  const [taskName, setTaskName] = useState('')
  const [task, setTask] = useState('')
  const [field, setField] = useState(0)

  const domNode = useClickOutside(() => SetState(false))

  const FieldSelected = () => {
    let Categoria = ''
    switch (field) {
      case 1:
        Categoria = 'Intelectual'
        break
      case 2:
        Categoria = 'Pessoal'
        break
      case 3:
        Categoria = 'Financeiro'
        break
    }
    return Categoria
  }


  const addGoal = () => {
    const Categoria = FieldSelected()

    if (taskName.length === 0) {
      const notify = () => toast.error("Insira o nome da meta");
      notify()
      return
    }

    if (taskarr.length === 0) {
      const notify = () => toast.warn("Insira ao menos uma meta");
      notify()
      return
    }

    if (field === 0) {
      const notify = () => toast.warn("Escolha uma área");
      notify()
      return
    }

    if (Metas.length < 24) {
      setMetas(prev => [...prev, {
        Id: id,
        Meta: taskName,
        Tarefas: taskarr,
        Categoria: Categoria,
      },])
      setId(prev => prev + 1)
      setTaskarr([])
      setTaskName('')
      setTask('')
      setField(0)
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
    setTask('')
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
              value={task}
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
              <input
                type='radio'
                id='op1'
                name='field'
                onChange={() => setField(1)}
                checked={field === 1}
              />
              <label htmlFor="op1">Intelectual</label>
            </div>
            <div className='flex gap-2'>
              <input
                type='radio'
                id='op2'
                name='field'
                onChange={() => setField(2)}
                checked={field === 2}
              />
              <label htmlFor="op2">Pessoal</label>
            </div>
            <div className='flex gap-2'>
              <input
                type='radio'
                id='op3'
                name='field'
                onChange={() => setField(3)}
                checked={field === 3}
              />
              <label htmlFor="op3">Financeiro</label>
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
