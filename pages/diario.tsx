import dynamic from 'next/dynamic';
import { useState } from 'react';

const PaginaDiario = dynamic(() => import('../components/diario/page'), {
  ssr: false
})


export default function Diario() {

  const [IsDiarioOpen, setDiarioOpen] = useState(false)

  return (
    <>
      <div className='border-b-2 border-gray-800'>
        <p className='text-3xl mb-2'>Fevereiro 2023</p>
      </div>
      <div className='flex gap-[22px] pt-4'>
        <div className='w-60 h-52 border-2 border-[#383838] flex justify-center items-center cursor-pointer hover:bg-[#383838]'
          onClick={() => setDiarioOpen(true)}
        >
          <p> + Entrada</p>
        </div>
        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full px-4 flex'>
            <p>20 / 02</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>19 / 02</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>18 / 02</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>17 / 02</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>16 / 02</p>
          </div>
        </div>



      </div>

      <div className='border-b-2 pt-10 border-gray-800'>
        <p className='text-3xl mb-2'>Janeiro 2023</p>
      </div>
      <div className='flex gap-[22px] pt-4'>
        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>30 / 01</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>21 / 01</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>15 / 01</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p> 11 / 01</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>09 / 01</p>
          </div>
        </div>

        <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'>
          <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
          <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
            <p>05 / 01</p>
          </div>
        </div>

      </div>
      <PaginaDiario
        State={IsDiarioOpen}
        SetState={setDiarioOpen}
      />
    </>
  )
}
