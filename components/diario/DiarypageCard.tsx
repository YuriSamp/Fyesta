
import React, { SetStateAction, Dispatch } from 'react'

interface Props {
  item: string
  setDiarioOpen: Dispatch<SetStateAction<boolean>>
}

function DiarypageWritten({ item, setDiarioOpen }: Props) {
  return (
    <div className='w-60 h-52 border-2 border-[#383838] flex px-2 py-2 cursor-pointer relative'
      onClick={() => setDiarioOpen(true)}
    >
      <p className='text-sm p-1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum impedit quia culpa aut venia blanditiis enim facere iusto libero minima fugit eaque ducimus earum.</p>
      <div className='absolute bottom-0 left-0 py-2  bg-[#383838] w-full pl-4'>
        <p>{item}</p>
      </div>
    </div>
  )
}

function NewDiaryPage({ item, setDiarioOpen }: Props) {
  return (
    <div className='w-60 h-52 border-2 border-[#383838] flex justify-center items-center cursor-pointer hover:bg-[#383838]'
      onClick={() => setDiarioOpen(true)}
    >
      <p> + Entrada</p>
    </div>
  )
}

export { DiarypageWritten, NewDiaryPage }
