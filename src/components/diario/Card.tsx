
import Link from 'next/link'
import React from 'react'
import { Idiary } from 'src/interfaces/DiaryTypes'


export default function DiarypageWritten({ Data, Text, Id, Title, Color }: Idiary) {

  const FormatedText = Text.slice(0, 200) + '...'
  const FormatedData = Data.slice(-5).split('-').reverse()
  const FormatedTitle = Title.slice(0, 19) + '...'
  const DisplayString = [FormatedData[0], ' / ', FormatedData[1]].concat()
  return (
    <Link
      href={`./diario/pagina/${Id}`}
      className='w-60 h-52 bg-CreamWhite dark:bg-neutral-900 flex px-2 py-2 cursor-pointer relative select-none rounded-md drop-shadow-lg text-black dark:text-white border-2'
    >
      <p className='text-sm p-1'> {Text.length > 200 ? FormatedText : Text}</p>
      <div
        style={{ backgroundColor: Color }}
        className='flex justify-between absolute bottom-0 left-0 py-2  w-full px-3 rounded-b-md'>
        <p>{Title.length > 10 ? FormatedTitle : Title}</p>
        <p>{DisplayString}</p>
      </div>
    </Link>
  )
}
