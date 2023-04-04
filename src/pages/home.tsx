import Sheets from '@ui/goals/sheets'
import HomeCalendar from '@ui/home/calendario'
import GoalTracker from '@ui/home/goalTracker'
import Pomodoro from '@ui/home/pomodoro'
import { useIdToken } from 'react-firebase-hooks/auth'
import { auth } from 'src/server/Firebase/ClientApp'
import plannerPhoto from '../../public/plannerImage.jpg'

// TODO implementar o spotify / apple music
// TODO implementar o GoalTracker
// TODO implementar o Mood Tracker

export default function Home() {

  const [user] = useIdToken(auth);


  return (
    <section className='flex flex-col items-center text-black dark:text-white gap-10'>
      <div className='pt-3 flex flex-col justify-center '>
        <h1 className='text-center text-6xl font-Caveat text-violet-500 dark:text-white' >Boas vindas, {user?.displayName} ! </h1>
      </div>
      <div>
        <q>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</q>
      </div>
      <div className='flex gap-20'>
        <div className='w-80 flex justify-center items-center shadow-xl border-2 rounded-lg'>
          <p>Player do spotify / apple music aqui</p>
        </div>
        <Pomodoro />
        <HomeCalendar />
      </div>
      <div className='flex gap-20'>
        <div className=''>
          {/* <GoalTracker /> */}
        </div>
        <div className='flex justify-center items-center shadow-xl border-2 rounded-lg w-96'>
          <p>Aqui vai entrar o mood tracker</p>
        </div>
      </div>
    </section>
  )
}
