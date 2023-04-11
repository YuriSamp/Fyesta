import { Button } from '@ui/button';
import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { dateToDateInput } from 'src/helper/dateHelpers';
import { ICalendarDays, ICalendarTask, brasilApiType } from 'src/interfaces/calendarTypes';
import MonthController from '@ui/monthController';
import { calendarBuilder } from 'src/helper/calendarHelpers';
import { useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { calendarContext } from 'src/context/calendarContext';

const CalendarModal = dynamic(() => import('@ui/calendarActionModal'), {
  ssr: false
})

const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export default function Calendario() {

  const { isLoading, error, data } = useQuery<brasilApiType[]>({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`).then(
        (res) => res.json(),
      ),
  })

  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const calendarTasks = useAtomValue(calendarContext)
  const [monthIndex, setMonthIndex] = useState(month);
  const [year, setYear] = useState(date.getFullYear())
  const [days, setDays] = useState<ICalendarDays[]>(calendarBuilder(year, monthIndex, calendarTasks, data))
  const [ismodalOpen, setIsModaOpen] = useState(false)
  const [dateInputModal, setDateInputModal] = useState(dateToDateInput(day, month + 1, year))
  const [divRef, setDivRef] = useState<DOMRect | undefined>()

  useEffect(() => {
    setDays(calendarBuilder(year, monthIndex, calendarTasks, data))
  }, [monthIndex, data, year, calendarTasks])


  const backToday = () => {
    setYear(date.getFullYear())
    setMonthIndex(date.getMonth())
  }

  return (
    <section className='flex flex-col items-center text-black dark:text-white'>
      <div className='flex gap-12 relative'>
        <Button
          Children='Hoje'
          onClick={() => backToday()}
        />
        <MonthController
          monthIndex={monthIndex}
          setMonthIndex={setMonthIndex}
          setYear={setYear}
          year={year}
        />
        <Button
          Children='Criar'
        />
      </div>
      <div className='flex pt-2 relative '>
        {daysOfWeek.map(item => (
          <div
            className='px-4 py-2 w-52 text-center'
            key={item}
          >
            <h3 className='select-none'>{item}</h3>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap max-w-[1460px] justify-center text-lg' >
        {days.map((item) => (
          <div className='w-52 h-36 calendar'
            key={item.id}
            onClick={(e) => {
              console.log(e.currentTarget.getBoundingClientRect())
              setDivRef(e.currentTarget.getBoundingClientRect())
              setDateInputModal(dateToDateInput(item.day, item.Month + 1, item.year))
              setIsModaOpen(prev => !prev)
            }}
          >
            {item.Month === date.getMonth() && item.day === date.getDate() && item.year === date.getFullYear() ?
              <div
                className='flex justify-center py-2 px-2 select-none'
              >
                <div className='w-10 bg-violet-700 dark:bg-DarkModeGreen text-center text-white rounded-full'>
                  {item.day}
                  <div className='text-black'>
                    {item.tasks.map(task => (
                      <CalendarDayTasksDisplay day={task.day} month={task.month} name={task.name} type={task.type} key={task.day} />
                    ))}
                  </div>
                </div>
              </div>
              :
              item.Month === monthIndex ?
                <div
                  className='text-center py-2 px-2 select-none'
                >
                  {item.day}
                  <div className='text-black'>
                    {item.tasks.map(task => (
                      <CalendarDayTasksDisplay day={task.day} month={task.month} name={task.name} type={task.type} key={task.day} />
                    ))}
                  </div>
                </div>
                :
                <div className='text-center py-2 px-2 select-none text-gray-300 dark:text-gray-600'>
                  {item.day}
                  <div className='text-black'>
                    {item.tasks.map(task => (
                      <CalendarDayTasksDisplay day={task.day} month={task.month} name={task.name} type={task.type} key={task.day} />
                    ))}
                  </div>
                </div>
            }
          </div>
        ))
        }
        {divRef !== undefined &&
          <CalendarModal
            isModalOpen={ismodalOpen}
            setIsModalOpen={setIsModaOpen}
            day={dateInputModal}
            divRef={divRef}
          />
        }
      </div>
    </section>
  )
}

const CalendarDayTasksDisplay = ({ name, description, type }: ICalendarTask) => {
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

  return (
    <button key={name} className={`w-full h-8 rounded-md ${taskColor} flex justify-center items-center`}>
      {name}
    </button>
  )
}
