import { useState, useEffect } from 'react'
import { BsTrash } from 'react-icons/bs'
import { useAtom } from 'jotai';
import { PlannerTask } from 'src/context/plannerContext';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

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
  }, [taskName,])


  return (
    <div className='flex gap-2 items-center z-0'>
      <Checkbox.Root
        className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border border-black bg-white drop-shadow-2xl  outline-none focus:border-2 focus:border-violet-600 dark:focus:border-DarkModeGreen dark:focus:bg-DarkModeGreen"
        checked={finished}
        id="c1"
        onClick={() => setFinished(prev => !prev)}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            setFinished(prev => !prev)
          }
        }}
      >
        <Checkbox.Indicator className="text-black">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <input className={`bg-transparent  outline-none w-72 text-xl text-black dark:text-white  ${finished ? 'line-through  text-gray-400 dark:text-green-700' : ''} placeholder:text-gray-600 placeholder:dark:text-gray-400 tracking-wide`}
        placeholder='To - do'
        readOnly={finished}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <div className={`${taskName.length === 0 ? 'invisible' : ''}`}>
        <button className='w-5 h-5'>
          <BsTrash
            className='cursor-pointer text-black dark:text-white'
            onClick={() => setTaskName('')}
          />
        </button>
      </div>
    </div>
  )
}
