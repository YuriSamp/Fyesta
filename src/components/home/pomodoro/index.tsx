import { BiTask } from 'react-icons/bi';
import { FiCoffee } from 'react-icons/fi';
import { useState } from 'react'
import DisplayList from '@ui/To-do/displayList';
import { useAtomValue } from 'jotai';
import { BreakTimerAtom, Language, pomodoroTimerAtom } from 'src/context/seetingsContext';
import { Controller } from './controlle';


export default function Pomodoro() {

  const initialPomodorTimer = useAtomValue(pomodoroTimerAtom)
  const initialBreakTimer = useAtomValue(BreakTimerAtom)

  const [pomodoroTimer, setpomodoroTimer] = useState(initialPomodorTimer);
  const [breakTimer, setBreakTime] = useState(initialBreakTimer);
  const [IsCounting, setIsCounting] = useState(false);
  const [IsCountingBreak, setIsCountingBreak] = useState(false);

  const pomodoroMinutes = Math.floor(pomodoroTimer / 60);
  const pomodoroSeconds = pomodoroTimer % 60;
  const breakMinutes = Math.floor(breakTimer / 60)
  const breakSeconds = breakTimer % 60

  const locale = useAtomValue(Language)

  return (
    <section className='w-80 h-[450px] flex flex-col text-center gap-6 shadow-xl rounded-md border-2'>
      <h2 className='pt-4 text-2xl'> {locale === 'pt-BR' ? 'Tarefas do dia' : 'Today tasks'}</h2>
      <div className='flex justify-evenly items-center pl-10'>
        <BiTask className='w-7 h-7' />
        <div className='flex flex-col items-center w-40'>
          <TimeDisplay minutes={pomodoroMinutes} seconds={pomodoroSeconds} />
          <p> {locale === 'pt-BR' ? 'Tempo do pomodoro' : 'Pomodoro\'s time'}</p>
        </div>
        <Controller
          IsCounting={IsCounting}
          setIsCounting={setIsCounting}
          setTimer={setpomodoroTimer}
          initialTimer={initialPomodorTimer}
          timer={pomodoroTimer}
        />
      </div>
      <div className='flex justify-evenly items-center pl-10'>
        <FiCoffee
          className='w-7 h-7'
        />
        <div className='flex flex-col items-center w-40 '>
          <TimeDisplay minutes={breakMinutes} seconds={breakSeconds} />
          <p>{locale === 'pt-BR' ? 'Tempo de descanso' : 'Break\'s time'}</p>
        </div>
        <Controller
          IsCounting={IsCountingBreak}
          setIsCounting={setIsCountingBreak}
          setTimer={setBreakTime}
          initialTimer={initialBreakTimer}
          timer={breakTimer}
        />
      </div>
      <div className='flex justify-center pl-10'>
        <DisplayList />
      </div>
    </section>
  )
}

function TimeDisplay({ minutes, seconds }: { minutes: number, seconds: number }) {
  return (
    <div className='flex gap-1'>
      <span className='text-xl '>{String(minutes).padStart(2, '0')}</span>
      <span className='text-xl '>:</span>
      <span className='text-xl '>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}
