import HomeCalendar from '@ui/home/calendario'
import { HomeGoalTracker } from '@ui/home/homeGoals';
import Pomodoro from '@ui/home/pomodoro'
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useIdToken } from 'react-firebase-hooks/auth'
import { BiSad } from 'react-icons/bi';
import { diaryPage } from 'src/context/diaryContext';
import { auth } from 'src/server/Firebase/ClientApp'
import { quotes, quotesEn } from '../data/qoutes'
import { Language } from 'src/context/seetingsContext';

interface Quote {
  citacao: string
  autor: string
}

const content = {
  'en-US': {
    greetings: 'Welcome',
    diary: {
      title: 'Latest diary entries',
      altTitle: 'your diary is empty'
    }
  },
  "pt-BR": {
    greetings: 'Boas vindas',
    diary: {
      title: 'Últimas entradas no diario',
      altTitle: 'Seu diario ta vazio'
    }
  }
}

export default function Home() {
  const [user] = useIdToken(auth);
  const locale = useAtomValue(Language)
  const { greetings } = content[locale as keyof typeof content]

  return (
    <section className='flex flex-col items-center text-black dark:text-white gap-10'>
      <div className='pt-3 flex flex-col justify-center '>
        <h1 className='text-center text-5xl sm:text-6xl font-Caveat text-violet-500 dark:text-white' >{greetings}, {user?.displayName} ! </h1>
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-3  justify-items-center gap-x-8 gap-y-8'>
        <Pomodoro />
        <div className='flex flex-col gap-4'>
          <RandomQuote locale={locale} />
          <Diary
            locale={locale}
          />
        </div>
        <HomeCalendar />
      </div>
      <HomeGoalTracker />
    </section>
  )
}

const RandomQuote = (locale: { locale: string | undefined }) => {
  const getRandomQuote = (arr: Quote[]) => arr[Math.floor(Math.random() * arr.length)];
  const placeholder = locale.locale === 'pt-BR' ? getRandomQuote(quotes) : getRandomQuote(quotesEn);

  return (
    <div className='w-80 h-56 flex flex-col justify-center items-center text-center p-5 shadow-xl border-2 rounded-lg'>
      <q>{placeholder.citacao} </q>
      <p> - {placeholder.autor} </p>
    </div>
  )
}

const Diary = ({ locale }: { locale: string }) => {

  const { diary } = content[locale as keyof typeof content]
  const diaryArr = useAtomValue(diaryPage);

  return (
    <div className='w-80 h-52 p-5 shadow-xl border-2 rounded-lg'>
      {diaryArr.length > 0 ?
        <>
          <p>{diary.title}</p>
          <div className='flex flex-col justify-start gap-1 pt-2'>
            {diaryArr.slice(-5).map(diaryPage => (
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
          <p>{diary.altTitle}</p>
          <BiSad className='w-10 h-10' />
        </div>
      }
    </div>
  )
}
