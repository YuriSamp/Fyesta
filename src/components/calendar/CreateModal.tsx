import * as Portal from '@radix-ui/react-portal';
import { ModalProps } from 'src/interfaces/modalTypes';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { Dispatch, SetStateAction } from 'react'
import { modalDateAtom, modalOptionAtom } from 'src/context/calendarContext';
import { useSetAtom } from 'jotai';
import { dateToDateInput } from 'src/helper/dateHelpers';



interface ICalendarModal extends ModalProps {
  setCalendarModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function CreateModal({ isModalOpen, setIsModalOpen, setCalendarModalOpen }: ICalendarModal) {

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const setModalOption = useSetAtom(modalOptionAtom)
  const setModalDate = useSetAtom(modalDateAtom)

  const domNode = useClickOutside(() => {
    setIsModalOpen(false)
  })

  return (
    <Portal.Root>
      {isModalOpen &&
        <div
          className='w-56 rounded-lg top-[230px] left-60 absolute border flex flex-col bg-gray-100 dark:bg-neutral-900  drop-shadow-2xl'
          ref={domNode}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              setIsModalOpen(prev => !prev)
            }
          }}
        >
          <button
            className='py-2 w-full text-left px-4 hover:bg-gray-200'
            onClick={() => {
              setCalendarModalOpen(true)
              setModalOption('Tarefa')
              setModalDate(dateToDateInput(day, month + 1, year))
            }}
          >
            Tarefa
          </button>
          <button
            className='py-2 w-full text-left px-4 hover:bg-gray-200'
            onClick={() => {
              setCalendarModalOpen(true)
              setModalOption('Lembrete')
              setModalDate(dateToDateInput(day, month + 1, year))
            }}
          >
            Lembrete
          </button>
        </div>
      }
    </Portal.Root>
  )
}
