import { AiOutlineCheck } from 'react-icons/ai';
import { useAtom } from 'jotai';
import { PlannerTask } from 'src/context/plannerContext';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export default function DisplayList() {

  const [taskArr, setTaskArr] = useAtom(PlannerTask)
  const dayOfWeek = new Date().getDay()

  function BooleanChange(id: number) {
    const newTaskArr = taskArr.map(taskObj => {
      if (taskObj.day === dayOfWeek) {
        taskObj.tasks[id - 1].done = !taskObj.tasks[id - 1].done
      }
      return taskObj
    })
    setTaskArr(newTaskArr)
  }

  return (
    <div className='flex flex-col gap-3  w-[280px]'>
      {taskArr[dayOfWeek].tasks.map(task => (
        <div className='flex gap-3 tasks-center' key={task.id}>
          <Checkbox.Root
            className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border border-black bg-white drop-shadow-2xl  outline-none"
            checked={task.done}
            id="c1"
            onClick={() => BooleanChange(task.id)}
          >
            <Checkbox.Indicator className="text-violet11">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <input className={`bg-transparent  outline-none  text-xl text-black dark:text-white  ${task.done ? 'line-through  text-gray-400 dark:text-green-700' : ''} placeholder:text-gray-600 placeholder:dark:text-gray-400 tracking-wide`}
            placeholder='To - do'
            value={task.text}
            readOnly={true}
          />

        </div>
      ))}
    </div>
  )
}
