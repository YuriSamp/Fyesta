import { Button } from '@ui/button';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { dateToDateInput } from 'src/helper/dateHelpers';
import { ICalendarDays, brasilApiType } from 'src/interfaces/calendarTypes';
import MonthController from '@ui/monthController';
import { calendarBuilder } from 'src/helper/calendarHelpers';
import { useQuery } from '@tanstack/react-query';
import { atom, useAtom, useAtomValue } from 'jotai';
import { actionModalOpenState, calendarContext, detailsModalOpenState, modalDateAtom } from 'src/context/calendarContext';
import { CalendarDayDiplay } from '@ui/calendar/DayDisplay';
import DetailsModal from '@ui/calendar/DetailsModal';


const CalendarModal = dynamic(() => import('@ui/calendar/ActionModal'), {
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
  const month = date.getMonth()
  const calendarTasks = useAtomValue(calendarContext)
  const [monthIndex, setMonthIndex] = useState(month);
  const [year, setYear] = useState(date.getFullYear())
  const [days, setDays] = useState<ICalendarDays[]>(calendarBuilder(year, monthIndex, calendarTasks, data))
  const [modalDate, setModalDate] = useAtom(modalDateAtom)
  const [modalRef, setModalRef] = useState<DOMRect | undefined>()
  const [modalRef2, setModalRef2] = useState<DOMRect | undefined>()
  const [isActionModalOpen, setIsActionModalModaOpen] = useAtom(actionModalOpenState)
  const [isdetailsModalOpen, setIsDetailsModalOpen] = useAtom(detailsModalOpenState)

  useEffect(() => {
    setDays(calendarBuilder(year, monthIndex, calendarTasks, data))
  }, [monthIndex, data, year, calendarTasks])


  const backToday = () => {
    setYear(date.getFullYear())
    setMonthIndex(date.getMonth())
  }

  return (
    <section className='flex flex-col items-center text-black dark:text-white '>
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
          <div
            className='w-52 h-40 calendar'
            key={item.id}
            tabIndex={0}
            onClick={(e) => {
              setModalRef(e.currentTarget.getBoundingClientRect())
              setModalDate(dateToDateInput(item.day, item.Month + 1, item.year))
              setIsDetailsModalOpen(false)
              setIsActionModalModaOpen(prev => !prev)
            }}
          >
            {item.Month === date.getMonth() && item.day === date.getDate() && item.year === date.getFullYear() ?
              <CalendarDayDiplay isToday={true} currentMonth={true} item={item} day={item.day} tasks={item.tasks} setModalRef2={setModalRef2} />
              :
              item.Month === monthIndex ?
                <CalendarDayDiplay isToday={false} currentMonth={true} item={item} day={item.day} tasks={item.tasks} setModalRef2={setModalRef2} />
                :
                <CalendarDayDiplay isToday={false} currentMonth={false} item={item} day={item.day} tasks={item.tasks} setModalRef2={setModalRef2} />
            }
          </div>
        ))
        }
        {modalRef !== undefined &&
          <CalendarModal
            isModalOpen={isActionModalOpen}
            setIsModalOpen={setIsActionModalModaOpen}
            date={modalDate}
            divRef={modalRef}
          />
        }
        {modalRef2 !== undefined &&
          <DetailsModal
            isModalOpen={isdetailsModalOpen}
            setIsModalOpen={setIsDetailsModalOpen}
            date={modalDate}
            divRef={modalRef2}
          />
        }
      </div>
    </section>
  )
}
