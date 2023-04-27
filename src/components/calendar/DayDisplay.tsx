import { useAtomValue, useSetAtom } from 'jotai'
import { ICalendarDays, ICalendarTask } from 'src/interfaces/calendarTypes'
import { Dispatch, SetStateAction, } from 'react'
import {
  actionModalOpenState,
  detailsModalOpenState,
  holidayAtom,
  modalDateAtom,
  nationalHolidayAtom,
  reminderAtom,
  taskAtom,
  taskDescriptionAtom,
  taskNameAtom,
  taskTypeAtom
} from 'src/context/calendarContext'
import { dateToDateInput } from 'src/helper/dateHelpers'
import { getTaskColor } from 'src/utils/taskColors'

interface CalendarDayDiplayType {
  item: ICalendarDays
  isToday: boolean
  day: number
  tasks: ICalendarTask[]
  currentMonth: boolean
  setModalRef2: Dispatch<SetStateAction<DOMRect | undefined>>
  size: 'big' | 'small'
}

interface calendarDayTasksDisplay extends ICalendarTask {
  setModalRef2: Dispatch<SetStateAction<DOMRect | undefined>>
  item: ICalendarDays
}

export const CalendarDayDiplay = ({ isToday, day, tasks, currentMonth, setModalRef2, item, size }: CalendarDayDiplayType) => {

  const isNationalHolidaysAllowed = useAtomValue(nationalHolidayAtom)
  const isHolidaysAllowed = useAtomValue(holidayAtom)
  const isReminderAllowed = useAtomValue(reminderAtom)
  const isTaskAllowed = useAtomValue(taskAtom)

  const taskFilter = (tasks: ICalendarTask[]) => {
    let arr1: ICalendarTask[] = []
    let arr2: ICalendarTask[] = []
    let arr3: ICalendarTask[] = []
    let arr4: ICalendarTask[] = []
    if (isNationalHolidaysAllowed) {
      arr1 = tasks.filter(task => task.type === 'Feriado Nacional')
    }
    if (isHolidaysAllowed) {
      arr2 = tasks.filter(task => task.type === 'Data Comemorativa')
    }
    if (isReminderAllowed) {
      arr3 = tasks.filter(task => task.type === 'Reminder')
    }
    if (isTaskAllowed) {
      arr4 = tasks.filter(task => task.type === 'Task')
    }
    return arr1.concat(arr2, arr3, arr4)
  }

  if (isToday) {
    return (
      <div className='flex flex-col items-center  gap-2 py-2 px-2 select-none'>
        <div className='w-10 bg-violet-700 dark:bg-DarkModeGreen text-center text-white rounded-full'>
          {day}
        </div>
        <div className='text-black w-full flex flex-col gap-2 h-28 overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-4 py-1'>
          {taskFilter(tasks).map((task, i) => (
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
        <div className={`text-black flex flex-col gap-2 ${size === 'big' ? 'h-36' : 'h-20'}  overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-2`}>
          {taskFilter(tasks).map((task, i) => (
            <CalendarDayTasksDisplay day={task.day} month={task.month} name={task.name} type={task.type} setModalRef2={setModalRef2} key={i} item={item} description={task.description} />
          ))}
        </div>
      </div>
    </div>
  )
}


const CalendarDayTasksDisplay = ({ name, type, setModalRef2, item, description }: calendarDayTasksDisplay) => {
  const taskColor = getTaskColor(type)

  const setIsModaOpen = useSetAtom(detailsModalOpenState)
  const setIsActionModalModaOpen = useSetAtom(actionModalOpenState)
  const setTaskTypeAtom = useSetAtom(taskTypeAtom)
  const setModalDate = useSetAtom(modalDateAtom)
  const setModalTask = useSetAtom(taskNameAtom)
  const setTaskDescription = useSetAtom(taskDescriptionAtom)

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
