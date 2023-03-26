import { BiTask } from 'react-icons/bi';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import { FiCoffee } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react'
import { IoPlaySkipForwardOutline } from 'react-icons/io5'
import { PlannerListaInput } from '@ui/planner';
import DisplayList from '@ui/To-do/DisplayList';

// TODO adicionar a logica de pegar pelo dia da semana

export default function Pomodoro() {

  const [pomodoroTimer, setpomodoroTimer] = useState(25 * 60);
  const [breakTimer, setBreakTime] = useState(5 * 60);
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
  }, [pomodoroTimer, IsCounting])

  useEffect(() => {
    if (IsCountingBreak) {
      breakIntervalRef.current = setTimeout(() => {
        setBreakTime(breakTimer - 1);
      }, 1000)
    }
    else {
      clearTimeout(breakIntervalRef.current);
    }
  }, [breakTimer, IsCountingBreak])

  const pomodoroMinutes = Math.floor(pomodoroTimer / 60);
  const pomodoroSeconds = pomodoroTimer % 60;
  const breakMinutes = Math.floor(breakTimer / 60)
  const breakSeconds = breakTimer % 60

  return (
    <div className='w-96 flex flex-col text-center gap-6 shadow-xl rounded-md border-2'>
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
          <CiPause1
            className='w-7 h-7 cursor-pointer'
            onClick={() => setIsCounting(prev => !prev)}
          />
          :
          <CiPlay1
            className='w-7 h-7 cursor-pointer'
            onClick={() => setIsCounting(prev => !prev)}
          />
        }
        <IoPlaySkipForwardOutline
          className={`w-7 h-7 cursor-pointer ${IsCounting ? '' : 'invisible'}`}
          onClick={() => {
            setpomodoroTimer(25 * 60)
            setIsCounting(prev => !prev)
          }}
        />
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
          <CiPause1
            className='w-7 h-7 cursor-pointer'
            onClick={() => setIsCountingBreak(prev => !prev)}
          />
          :
          <CiPlay1
            className='w-7 h-7 cursor-pointer'
            onClick={() => setIsCountingBreak(prev => !prev)}
          />
        }
        <IoPlaySkipForwardOutline
          className={`w-7 h-7 ${IsCountingBreak ? '' : 'invisible'}`}
          onClick={() => {
            setBreakTime(5 * 60)
            setIsCountingBreak(prev => !prev)
          }}
        />
      </div>
      <div className='flex justify-center pb-10'>
        <DisplayList />
      </div>
    </div>
  )
}
