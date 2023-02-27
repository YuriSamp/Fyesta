import { DiarypageWritten, NewDiaryPage } from '@ui/diario/DiarypageCard';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const PaginaDiario = dynamic(() => import('../components/diario/page'), {
  ssr: false
})


export default function Diario() {

  const [IsDiarioOpen, setDiarioOpen] = useState(false)


  const array = ['20 / 02', '19 / 02', '18 / 02', '17 / 02', '16 / 02', '30 / 01', '21 / 01', '15 / 01', '11 / 01', '09 / 01']


  return (
    <>
      <div className='border-b-2 border-gray-800'>
        <p className='text-3xl mb-2'>Fevereiro 2023</p>
      </div>
      <div className='flex gap-[22px] pt-4'>
        <NewDiaryPage item=' + Entrada' setDiarioOpen={setDiarioOpen} />
        {array.filter(item => item.at(-1) === '2').map((item, index) => (
          <DiarypageWritten
            item={item}
            key={index}
            setDiarioOpen={setDiarioOpen}
          />
        ))}
      </div>

      <div className='border-b-2 pt-10 border-gray-800'>
        <p className='text-3xl mb-2'>Janeiro 2023</p>
      </div>

      <div className='flex gap-[22px] pt-4'>
        <NewDiaryPage item=' + Entrada' setDiarioOpen={setDiarioOpen} />

        {array.filter(item => item.at(-1) === '1').map((item, index) => (
          <DiarypageWritten
            item={item}
            key={index}
            setDiarioOpen={setDiarioOpen}
          />
        ))}

      </div>
      <PaginaDiario
        State={IsDiarioOpen}
        SetState={setDiarioOpen}
      />
    </>
  )
}
