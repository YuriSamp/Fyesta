import React from 'react'
import * as Portal from '@radix-ui/react-portal';
import { useClickOutside } from 'src/hooks/useClickOutside';
import { ModalProps } from 'src/interfaces/Modal';
import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai';
import { Button } from '@ui/button';

export default function PaginaDiario({ State, SetState }: ModalProps) {

  const domNode = useClickOutside(() => SetState(false))

  return (
    <Portal.Root>
      {State &&
        <section className='rounded-lg bg-black fixed  top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%]   w-[45%] h-[85%]'
          ref={domNode}
        >
          <div className='pt-8 px-16'>
            <input placeholder='Me de um titulo' className='h-10 w-full bg-transparent text-4xl focus:outline-none' />
            <div className='w-full flex flex-col pt-4 gap-4 border-b-2 pb-4'>

              <div className='flex  gap-3 items-center'>
                <AiOutlineCalendar className='w-7 h-7' />
                <input placeholder='Informe o dia' type='date' className='bg-transparent w-40 pl-7 border-[1px] border-[#5f5f5f]' />
              </div>

              <div className='flex gap-3 items-center'>
                <AiOutlineHeart className='w-7 h-7' />
                <select className='bg-transparent w-40 h-7 text-center'>
                  <option className='bg-InputGray'>Triste</option>
                  <option className='bg-InputGray'>Feliz</option>
                  <option className='bg-InputGray'>Animado</option>
                  <option className='bg-InputGray'>Depressivo</option>
                  <option className='bg-InputGray'>Ansioso</option>
                </select>
              </div>

            </div>

            <div className='pt-4 '>
              <textarea className='w-full h-[600px] pt-2 pl-2 resize-none focus:outline-none bg-transparent' placeholder='Comece a escrever sobre o seu dia' />
            </div>

            <div className='pt-4 flex justify-end'>
              <Button Children='Salvar' intent='success' />
            </div>

          </div>
        </section>
      }
    </Portal.Root >
  )
}
