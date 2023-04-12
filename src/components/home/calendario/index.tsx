import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react'
import { calendarContext } from 'src/context/calendarContext';
import { getDayOfTheWeek } from 'src/helper/dateHelpers';
import { GiPartyPopper } from 'react-icons/gi';

//TODO animação quando mudar as horas e minutos

export default function HomeCalendar() {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const temporizador = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(temporizador);
    };
  }, []);

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const Mounth = date.getMonth()
  const day = date.getDay()
  const dayOfMounth = date.getDate()

  const calendarTasks = useAtomValue(calendarContext)


  return (
    <section className='w-80 shadow-xl rounded-lg border-2'>
      <div className='flex gap-3 h-32 items-center justify-center'>
        <span className='text-7xl'>
          {String(hours).padStart(2, '0')}
        </span>
        <span className='text-7xl '>:</span>
        <span className='text-7xl'>
          {String(minutes).padStart(2, '0')}
        </span>
      </div>
      <div className='w-full h-40'>
        <div className=' flex justify-between py-2 px-4 select-none'>
          <div>
            {getDayOfTheWeek(day)}
          </div>
          <div className='flex gap-1'>
            <span>
              {dayOfMounth}
            </span>
            <span> / </span>
            <span>
              {String(Mounth + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className='py-1 px-2 flex flex-col items-center gap-1 overflow-y-auto  scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 h-[190px] '>
          {calendarTasks.length > 0
            ?
            calendarTasks.map(task => (
              <div
                key={task.name}
                className='w-72 py-2 text-center bg-violet-600 text-white rounded-xl cursor-pointer'
              >
                {task.name}
              </div>
            ))
            :
            <div className='flex flex-col gap-3 justify-center items-center h-full'>
              <span className='text-xl'>nada agendado pro dia de hoje</span>
              <GiPartyPopper className='w-10 h-10' />
            </div>
          }
        </div>
      </div>
    </section>

  )
}
