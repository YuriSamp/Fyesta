import React, { useState } from 'react'
import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'


export default function Pagina() {

  return (
    <section >
      <div className='flex flex-col gap-8'>
        <input
          className='bg-transparent focus:outline-none p-4 text-3xl'
          placeholder='Insira um titulo'
          autoFocus={true}
        />
        <div className='flex flex-col gap-6'>
          <div className='flex w-full gap-3 items-center'>
            <AiOutlineCalendar className='w-6 h-6' />
            <input type='date' className='bg-transparent h-7 px-2 border-[1px]  border-white rounded-md focus:outline-none text-center' />
          </div>
          <div className='flex w-full gap-3 items-center'>
            <AiOutlineHeart className='w-6 h-6' />
            <select
              className='bg-transparent h-7 w-[155px] text-center border-[1px]  border-white rounded-md'
              placeholder='Sentimentos'
            >
              <option className='bg-InputGray'>Triste</option>
              <option className='bg-InputGray'>Feliz</option>
              <option className='bg-InputGray'>Animado</option>
              <option className='bg-InputGray'>Depressivo</option>
              <option className='bg-InputGray'>Indiferente</option>
            </select>
          </div>
        </div>
        <hr />
        <textarea
          className='h-[500px] bg-transparent focus:outline-none p-3 text-lg placeholder:italic resize-none tracking-wide leading-relaxed indent-5'
          placeholder='Comece a escrever sobre o seu dia'
        />
        <div className='flex '>
          <button className='bg-green-700 p-4 rounded-md'>Incluir no diario</button>
        </div>
      </div>
    </section>
  )
}
