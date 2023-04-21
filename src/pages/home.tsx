import HomeCalendar from '@ui/home/calendario'
import { HomeGoalTracker } from '@ui/home/homeGoals';
import Pomodoro from '@ui/home/pomodoro'
import { pages } from '@ui/layout/navbar';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useIdToken } from 'react-firebase-hooks/auth'
import { BiSad } from 'react-icons/bi';
import { diaryPage } from 'src/context/diaryContext';
import { auth } from 'src/server/Firebase/ClientApp'
import { quotes, quotesEn } from '../data/qoutes'



export default function Home() {

  const [user] = useIdToken(auth);

  return (
    <section className='flex flex-col items-center text-black dark:text-white gap-10'>
      <div className='pt-3 flex flex-col justify-center '>
        <h1 className='text-center text-6xl font-Caveat text-violet-500 dark:text-white' >Boas vindas, {user?.displayName} ! </h1>
      </div>
      <div className='flex gap-10'>
        <div className='flex flex-col gap-4'>
          {/* <Navigation />   */}
          <RandomQuote />
          <DiaryEntry />
        </div>
        <Pomodoro />
        <HomeCalendar />
      </div>
      <HomeGoalTracker />
    </section>
  )
}

const DiaryEntry = () => {
  const diary = useAtomValue(diaryPage);
  return (
    <div className='w-80 h-56 p-5 shadow-xl border-2 rounded-lg'>
      {diary.length > 0 ?
        <>
          <p>Últimas entradas no diario</p>
          <div className='flex flex-col justify-start gap-1 pt-2'>
            {diary.slice(-5).map(diaryPage => (
              <Link
                href={`./diario/pagina/${diaryPage.id}`}
                key={diaryPage.id}
                className='flex gap-2'
              >
                <span>{diaryPage.id + 1}</span>
                <span className='italic'>{diaryPage.title}</span>
              </Link>
            ))}
          </div>
        </>
        :
        <div className='flex flex-col justify-center items-center gap-2 h-full'>
          <p>Seu diario ta vazio</p>
          <BiSad className='w-10 h-10' />
        </div>
      }
    </div>
  )
}
interface Quote {
  citacao: string
  autor: string
}

const RandomQuote = () => {
  const getRandomQuote = (arr: Quote[]) => arr[Math.floor(Math.random() * arr.length)];
  const placeholder = getRandomQuote(quotes);

  return (
    <div className='w-80 h-56 flex flex-col justify-center items-center text-center p-5 shadow-xl border-2 rounded-lg'>
      <q>{placeholder.citacao} </q>
      <p> - {placeholder.autor} </p>
    </div>
  )
}

const Navigation = () => {
  return (
    <div className='w-80 h-40 p-5 shadow-xl  border-2 rounded-lg'>
      <ul className='grid grid-cols-2 gap-x-8  select-none'>
        {pages.slice(0, 3).map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className='cursor-pointer w-10 h-10 gap-2 flex items-center '>
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
        {pages.slice(3).map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className='cursor-pointer w-10 h-10 flex gap-2 items-center '>
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
