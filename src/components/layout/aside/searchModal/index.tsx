import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineSubdirectoryArrowLeft } from 'react-icons/md'
import { RiArrowUpDownLine } from 'react-icons/ri'

import * as Portal from '@radix-ui/react-portal';
import { ModalProps } from 'src/interfaces/Modal';
import { useClickOutside } from 'src/hooks/useClickOutside';

const teste = [
  { emoji: '👀', texto: 'teste', data: 'Fev 11' },
  { emoji: '👀', texto: 'teste', data: 'Fev 11' },
  { emoji: '👀', texto: 'teste', data: 'Fev 11' },
  { emoji: '👀', texto: 'teste', data: 'Fev 11' },
  { emoji: '👀', texto: 'teste', data: 'Fev 11' }
]


export default function SearchModal({ State, SetState }: ModalProps) {

  const domNode = useClickOutside(() => SetState(false))

  return (
    <Portal.Root>
      {State &&
        <section className='border-2 w-[450px] h-96 border-white rounded-lg fixed left-60 top-48 flex- flex-col bg-[#0b0b0c]'
        >
          <div className='py-4 flex items-center gap-3 px-4 border-b-[1px] border-white'>
            <BsSearch className='w-6 h-6' />
            <input type='text' placeholder='O que está procurando?' className='w-full outline-none bg-transparent h-6' />
          </div>
          <section className='h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500'>
            <p className='pl-6 pt-2 text-gray-500 select-none'>Semana passada</p>
            {teste.map((item, index) => (
              <div className='flex justify-between px-6 py-2 cursor-pointer' key={index}>
                <div className='flex gap-2'>
                  <p>👀</p>
                  <p>Pequeno teste</p>
                </div>
                <p>Fev 11</p>
              </div>
            ))}
            <p className='pl-6 pt-2 text-gray-500 select-none'>Ultimos 30 dias</p>
            {teste.map((item, index) => (
              <div className='flex justify-between px-6 py-2 cursor-pointer' key={index}>
                <div className='flex gap-2'>
                  <p>👀</p>
                  <p>Pequeno teste</p>
                </div>
                <p>Fev 11</p>
              </div>
            ))}
          </section>
          <div className='flex justify-between w-full items-center px-4 border-t-[1px] border-white pt-1'>
            <div className='flex gap-2 items-center text-gray-500'>
              <RiArrowUpDownLine />
              <p>Selecionar</p>
            </div>
            <div className='flex gap-2 items-center text-gray-500'>
              <MdOutlineSubdirectoryArrowLeft />
              Ir para
            </div>
            <div className='flex gap-2 items-center text-gray-500'>
              ctrl
              <MdOutlineSubdirectoryArrowLeft />
              abrir em nova guia
            </div>
          </div>
        </section>
      }
    </Portal.Root>
  )
}
