import * as Portal from '@radix-ui/react-portal';
import { HiOutlineBars3 } from 'react-icons/hi2'
import { BsTrash } from 'react-icons/bs'
import { MdOutlineDescription } from 'react-icons/md'
import { AiOutlineClose, } from 'react-icons/ai'
import { ModalProps } from 'src/interfaces/modalTypes';
import { detailsModalDateDisplay } from 'src/helper/dateHelpers';
import { useAtomValue } from 'jotai';
import { taskDescriptionAtom, taskNameAtom, taskTypeAtom } from 'src/context/calendarContext';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { CalendarTaskTypes } from 'src/interfaces/calendarTypes';

//TODO o modal ta pegando o tamanho da viewport, isso causa bugs inesperados

interface ICalendarModal extends ModalProps {
  date: string
  divRef: DOMRect
}

export default function DetailsModal({ isModalOpen, setIsModalOpen, date, divRef }: ICalendarModal) {

  const data = detailsModalDateDisplay(date)
  const taskType = useAtomValue(taskTypeAtom)
  const setModalTask = useAtomValue(taskNameAtom)
  const taskDescription = useAtomValue(taskDescriptionAtom)

  const modalRelativePosition = (): { leftRef: number, topRef: number } => {
    const { left, top, height, width } = divRef

    let leftRef = 0
    let topRef = 0

    //aqui eu pego o eixo horizontal
    if (left + width < 1200) {
      leftRef = left + 1.1 * width
    } else {
      leftRef = left - 3.2 * width
    }

    //Aqui eu pego o eixo vertical
    if (top + height < 600) {
      topRef = top + height * 0.6
    } else {
      topRef = top - 6 * height
    }

    return { leftRef, topRef }
  }

  const { leftRef, topRef } = modalRelativePosition()


  let taskColor = ''
  switch (taskType) {
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

  const domNode = useClickOutside(() => {
    setIsModalOpen(false)
  })

  const translateTaskType = (taskType: CalendarTaskTypes | undefined) => {
    switch (taskType) {
      case 'Data Comemorativa':
        return 'Data Comemorativa'
      case 'Feriado Nacional':
        return 'Feriado Nacional'
      case 'Reminder':
        return 'Lembrete'
      case 'Task':
        return 'Tarefa'
    }
  }

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
          className='w-[450px] rounded-lg absolute flex flex-col bg-gray-100 dark:bg-neutral-900  drop-shadow-2xl'

        >
          <div className='flex items-center justify-end bg-gray-100 dark:bg-[#505050] rounded-t-lg'>
            {taskType === 'Reminder' || taskType === 'Task' &&
              <button
                className='text-2xl py-2 px-3'
                onClick={() => setIsModalOpen(prev => !prev)}>
                <BsTrash className='w-4 h-4' />
              </button>

            }
            <button
              className='text-2xl py-2 px-3'
              onClick={() => setIsModalOpen(prev => !prev)}>
              <AiOutlineClose className='w-5 h-5' />
            </button>
          </div>
          <div className='px-10 pt-10'>
            <div className='flex gap-5 items-center '>
              <div
                className={`h-5 w-5 rounded-md ${taskColor}`}
              >
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-2xl'>{setModalTask}</p>
                <p className='text-lg'>{data}</p>
              </div>
            </div>
          </div>
          {taskType === 'Task' &&
            <div className='pt-5 flex gap-4 items-center px-10'>
              <MdOutlineDescription className='w-5 h-5' />
              <p className='text-xl w-80 break-all'>{taskDescription}</p>
            </div>
          }
          <div className='py-5 flex gap-4 items-center px-10'>
            <HiOutlineBars3 className='w-5 h-5' />
            <p className='text-xl'>{translateTaskType(taskType)}</p>
          </div>
        </section>
      }
    </Portal.Root>
  )
}
