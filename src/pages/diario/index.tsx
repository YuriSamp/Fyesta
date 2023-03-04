import DiarypageWritten from '@ui/diario/DiarypageCard';
import { useState } from 'react';
import Link from 'next/link';

export default function Diario() {

  const [IsDiarioOpen, setDiarioOpen] = useState(false)

  const array = ['20 / 02', '19 / 02', '18 / 02', '17 / 02', '16 / 02', '18 / 02', '18 / 02', '18 / 02']

  const [entry, setEntry] = useState(array)

  return (
    <>

      <p className='text-4xl mb-2 font-Caveat text-green-700'>Fevereiro 2023</p>
      <hr />
      <div className='flex flex-wrap gap-[19px] pt-4 max-w-[1550px] '>
        <Link
          href='./diario/pagina'
          className='w-60 h-52  bg-neutral-900 flex justify-center items-center cursor-pointer  select'
        >
          <p className='text-lg'> + Entrada</p>
        </Link>
        {entry.filter(item => item.at(-1) === '2').map((item, index) => (
          <DiarypageWritten
            item={item}
            key={index}
            setDiarioOpen={setDiarioOpen}
          />
        ))}
      </div>


      <p className='text-4xl mb-2 font-Caveat pt-10 text-green-700'>Janeiro 2023</p>
      <hr />

    </>
  )
}
