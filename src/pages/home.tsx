import HomeCalendar from '@ui/home/calendario'
import { GoalHome } from '@ui/home/homeGoals';
import Pomodoro from '@ui/home/pomodoro'
import { useIdToken } from 'react-firebase-hooks/auth'
import { auth } from 'src/server/Firebase/ClientApp'

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
        <GoalHome />
        <Pomodoro />
        <HomeCalendar />
      </div>
    </section>
  )
}
