import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { useAtom } from 'jotai';
import { PlannerTask } from 'src/context/PlannerContext';

export default function DisplayList() {

  const [TaskArr, setTaskArr] = useAtom(PlannerTask)
  const dayOfWeek = new Date().getDay()

  function BooleanChange(id: number) {
    const newTaskArr = TaskArr.map(taskObj => {
      if (taskObj.day === dayOfWeek) {
        taskObj.tasks[id - 1].done = !taskObj.tasks[id - 1].done
      }
      return taskObj
    })
    setTaskArr(newTaskArr)
  }

  return (
    <div className='flex flex-col gap-3 taskObjs-center w-[280px]'>
      {TaskArr[dayOfWeek].tasks.map(task => (
        <div className='flex gap-3 tasks-center' key={task.id}>
          <input className={`bg-transparent  outline-none  text-xl text-black dark:text-white  ${task.done ? 'line-through  text-gray-400 dark:text-green-700' : ''} placeholder:text-gray-600 placeholder:dark:text-gray-400 tracking-wide`}
            placeholder='To - do'
            value={task.text}
            readOnly={true}
          />
          <button className='w-5 h-5'>
            <AiOutlineCheck
              className='cursor-pointer text-black dark:text-white'
              onClick={() => BooleanChange(task.id)}
            />
          </button>
        </div>
      ))}
    </div>
  )
}
