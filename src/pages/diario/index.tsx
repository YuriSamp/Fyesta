import DiarypageWritten from '@ui/diario/Card';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { diaryPage } from 'src/context/diaryContext';
import { Idiary } from 'src/interfaces/DiaryTypes';
import { useEffect, useState } from 'react';
import { DateCalendarConvert } from 'src/helper/DateHelpers';
import MonthController from '@ui/MonthController';

interface IMonthComponent {
  diary: Idiary[]
}

export default function Diario() {

  const date = new Date()
  const month = date.getMonth()

  const [monthIndex, setMonthIndex] = useState(month);
  const [year, setYear] = useState(date.getFullYear())
  const [diary, setdiary] = useAtom(diaryPage);
  const [diaryRef, setdiaryRef] = useState(diary)

  useEffect(() => {
    const compareDate = DateCalendarConvert(year, monthIndex)
    const diaryPerMonth = diary.filter(item => item.Data.slice(0, 7).includes(compareDate))
    const diaryPerMonthSorted = diaryPerMonth.sort((a, b) => Number(b.Data.slice(-2)) - Number(a.Data.slice(-2)))
    setdiaryRef(diaryPerMonthSorted)
  }, [monthIndex])

  return (
    <section className='pt-5'>
      <MonthController
        monthIndex={monthIndex}
        year={year}
        setYear={setYear}
        setMonthIndex={setMonthIndex}
      />
      <MonthComponent
        diary={diaryRef}
      />
    </section>
  )
}

const MonthComponent = ({ diary }: IMonthComponent) => {
  return (
    <div>
      <hr className='mt-10 mb-5' />
      <div className='flex flex-wrap gap-4 pt-4'>
        <Link
          href='./diario/pagina'
          className='w-60 h-52  bg-white  text-black dark:text-white drop-shadow-lg dark:bg-neutral-900 flex justify-center items-center cursor-pointer  select border-2'
        >
          <p className='text-lg'> + Entrada</p>
        </Link>
        {diary.map(entry => (
          <DiarypageWritten
            Text={entry.Text}
            Title={entry.Title}
            Data={entry.Data}
            Feeling={entry.Feeling}
            Id={entry.Id}
            key={entry.Id}
          />
        ))}
      </div>
    </div>
  )
}
