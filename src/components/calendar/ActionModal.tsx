import * as Portal from '@radix-ui/react-portal';
import { useState, useEffect } from 'react';
import { Button } from '../button';
import { ControledInput } from '../input/input';
import { RxTextAlignJustify } from 'react-icons/rx'
import { AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai'
import { ModalProps } from 'src/interfaces/modalTypes';
import { useSetAtom } from 'jotai';
import { calendarContext } from 'src/context/calendarContext';
import { ICalendarTask } from 'src/interfaces/calendarTypes';
import { dayNumberToDayString } from 'src/helper/dateHelpers';
import { useClickOutside } from 'src/hooks/useClickOutside';

//TODO o modal ta pegando o tamanho da viewport, isso causa bugs inesperados

interface ICalendarModal extends ModalProps {
  date: string
  divRef: DOMRect
}

export default function CalendarModal({ isModalOpen, setIsModalOpen, date, divRef }: ICalendarModal) {

  const setCalendarTasks = useSetAtom(calendarContext)
  const [title, setTitle] = useState('')
  const [modalOption, setModalOption] = useState('Tarefa')
  const [taskText, setTaskText] = useState('')
  // const [reminderOption, setReminderOption] = useState('Não se repete')
  const [dataRaw, setData] = useState(date)
  const [dayOfWeek, setDayOfWeek] = useState(dayNumberToDayString(new Date(date).getDay()))
  const dataFormated = dataRaw.split('-')
  const year = Number(dataFormated[0])
  const month = Number(dataFormated[1]) - 1
  const day = Number(dataFormated[2])

  useEffect(() => {
    setData(date)
    setDayOfWeek(dayNumberToDayString(new Date(date).getDay()))
  }, [date])

  // const reminderOptions = ['Não se repete', 'nos proximos 5 dias', `Semanal : Cada ${dayOfWeek}`, `anual em ${day} de abril`]

  const handleSubimit = () => {
    if (modalOption === 'Lembrete') {
      const lembreteObj: ICalendarTask = {
        name: title,
        description: title,
        type: 'Reminder',
        day: day,
        month: month,
        year: year
      }
      setCalendarTasks(prev => [...prev, lembreteObj])
    }

    if (modalOption === 'Tarefa') {
      const TarefaObj: ICalendarTask = {
        name: title,
        description: taskText,
        type: 'Task',
        day: day,
        month: month,
        year: year
      }
      setCalendarTasks(prev => [...prev, TarefaObj])
    }
    setTitle('')
    setTaskText('')
    setIsModalOpen(false)
  }


  const modalRelativePosition = (): { leftRef: number, topRef: number } => {
    const { left, top, height, width } = divRef

    let leftRef = 0
    let topRef = 0

    //aqui eu pego o eixo horizontal
    if (left + width < 1200) {
      leftRef = left + 1.1 * width
    } else {
      leftRef = left - 2.4 * width
    }

    //Aqui eu pego o eixo vertical
    if (top + height < 500) {
      topRef = top + height * 0.6
    } else if (top + height < 600) {
      topRef = top - 2 * height
    } else {
      topRef = top - 3.2 * height
    }

    return { leftRef, topRef }
  }

  const { leftRef, topRef } = modalRelativePosition()

  const domNode = useClickOutside(() => {
    setIsModalOpen(false)
  })


  return (
    <Portal.Root>
      {isModalOpen &&
        <section
          ref={domNode}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              setIsModalOpen(prev => !prev)
            }
          }}
          style={{ left: `${leftRef}px`, top: `${topRef}px` }}
          className='w-[450px] rounded-lg absolute flex flex-col bg-white dark:bg-neutral-900  drop-shadow-2xl'

        >
          <div className='flex items-center justify-end bg-gray-100 dark:bg-[#505050] rounded-t-lg'>
            <button
              className='text-2xl py-2 px-3'
              onClick={() => setIsModalOpen(prev => !prev)}>
              <AiOutlineClose className='w-5 h-5' />
            </button>
          </div>
          <div className='pr-10 pl-20 pt-10'>
            <ControledInput
              onChange={setTitle}
              value={title}
              placeholder='Adicionar titulo'
              type='text'
              Width='full'
              intent='transparent'
              textSize='Dxl'
            />
            <div className='flex gap-3 py-5' >
              <Button
                Children='Tarefa'
                onClick={() => setModalOption('Tarefa')}
                intent={modalOption === 'Tarefa' ? 'Selected' : 'primary'}
              />
              <Button
                Children='Lembrete'
                onClick={() => setModalOption('Lembrete')}
                intent={modalOption === 'Tarefa' ? 'primary' : 'Selected'}
              />
            </div>
          </div>
          <div className='py-5 flex gap-4 items-center px-10'>
            <AiOutlineClockCircle className='w-7 h-7' />
            <input
              type='date'
              className='bg-transparent w-36 h-12 px-2 border-[1px] border-black dark:border-white rounded-md focus:outline-none text-center'
              value={dataRaw}
              onChange={e => setData(e.target.value)}
            />
          </div>
          {modalOption === 'Tarefa' ?
            <div className='py-5 px-10 flex gap-4'>
              <RxTextAlignJustify className='w-7 h-7' />
              <textarea
                className='w-full h-32 px-2 py-1 resize-none bg-transparent outline-none border-[1px] dark:border-white border-black'
                placeholder='Adicionar uma descrição'
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
              />
            </div>
            :
            <div className='py-5 px-10 flex gap-4 items-center '>
              {/* <RxLoop className='w-7 h-7' />
              <Select
                Options={reminderOptions}
                value={reminderOption}
                onChange={setReminderOption}
              /> */}
            </div>
          }
          <div className='pb-4 pl-20'>
            <Button
              intent='success'
              Children='Salvar'
              onClick={handleSubimit}
            />
          </div>
        </section>
      }
    </Portal.Root>
  )
}
