import { useAtomValue } from 'jotai';
import { PlannerTask } from 'src/context/PlannerContext';
import EditableListItem from './item';

type EditableProps = { day: number, Title: string }

export default function EditableList({ day, Title }: EditableProps) {

  const TasksForADay = useAtomValue(PlannerTask)

  return (
    <div className='flex flex-col gap-3 w-[352px]'>
      <div className='pb-3 border-b-2 border-[#707070] dark:border-[#383838]'>
        <h3 className='text-2xl text-violet-900 dark:text-green-700 '>{Title}</h3>
      </div>
      <div className='flex flex-col gap-3 items-center'>
        {TasksForADay[day].tasks.map((item, index) => (
          <EditableListItem index={index} key={index} day={day} value={item.text} />
        ))}
      </div>
    </div>
  )
}
