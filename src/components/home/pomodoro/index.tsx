import { BiTask } from 'react-icons/bi';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import { FiCoffee } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react'
import { IoPlaySkipForwardOutline } from 'react-icons/io5'
import DisplayList from '@ui/To-do/displayList';
import { useAtomValue } from 'jotai';
import { BreakTimerAtom, pomodoroTimerAtom } from 'src/context/seetingsContext';

export default function Pomodoro() {

  const initialPomodorTimer = useAtomValue(pomodoroTimerAtom)
  const initialBreakTimer = useAtomValue(BreakTimerAtom)
  const [pomodoroTimer, setpomodoroTimer] = useState(initialPomodorTimer);
  const [breakTimer, setBreakTime] = useState(initialBreakTimer);
  const [IsCounting, setIsCounting] = useState(false);
  const [IsCountingBreak, setIsCountingBreak] = useState(false);
  const pomodoroIntervalRef = useRef<NodeJS.Timeout>();
  const breakIntervalRef = useRef<NodeJS.Timeout>();


  useEffect(() => {
    if (IsCounting) {
      pomodoroIntervalRef.current = setTimeout(() => {
        setpomodoroTimer(pomodoroTimer - 1);
      }, 1000)
    }
    else {
      clearTimeout(pomodoroIntervalRef.current);
    }
    if (pomodoroTimer === 0) {
      setIsCounting(false)
      setpomodoroTimer(initialPomodorTimer)
    }

  }, [pomodoroTimer, IsCounting])

  useEffect(() => {
    if (IsCountingBreak) {
      breakIntervalRef.current = setTimeout(() => {
        setBreakTime(breakTimer - 1);
      }, 1000)
    } else {
      clearTimeout(breakIntervalRef.current);
    }
    if (breakTimer === 0) {
      setIsCountingBreak(false)
      setBreakTime(initialBreakTimer)
    }
  }, [breakTimer, IsCountingBreak])

  function notifyMe(type: string) {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification(`O tempo do ${type} acabou`);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(`O tempo do ${type} acabou`);
        }
      });
    }
  }

  if (breakTimer === 0) {
    notifyMe('Descanso')
  }

  if (pomodoroTimer === 0) {
    notifyMe('Pomodoro')
  }

  const pomodoroMinutes = Math.floor(pomodoroTimer / 60);
  const pomodoroSeconds = pomodoroTimer % 60;
  const breakMinutes = Math.floor(breakTimer / 60)
  const breakSeconds = breakTimer % 60

  return (
    <section className='w-96 flex flex-col text-center gap-6 shadow-xl rounded-md border-2'>
      <h2 className='pt-4 text-2xl'>Tarefas do dia</h2>
      <div className='flex justify-evenly items-center pl-10'>
        <BiTask className='w-7 h-7' />
        <div className='flex flex-col items-center w-40'>
          <div className='flex gap-1'>
            <span className='text-xl '>{String(pomodoroMinutes).padStart(2, '0')}</span>
            <span className='text-xl '>:</span>
            <span className='text-xl '>{String(pomodoroSeconds).padStart(2, '0')}</span>
          </div>
          <p>Tempo do pomodoro</p>

        </div>
        {IsCounting ?
          <button
            onClick={() => setIsCounting(prev => !prev)}
          >
            <CiPause1
              className='w-7 h-7 cursor-pointer'
            />
          </button>
          :
          <button
            onClick={() => setIsCounting(prev => !prev)}
          >
            <CiPlay1
              className='w-7 h-7 cursor-pointer'
            />
          </button>
        }
        <button
          onClick={() => {
            setpomodoroTimer(initialPomodorTimer)
            setIsCounting(prev => !prev)
          }}
        >
          <IoPlaySkipForwardOutline
            className={`w-7 h-7 cursor-pointer ${IsCounting ? '' : 'invisible'}`}
          />
        </button>
      </div>

      <div className='flex justify-evenly items-center pl-10'>
        <FiCoffee
          className='w-7 h-7'
        />
        <div className='flex flex-col items-center w-40 '>
          <div className='flex gap-1'>
            <span className='text-xl '>{String(breakMinutes).padStart(2, '0')}</span>
            <span className='text-xl '>:</span>
            <span className='text-xl '>{String(breakSeconds).padStart(2, '0')}</span>
          </div>
          <p>Tempo de descanso</p>
        </div>
        {IsCountingBreak ?
          <button
            onClick={() => setIsCountingBreak(prev => !prev)}
          >
            <CiPause1
              className='w-7 h-7 cursor-pointer'
            />
          </button>
          :
          <button
            onClick={() => setIsCountingBreak(prev => !prev)}
          >
            <CiPlay1
              className='w-7 h-7 cursor-pointer'
            />
          </button>
        }
        <button
          onClick={() => {
            setBreakTime(initialBreakTimer)
            setIsCountingBreak(prev => !prev)
          }}
        >
          <IoPlaySkipForwardOutline
            className={`w-7 h-7 ${IsCountingBreak ? '' : 'invisible'}`}
          />
        </button>
      </div>
      <div className='flex justify-center pb-10 pl-5'>
        <DisplayList />
      </div>
    </section>
  )
}
