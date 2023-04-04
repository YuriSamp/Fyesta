import { useState, useEffect } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs'
import { useAtom } from 'jotai';
import { PlannerTask } from 'src/context/plannerContext';

interface Props {
  index: number
  day: number
  value: string
}

export default function EditableListItem({ index, day, value }: Props) {

  const [taskName, setTaskName] = useState(value)
  const [finished, setFinished] = useState(false)
  const [taskArr, setTaskArr] = useAtom(PlannerTask)

  const registerText = (task: string) => {
    const newTaskArr = taskArr.map(item => {
      if (item.day === day) {
        item.tasks[index].text = task
      }
      return item
    })
    setTaskArr(newTaskArr)
  }

  useEffect(() => {
    registerText(taskName)
  }, [taskName])

  return (
    <div className='flex gap-3 items-center'>
      <input className={`bg-transparent  outline-none w-72 text-xl text-black dark:text-white  ${finished ? 'line-through  text-gray-400 dark:text-green-700' : ''} placeholder:text-gray-600 placeholder:dark:text-gray-400 tracking-wide`}
        placeholder='To - do'
        readOnly={finished}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className='w-5 h-5'>
        <AiOutlineCheck
          className='cursor-pointer text-black dark:text-white'
          onClick={() => setFinished(prev => !prev)}
        />
      </button>
      <button className='w-5 h-5'>
        <BsTrash
          className='cursor-pointer text-black dark:text-white'
          onClick={() => setTaskName('')}
        />
      </button>
    </div>
  )
}
