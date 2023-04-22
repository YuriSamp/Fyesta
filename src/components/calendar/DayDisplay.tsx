import { useSetAtom } from 'jotai'
import { ICalendarDays, ICalendarTask } from 'src/interfaces/calendarTypes'
import { Dispatch, SetStateAction } from 'react'
import {
  actionModalOpenState,
  detailsModalOpenState,
  modalDateAtom,
  taskDescriptionAtom,
  taskNameAtom,
  taskTypeAtom
} from 'src/context/calendarContext'
import { dateToDateInput } from 'src/helper/dateHelpers'

interface CalendarDayDiplayType {
  item: ICalendarDays
  isToday: boolean
  day: number
  tasks: ICalendarTask[]
  currentMonth: boolean
  setModalRef2: Dispatch<SetStateAction<DOMRect | undefined>>
}

interface calendarDayTasksDisplay extends ICalendarTask {
  setModalRef2: Dispatch<SetStateAction<DOMRect | undefined>>
  item: ICalendarDays
}

export const CalendarDayDiplay = ({ isToday, day, tasks, currentMonth, setModalRef2, item }: CalendarDayDiplayType) => {

  if (isToday) {
    return (
      <div className='flex flex-col items-center  gap-2 py-2 px-2 select-none'>
        <div className='w-10 bg-violet-700 dark:bg-DarkModeGreen text-center text-white rounded-full'>
          {day}
        </div>
        <div className='text-black w-full flex flex-col gap-2 h-28 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-4 py-1'>
          {tasks.map((task, i) => (
            <CalendarDayTasksDisplay day={task.day} month={task.month} name={task.name} type={task.type} setModalRef2={setModalRef2} key={i} item={item} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className='text-center py-2 px-2 select-none'
    >
      <div className={`flex flex-col gap-2 h-36 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-2 + ${!currentMonth && 'text-gray-300 dark:text-gray-600'}`}>
        {day}
        <div className='text-black flex flex-col gap-2 h-28 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-2'>
          {tasks.map((task, i) => (
            <CalendarDayTasksDisplay day={task.day} month={task.month} name={task.name} type={task.type} setModalRef2={setModalRef2} key={i} item={item} description={task.description} />
          ))}
        </div>
      </div>
    </div>
  )
}


const CalendarDayTasksDisplay = ({ name, type, setModalRef2, item, description }: calendarDayTasksDisplay) => {
  let taskColor = ''
  switch (type) {
    case 'Data Comemorativa':
      taskColor = 'bg-blue-400'
      break
    case 'Feriado Nacional':
      taskColor = 'bg-violet-400'
      break
    case 'Reminder':
      taskColor = 'bg-green-400'
      break
    case 'Task':
      taskColor = 'bg-orange-400'
      break
  }

  const setIsModaOpen = useSetAtom(detailsModalOpenState)
  const setIsActionModalModaOpen = useSetAtom(actionModalOpenState)
  const setTaskTypeAtom = useSetAtom(taskTypeAtom)
  const setModalDate = useSetAtom(modalDateAtom)
  const setModalTask = useSetAtom(taskNameAtom)
  const setTaskDescription = useSetAtom(taskDescriptionAtom)
  console.log(description)

  return (
    <button
      key={name}
      className={`w-full min-h-[32px] px-1 rounded-md ${taskColor} flex justify-center items-center `}
      onClick={(e) => {
        setModalRef2(e.currentTarget.getBoundingClientRect())
        e.stopPropagation()
        setIsModaOpen(true)
        setIsActionModalModaOpen(false)
        setTaskTypeAtom(type)
        setModalDate(dateToDateInput(item.day, item.Month + 1, item.year))
        setModalTask(name)
        if (description) {
          setTaskDescription(description)
        }
      }}
    >
      {name}
    </button>
  )
}
