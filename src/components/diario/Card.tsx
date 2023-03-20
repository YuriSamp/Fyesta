
import React from 'react'

interface Props {
  data: string
  title: string
  text: string
}

export default function DiarypageWritten({ title, text, data }: Props) {

  const FormatedText = text.slice(0, 217) + '...'
  const FormatedData = data.slice(0, 5).replace('-', ' / ')
  return (
    <div className='w-60 h-52 bg-CreamWhite dark:bg-neutral-900 flex px-2 py-2 cursor-pointer relative select-none rounded-md drop-shadow-lg text-black dark:text-white border-2'
    >
      <p className='text-sm p-1'> {FormatedText}</p>
      <div className='flex justify-between absolute bottom-0 left-0 py-2 bg-white dark:bg-neutral-800 w-full px-3 rounded-b-md'>
        <p>{title}</p>
        <p>{FormatedData}</p>
      </div>
    </div>
  )
}
