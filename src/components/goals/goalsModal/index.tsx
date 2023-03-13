import React, { useState } from 'react'
import * as Portal from '@radix-ui/react-portal';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { ModalProps } from 'src/interfaces/Modal';
import { useAtom } from 'jotai';
import { Goals } from 'src/context/Goals/GoalContext';
import { Task } from 'src/interfaces/Goals';
import { toastNotify } from 'src/utils/toastNotify';
import { InputWithLabel } from '@ui/input/InputWithLabel';
import { Button } from '@ui/button';
import * as RadioGroup from '@radix-ui/react-radio-group';

// TODO Revisar

export default function GoalsModal({ State, SetState }: ModalProps) {

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

  const ClearStates = () => {
    setTaskarr([])
    setTaskName('')
    setTask('')
    setField(0)
  }


  const addGoal = () => {
    try {
      const Categoria = FieldSelected()
      toastNotify(taskName.length === 0, "Insira o nome da meta", 'warn')
      toastNotify(taskarr.length === 0, "Insira ao menos uma meta", 'warn')
      toastNotify(field === 0, 'Escolha uma área', 'warn')

      if (Metas.length < 24) {
        setMetas(prev => [...prev, {
          Id: id,
          Meta: taskName,
          Tarefas: taskarr,
          Categoria: Categoria,
        },])
        setId(prev => prev + 1)
        ClearStates()
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Portal.Root>
      {State &&
        <section
          className='w-[500px] fixed left-[720px] top-[300px] flex flex-col items-center bg-[#fafaf5] dark:bg-neutral-900 text-black dark:text-white rounded-sm border-[1px] border-black dark:border-none'
          ref={domNode}
        >
          <div className='pt-4 text-center'>
            <h1 className='text-2xl'>Adicione uma nova meta</h1>
          </div>
          <div className='pt-2 pl-4 flex flex-col gap-2 w-3/4'>
            <InputWithLabel
              onChange={setTaskName}
              placeholder='Doar para caridade'
              type='text'
              value={taskName}
              Id='form1'
              labelText='Insira o nome da meta'
            />
            <InputWithLabel
              onChange={setTask}
              placeholder='Juntar dinheiro'
              type='text'
              value={task}
              Id='form1'
              labelText='Escreva uma ação para realizar a meta'
            />
          </div>
          <div className='pb-2 pt-4 pl-4'>
            <Button
              Children='Incluir ação'
              Width='md'
              intent='success'
              onClick={() => addTask(task)}
            />
          </div>

          <hr className='border-black  dark:border-white w-3/4 flex justify-center my-2' />

          <div
            className='h-52 px-4 py-1 mx-4  rounded-lg w-4/5 text-center  overflow-y-auto  scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'
          >
            <ul>
              <li className='pb-2 dark:text-gray-400 text-neutral-700'>Suas ações aparecerâo aqui</li>
              {taskarr.map(item => (
                <li key={item.id}>{item.Tarefa}</li>
              ))}
            </ul>
          </div>

          <hr className='border-black dark:border-white w-3/4 flex justify-center my-2 mb-3' />

          <div className='flex py-3 justify-center gap-4'>
            <RadioGroup.Root
              className="flex gap-2.5"
              defaultValue="default"
              aria-label="View density"
            >
              <div className="flex items-center">
                <RadioGroup.Item
                  className="bg-white w-5 h-5 rounded-full focus:shadow-black outline-none cursor-default ring-violet-600 ring-2 dark:ring-0"
                  value="Intelectual"
                  id="r1"
                  onClick={() => setField(1)}
                  checked={field === 1}
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:dark:bg-green-600 after:bg-violet-600" />
                </RadioGroup.Item>
                <label className="dark:text-white text-[15px] leading-none pl-3" htmlFor="r1">
                  Intelectual
                </label>
              </div>

              <div className="flex items-center">
                <RadioGroup.Item
                  className="bg-white w-5 h-5 rounded-full focus:shadow-black outline-none cursor-default ring-violet-600 ring-2 dark:ring-0"
                  value="Pessoal"
                  id="r2"
                  onClick={() => setField(2)}
                  checked={field === 2}
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:dark:bg-green-600 after:bg-violet-600" />
                </RadioGroup.Item>
                <label className="dark:text-white text-[15px] leading-none pl-3" htmlFor="r2">
                  Pessoal
                </label>
              </div>

              <div className="flex items-center">
                <RadioGroup.Item
                  className="bg-white w-5 h-5 rounded-full focus:shadow-black outline-none cursor-default ring-violet-600 ring-2 dark:ring-0"
                  value='Financeiro'
                  id="r3"
                  onClick={() => setField(3)}
                  checked={field === 3}
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-[50%] after:dark:bg-green-600 after:bg-violet-600" />
                </RadioGroup.Item>
                <label className="dark:text-white text-[15px] leading-none pl-3" htmlFor="r3">
                  Financeiro
                </label>
              </div>
            </RadioGroup.Root>
          </div>

          <div className='py-4 flex justify-center gap-8' >
            <Button
              Children='Incluir meta'
              Width='md'
              intent='success'
              onClick={() => addGoal()}
            />
            <Button
              Children='Limpar meta'
              Width='md'
              intent='danger'
              onClick={() => ClearStates()}
            />
          </div>
        </section>
      }
    </Portal.Root>
  )
}
