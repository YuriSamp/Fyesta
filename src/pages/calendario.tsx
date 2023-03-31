import { Button } from '@ui/button';
import { useEffect, useState, useMemo } from 'react';
import { CalendarDays, ICalendarDays } from 'src/helper/CalendarHelpers';
import dynamic from 'next/dynamic';
import MonthController from '@ui/MonthController';

const CalendarModal = dynamic(() => import('@ui/CalendarModal'), {
  ssr: false
})

export default function Calendario() {
  const date = new Date()
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const month = date.getMonth()
  const [MonthIndex, setMonthIndex] = useState(month);
  const [year, setYear] = useState(date.getFullYear())

  const CalendarDaysValue = useMemo(() => CalendarDays(year, MonthIndex), [year, MonthIndex])

  const [days, setDays] = useState<ICalendarDays[]>(CalendarDaysValue)
  const [ismodalOpen, setIsModaOpen] = useState(false)


  useEffect(() => {
    setDays(CalendarDays(year, MonthIndex))
  }, [MonthIndex])

  const BackToday = () => {
    setYear(date.getFullYear())
    setMonthIndex(date.getMonth())
  }

  return (
    <section className='flex flex-col items-center text-black dark:text-white'>
      <div className='flex gap-12'>
        <Button
          Children='Hoje'
          onClick={() => BackToday()}
        />
        <MonthController
          monthIndex={MonthIndex}
          setMonthIndex={setMonthIndex}
          setYear={setYear}
          year={year}
        />
        <Button
          Children='Criar'
        />
      </div>
      <div className='flex pt-2 '>
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
        {days.length > 35 ?
          days.map((item, index) => (
            <div className='w-52 h-32 calendar' key={index}>
              {item.Month === date.getMonth() && item.day === date.getDate() && item.year === date.getFullYear() ?
                <div className='flex justify-center  py-2  select-none'>
                  <div className='w-10 bg-violet-700 dark:bg-DarkModeGreen text-center text-white rounded-full'>
                    {item.day}
                  </div>
                </div>
                :
                item.Month === MonthIndex ?
                  <div className='text-center py-2 pr-4 select-none'>
                    {item.day}
                  </div>
                  :
                  <div className='text-center py-2 pr-4 select-none text-red-600 dark:text-gray-600'>
                    {item.day}
                  </div>
              }
            </div>
          ))
          :
          days.map((item, index) => (
            <div className='w-52 h-40 calendar'
              key={index}
              onClick={(e) => {
                setIsModaOpen(prev => !prev)
                // console.log(e.screenX)
                // console.log(e.screenY)
              }}
            >
              {item.Month === date.getMonth() && item.day === date.getDate() ?
                <div className='flex justify-center  py-2  select-none'>
                  <div className='w-8 bg-violet-700 dark:bg-DarkModeGreen h-8 flex justify-center items-center  text-white rounded-full'>
                    {item.day}
                  </div>
                </div>
                :
                item.Month === MonthIndex ?
                  <div className='text-center py-2 pr-4 select-none'>
                    {item.day}
                  </div>
                  :
                  <div className='text-center py-2 pr-4 select-none text-red-00 dark:text-gray-600'>
                    {item.day}
                  </div>
              }
            </div>
          ))
        }
      </div>
      <CalendarModal
        State={ismodalOpen}
        SetState={setIsModaOpen}
      />
    </section>
  )
}
