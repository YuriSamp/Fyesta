import { useState, useEffect } from 'react'
import * as Portal from '@radix-ui/react-portal';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { useAtom } from 'jotai';
import { Goals, categoryOptions } from 'src/context/goalContext';
import { toastNotify } from 'src/utils/toastNotify';
import { InputWithLabel } from '@ui/input/inputWithLabel';
import { Button } from '@ui/button';
import { useTheme } from 'next-themes';
import { BsTrash } from 'react-icons/bs';
import * as Label from '@radix-ui/react-label';
import { GoalsModalType, Task } from 'src/interfaces/goalsTypes';
import { GoalInput } from '@ui/input/GoalInput';

export default function GoalsModal({ State, SetState, goalId, setGoalId }: GoalsModalType) {

  const [metas, setMetas] = useAtom(Goals)
  const [id, setId] = useState(0)
  const [taskArr, settaskArr] = useState<Task[]>([])
  const [taskId, setTaskId] = useState(0)
  const [taskName, setTaskName] = useState('')
  const [task, setTask] = useState('')
  const { theme, setTheme } = useTheme()
  const [isEmptyTask, setIsEmptyTask] = useState(true)
  const [categoryOptionsArr, setCategoryOptionsArr] = useAtom(categoryOptions)
  const [category, setCategory] = useState('')

  const clearStates = () => {
    settaskArr([])
    setTaskName('')
    setTask('')
    setCategory('')
  }

  useEffect(() => {
    if (goalId != null) {
      settaskArr(metas[goalId].Tarefas)
      setTaskId(metas[goalId].Id)
      setTaskName(metas[goalId].Meta)
      return
    }
    clearStates()
  }, [goalId, metas])

  useEffect(() => {
    if (task.length > 0) {
      setIsEmptyTask(false)
      return
    }
    setIsEmptyTask(true)
  }, [task])

  const domNode = useClickOutside(() => {
    SetState(false)
    setGoalId(null)
  })

  const addTask = (task: string) => {
    const taskobj = {
      Tarefa: task,
      realizada: false,
      id: taskId
    }
    setTaskId(prev => prev + 1)
    settaskArr(prev => [...prev, taskobj])
    setTask('')
  }


  const removeTask = (id: number) => {
    const newLista = taskArr.filter(item => item.id !== id)
    settaskArr(newLista)
  }

  const addGoal = () => {
    try {
      toastNotify(taskName.length === 0, "Insira o nome da meta", 'warn')
      toastNotify(taskArr.length === 0, "Insira ao menos uma meta", 'warn')
      toastNotify(category === '', 'Escolha uma área', 'warn')

      if (metas.length < 24) {
        setMetas(prev => [...prev, {
          Id: id,
          Meta: taskName,
          Tarefas: taskArr,
          Categoria: category,
        },])
        setId(prev => prev + 1)
        clearStates()
      }

    } catch (error) {
      console.log(error)
    }
  }

  const EditGoal = () => {
    try {
      toastNotify(taskName.length === 0, "Insira o nome da meta", 'warn')
      toastNotify(taskArr.length === 0, "Insira ao menos uma meta", 'warn')
      toastNotify(category === '', 'Escolha uma área', 'warn')

      const GoalUpdated = metas.map(item => {
        if (item.Id === goalId) {
          item.Categoria = category
          item.Meta = taskName
          item.Tarefas = taskArr
        }
        return item
      })

      setMetas(GoalUpdated)
      clearStates()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Portal.Root>
      {State &&
        <section
          className='w-[500px] fixed left-[720px] top-[100px] flex flex-col items-center bg-[#fafaf5] dark:bg-neutral-900 text-black dark:text-white rounded-sm shadow-2xl dark:shadow-none'
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
              theme={theme === 'light' ? 'light' : ''}
            />
            <fieldset className='flex flex-col gap-2 pt-4 '>
              <Label.Root>
                Selecione a categoria da meta
              </Label.Root>
              <GoalInput
                options={categoryOptionsArr}
                value={goalId != null ? metas[goalId].Categoria : category}
                setoption={setCategoryOptionsArr}
                setState={setCategory}
                placeholder='Procure uma categoria'
              />
            </fieldset>
            <fieldset className='flex flex-col gap-2 pt-4'>
              <Label.Root htmlFor='form1'>
                Escreva uma ação para realizar a meta
              </Label.Root>
              {theme == 'light' ?
                <div className='relative border border-black rounded-lg overflow-hidden'>
                  <input
                    type='text'
                    id='form1'
                    placeholder='Juntar dinheiro'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className={`py-2 px-2 focus:outline-none  ${isEmptyTask ? "w-full" : 'w-[270px]'}`}
                    autoComplete="off"
                  />
                  <button
                    className={`${isEmptyTask ? "hidden" : ''} w-20  text-center rounded-r-lg absolute right-0 h-full cursor-pointer bg-blue-400`}
                    onClick={() => addTask(task)}
                    type='button'
                  >
                    incluir
                  </button>
                </div>
                :
                <div className='relative border border-black rounded-lg overflow-hidden'>
                  <input
                    type='text'
                    id='form1'
                    placeholder='Juntar dinheiro'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className={`py-2 px-2 focus:outline-none  ${isEmptyTask ? "w-full" : 'w-[270px]'}`}
                    autoComplete="off"
                  />
                  <button
                    className={`${isEmptyTask ? "hidden" : ''} w-20  text-center rounded-r-lg absolute right-0 h-full cursor-pointer bg-blue-400`}
                    onClick={() => addTask(task)}
                    type='button'
                  >
                    incluir
                  </button>
                </div>
              }
            </fieldset>
          </div>
          <hr className='border-black  dark:border-white w-3/4 flex justify-center my-4' />

          <div
            className='h-52 px-4 py-1 mx-4 rounded-lg w-4/5  overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'
          >
            <ul className='flex flex-col gap-2'>
              <li className='pb-2 dark:text-gray-400 text-neutral-700 text-center '>Suas ações aparecerâo aqui</li>
              {taskArr.map(item => (
                <li key={item.id} className='flex justify-between select-none'>
                  <p>{item.Tarefa}</p>
                  <button>
                    <BsTrash className='w-4 h-4 cursor-pointer'
                      onClick={() => removeTask(item.id)}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <hr className='border-black dark:border-white w-3/4 flex justify-center my-2 mb-3' />
          <div className='py-4 flex justify-center gap-8' >
            {goalId === null ?
              <Button
                Children='Incluir meta'
                Width='md'
                intent='success'
                onClick={() => addGoal()}
              />
              :
              <Button
                Children='Atualizar meta'
                Width='md'
                intent='success'
                onClick={() => EditGoal()}
              />
            }
            <Button
              Children='Limpar meta'
              Width='md'
              intent='danger'
              onClick={() => clearStates()}
            />
          </div>
        </section>
      }
    </Portal.Root>
  )
}
