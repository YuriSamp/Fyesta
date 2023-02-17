import React from 'react'
import { BsSearch, BsTrash } from 'react-icons/bs'
import { HiArrowUturnLeft } from 'react-icons/hi2'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import * as Portal from '@radix-ui/react-portal';
import { useClickOutside } from 'hooks/useClickOutside'
import { ModalProps } from 'interfaces/Modal';

//TODO fazer divs em volta dos icones para o title aparecer melhor
//TODO Programar o back-end para receber as paginas que foram deletadas

const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function TrashModal({ State, SetState }: ModalProps) {

  const domNode = useClickOutside(() => SetState(false))

  return (
    <Portal.Root >
      {State &&
        <section
          className='border-2 w-[450px]  border-white rounded-lg fixed left-60 top-[300px] flex- flex-col bg-[#0b0b0c]'
          ref={domNode}
        >
          <div className='py-4 flex items-center gap-3 px-4 border-b-[1px] border-white'>
            <BsSearch className='w-6 h-6' />
            <input type='text' placeholder='Filtrar pelo titulo da página deletada' className='w-full outline-none bg-transparent h-6' />
          </div>
          <div className='h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500'>
            {teste.map((item, index) => (
              <div className='flex justify-between px-6 py-2' key={index}>
                <div className='flex gap-2 cursor-pointer'>
                  <p>👀</p>
                  <p>Pequeno teste</p>
                </div>
                <div className='flex gap-2 cursor-pointer'>
                  <HiArrowUturnLeft title='Restaurar a página' />
                  <BsTrash title='Deletar permanentemente' />
                </div>
              </div>
            ))}
          </div>
          <div className='flex gap-2 pl-4 items-center py-3 border-t-2 cursor '>
            <AiOutlineInfoCircle />
            <p>Quer entender como eu construi tudo isso?</p>
          </div>
        </section>
      }
    </Portal.Root>
  )
}
