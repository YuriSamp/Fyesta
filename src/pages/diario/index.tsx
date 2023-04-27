
import Link from 'next/link';
import { useAtomValue } from 'jotai';
import { diaryPage } from 'src/context/diaryContext';
import { Idiary } from 'src/interfaces/diaryTypes';
import { useEffect, useMemo, useState } from 'react';
import MonthController from '@ui/diaryMonthController';

import { emotionsOptions } from 'src/context/emotionsOptions';
import { Select } from '@ui/select';
import { DiaryPopover } from '@ui/diario/diaryPopover';
import DiarypageWritten from '@ui/diario/card';
import { dateCalendarConvert } from 'src/helper/dateHelpers';

//TODO animação entre as paginas

interface IMonthComponent {
  diary: Idiary[]
}

export default function Diario() {

  const options = useAtomValue(emotionsOptions)

  const selectOptions = useMemo(() => {
    const optionsName = options.map(item => item.name)
    optionsName.unshift('Todas')
    return optionsName
  }, [options])

  const date = new Date()
  const month = date.getMonth()
  const [monthIndex, setMonthIndex] = useState(month);
  const [year, setYear] = useState(date.getFullYear())
  const diary = useAtomValue(diaryPage);
  const [diaryRef, setdiaryRef] = useState(diary)
  const [emotionSelected, setEmotionSelected] = useState('Todas')

  const diarioFiltrado = (diario: Idiary[], filtro: string) => {
    if (filtro === 'Todas') {
      return diario
    }
    return diario.filter(item => item.feeling === filtro)
  }

  useEffect(() => {
    const compareDate = dateCalendarConvert(year, monthIndex + 1)
    const diaryPerMonth = diary.filter(item => item.data.slice(0, 7).includes(compareDate))
    const diaryPerMonthSorted = diaryPerMonth.sort((a, b) => Number(b.data.slice(-2)) - Number(a.data.slice(-2)))
    setdiaryRef(diaryPerMonthSorted)
  }, [monthIndex])


  return (
    <section className='pt-5'>
      <div className='flex flex-col sm:flex-row justify-center gap-3 md:gap-12'>
        <div className='hidden sm:block'>
          <DiaryPopover />
        </div>
        <MonthController
          monthIndex={monthIndex}
          year={year}
          setYear={setYear}
          setMonthIndex={setMonthIndex}
        />
        <div className='hidden sm:block'>
          <Select
            Options={selectOptions}
            onChange={setEmotionSelected}
            value={emotionSelected}
          />
        </div>
        <div className='flex justify-center gap-3 sm:hidden'>
          <DiaryPopover />
          <Select
            Options={selectOptions}
            onChange={setEmotionSelected}
            value={emotionSelected}
          />
        </div>
      </div>
      <MonthComponent
        diary={diarioFiltrado(diaryRef, emotionSelected)}
      />
    </section>
  )
}


const MonthComponent = ({ diary }: IMonthComponent) => {
  return (
    <div>
      <hr className='mt-10 mb-5' />
      <div className='flex justify-center sm:justify-start flex-wrap gap-4 pt-4'>
        <Link
          href='./diario/pagina'
          className='w-60 h-52  bg-white  text-black dark:text-white drop-shadow-lg dark:bg-neutral-900 flex justify-center items-center cursor-pointer  select border-2'
        >
          <p className='text-lg'> + Entrada</p>
        </Link>
        {diary.map(entry => (
          <DiarypageWritten
            text={entry.text}
            title={entry.title}
            data={entry.data}
            feeling={entry.feeling}
            id={entry.id}
            color={entry.color}
            key={entry.id}
          />
        ))}
      </div>
    </div>
  )
}
