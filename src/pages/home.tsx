import HomeCalendar from '@ui/home/calendario'
import { WheatherHome } from '@ui/home/clima';
import { HomeGoalTracker } from '@ui/home/homeGoals';
import Pomodoro from '@ui/home/pomodoro'
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useIdToken } from 'react-firebase-hooks/auth'
import { BiSad } from 'react-icons/bi';
import { diaryPage } from 'src/context/diaryContext';
import { auth } from 'src/server/Firebase/ClientApp'

export default function Home() {

  const [user] = useIdToken(auth);

  return (
    <section className='flex flex-col items-center text-black dark:text-white gap-10'>
      <div className='pt-3 flex flex-col justify-center '>
        <h1 className='text-center text-6xl font-Caveat text-violet-500 dark:text-white' >Boas vindas, {user?.displayName} ! </h1>
      </div>
      <div className='flex gap-10'>
        <Pomodoro />
        <div className='flex flex-col gap-4'>
          <WheatherHome />
          <div className='flex gap-3'>
            <RandomQuote />
            <DiaryEntry />
          </div>
        </div>
        <HomeCalendar />
      </div>
      <HomeGoalTracker />
    </section>
  )
}

const DiaryEntry = () => {
  const diary = useAtomValue(diaryPage);
  return (
    <div className='w-80 h-40 p-5 shadow-xl border-2 rounded-lg'>
      {diary.length > 0 ?
        <>
          <p>Últimas entradas no diario</p>
          <div className='flex flex-col justify-start gap-1 pt-2'>
            {diary.slice(-3).map(diaryPage => (
              <Link
                href={`./diario/pagina/${diaryPage.id}`}
                key={diaryPage.id}
                className='flex gap-2'
              >
                <span>{diaryPage.id}</span>
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

const RandomQuote = () => {
  return (
    <div className='w-80 h-40 flex p-5 shadow-xl border-2 rounded-lg'>
      <q>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. <br /> - Albert Einstein </q>
    </div>
  )
}
