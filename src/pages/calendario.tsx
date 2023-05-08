import { Button } from '@ui/button';
import { MouseEvent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { dateToDateInput } from 'src/helper/dateHelpers';
import { ICalendarDays, brasilApiType } from 'src/interfaces/calendarTypes';
import { calendarBuilder } from 'src/helper/calendarHelpers';
import { useQuery } from '@tanstack/react-query';
import { useAtom, useAtomValue } from 'jotai';
import { actionModalOpenState, calendarContext, detailsModalOpenState, modalDateAtom } from 'src/context/calendarContext';
import { CalendarDayDiplay } from '@ui/calendar/DayDisplay';
import DetailsModal from '@ui/calendar/DetailsModal';
import { CalendarFilters } from '@ui/calendar/CalendarFilters';
import CreateModal from '@ui/calendar/CreateModal';
import { MonthController } from '@ui/monthController';

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
  const day = date.getDate()
  const calendarTasks = useAtomValue(calendarContext)
  const [monthIndex, setMonthIndex] = useState(month);
  const [year, setYear] = useState(date.getFullYear())
  const [days, setDays] = useState<ICalendarDays[]>(calendarBuilder(year, monthIndex, calendarTasks, data))
  const [modalDate, setModalDate] = useAtom(modalDateAtom)
  const [modalRef, setModalRef] = useState<DOMRect | undefined>()
  const [modalRef2, setModalRef2] = useState<DOMRect | undefined>()
  const [isActionModalOpen, setIsActionModalModaOpen] = useAtom(actionModalOpenState)
  const [isdetailsModalOpen, setIsDetailsModalOpen] = useAtom(detailsModalOpenState)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  useEffect(() => {
    setDays(calendarBuilder(year, monthIndex, calendarTasks, data))
  }, [monthIndex, data, year, calendarTasks])

  useEffect(() => {
    const seletor = `${day}`
    let elem = document.getElementById(seletor);
    setModalRef(elem?.getBoundingClientRect())
  }, [isCreateModalOpen, day])

  const backToday = () => {
    setYear(date.getFullYear())
    setMonthIndex(date.getMonth())
  }

  const setter = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, day: number, month: number, year: number) => {
    setModalRef(e.currentTarget.getBoundingClientRect())
    setModalDate(dateToDateInput(day, month + 1, year))
    setIsDetailsModalOpen(false)
    setIsActionModalModaOpen(prev => !prev)
  }


  return (
    <section className='flex gap-3  text-black dark:text-white px-12  '>
      <div className='flex flex-col gap-5 pt-12 py-4'>
        <div className='flex flex-col gap-5'>
          <MonthController
            monthIndex={monthIndex}
            setMonthIndex={setMonthIndex}
            setYear={setYear}
            year={year}
          />
          <div className='flex lg:gap-4 xl:gap-8'>
            <Button
              Children='Mês atual'
              onClick={() => backToday()}
            />
            <Button
              Children='Criar'
              onClick={() => setIsCreateModalOpen(prev => !prev)}
            />
          </div>
        </div>
        <CalendarFilters />
      </div>
      <div className='flex flex-col items-center justify-center' >
        <div className='flex pt-2 relative '>
          {daysOfWeek.map(item => (
            <div
              className='px-4 py-2 lg:w-32 2xl:w-48 text-center'
              key={item}
            >
              <h3 className='select-none'>{item}</h3>
            </div>
          ))}
        </div>
        <div
          className='flex flex-wrap lg:w-[1000px] 2xl:w-[1460px] justify-center text-lg' >
          {days.map((item) => (
            <div
              id={String(item.id)}
              className={`w-32 2xl:w-48 h-32 ${days.length > 35 ? 'h-32' : 'h-[153.6px]'} calendar`}
              key={item.id}
              tabIndex={0}
              onClick={(e) => setter(e, item.day, item.Month, item.year)}
            >
              {item.Month === date.getMonth() && item.day === date.getDate() && item.year === date.getFullYear() ?
                <CalendarDayDiplay
                  isToday={true}
                  currentMonth={true}
                  item={item}
                  day={item.day}
                  tasks={item.tasks}
                  setModalRef2={setModalRef2}
                  size={`${days.length > 35 ? 'small' : 'big'}`}
                />
                :
                item.Month === monthIndex ?
                  <CalendarDayDiplay
                    isToday={false}
                    currentMonth={true}
                    item={item}
                    day={item.day}
                    tasks={item.tasks}
                    setModalRef2={setModalRef2}
                    size={`${days.length > 35 ? 'small' : 'big'}`}
                  />
                  :
                  <CalendarDayDiplay
                    isToday={false}
                    currentMonth={false}
                    item={item}
                    day={item.day}
                    tasks={item.tasks}
                    setModalRef2={setModalRef2}
                    size={`${days.length > 35 ? 'small' : 'big'}`}
                  />
              }
            </div>
          ))
          }
          {modalRef &&
            <CalendarModal
              isModalOpen={isActionModalOpen}
              setIsModalOpen={setIsActionModalModaOpen}
              date={modalDate}
              divRef={modalRef}
            />
          }
          {modalRef2 &&
            <DetailsModal
              isModalOpen={isdetailsModalOpen}
              setIsModalOpen={setIsDetailsModalOpen}
              date={modalDate}
              divRef={modalRef2}
            />
          }
          {isCreateModalOpen &&
            <CreateModal
              isModalOpen={isCreateModalOpen}
              setIsModalOpen={setIsCreateModalOpen}
              setCalendarModalOpen={setIsActionModalModaOpen}
            />
          }
        </div>
      </div>
    </section>
  )
}
