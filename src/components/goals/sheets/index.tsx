
import React from 'react'
import { AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { SlArrowDown } from 'react-icons/sl'

export default function Sheets() {

  const arr = new Array(5).fill('')
  const arr2 = new Array(4).fill('')
  const arr3 = new Array(1).fill('')

  return (
    <section className='flex flex-col w-[976px] self-start'>
      <div className='pb-2 border-b-2 mb-2 flex items-center gap-6 '>
        <h3 className='text-3xl '>Metas</h3>
        <div className='flex gap-2 text-gray-100 self-end items-center'>
          <p className='text-lg'>Em progresso</p>
          <SlArrowDown />
        </div>
      </div>
      <div className='flex flex-col gap-3 pt-2'>
        <div className='flex '>
          <div className='w-60 text-center'>
            <p className='text-lg'>Objetivo</p>
          </div>
          <div className='w-96 text-center'>
            <p className='text-lg'>Progresso</p>
          </div>
          <div className='w-60 text-center'>
            <p className='text-lg pl-10'>Categoria</p>
          </div>
        </div>

        <div className='w-full flex gap-3'>
          <div className='flex gap-2 items-center w-60'>
            <AiOutlineStar className='w-7 h-7' />
            <p className='text-xl'>Ganhar 10 mil reais</p>
          </div>
          <div className='w-96 flex gap-2 items-center justify-center'>
            {arr.map((_, index) => (
              <RiCheckboxBlankCircleLine key={index} />
            ))
            }
            <p>Ações</p>
            <p> 0 / {arr.length} </p>
          </div>
          <div className='w-60 text-center'>
            <p>Financeiro</p>
          </div>
        </div>

        <div className='w-full flex gap-3'>
          <div className='flex gap-2 items-center w-60'>
            <AiOutlineStar className='w-7 h-7' />
            <p className='text-xl'>Ganhar 10 mil reais</p>
          </div>
          <div className='w-96 flex gap-2 items-center justify-center'>
            {arr2.map((_, index) => (
              <RiCheckboxBlankCircleLine key={index} />
            ))
            }
            <p>Ações</p>
            <p> 0 / {arr2.length} </p>
          </div>
          <div className='w-60 text-center'>
            <p>Financeiro</p>
          </div>
        </div>

        <div className='w-full flex gap-3'>
          <div className='flex gap-2 items-center w-60'>
            <AiOutlineStar className='w-7 h-7' />
            <p className='text-xl'>Ganhar 10 mil reais</p>
          </div>
          <div className='w-96 flex gap-2 items-center justify-center'>
            {arr3.map((_, index) => (
              <RiCheckboxBlankCircleLine key={index} />
            ))
            }
            <p>Ações</p>
            <p> 0 / {arr3.length} </p>
          </div>
          <div className='w-60 text-center'>
            <p>Financeiro</p>
          </div>
        </div>

        <div className='flex gap-2 items-center text-gray-400 cursor-pointer w-60'>
          <AiOutlinePlus className='w-7 h-7' />
          <p className='text-xl'>Nova meta</p>
        </div>

      </div>
    </section>
  )
}
