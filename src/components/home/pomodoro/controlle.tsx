import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { BsPause, BsPlay, BsSkipForward } from 'react-icons/bs'
import { notifyMe } from 'src/helper/notifyMe'


interface controller {
  IsCounting: boolean
  setIsCounting: Dispatch<SetStateAction<boolean>>
  setTimer: Dispatch<SetStateAction<number>>
  initialTimer: number
  timer: number
}


export function Controller({ IsCounting, setIsCounting, setTimer, initialTimer, timer }: controller) {

  const IntervalRef = useRef<NodeJS.Timeout>();


  useEffect(() => {
    if (IsCounting) {
      IntervalRef.current = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000)
    }

    if (timer === 0) {
      notifyMe('Pomodoro')
      setIsCounting(false)
      setTimer(initialTimer)
    }

    return () => clearTimeout(IntervalRef.current);
  }, [timer, IsCounting, initialTimer, setIsCounting, setTimer])


  return (
    <>
      {
        IsCounting ?
          <button
            onClick={() => setIsCounting(prev => !prev)}
          >
            < BsPause
              className='w-7 h-7 cursor-pointer'
            />
          </button >
          :
          <button
            onClick={() => setIsCounting(prev => !prev)}
          >
            <BsPlay
              className='w-7 h-7 cursor-pointer'
            />
          </button>
      }
      <button
        onClick={() => {
          setTimer(initialTimer)
          setIsCounting(prev => !prev)
        }}
      >
        <BsSkipForward
          className={`w-7 h-7 cursor-pointer ${IsCounting ? '' : 'invisible'}`}
        />
      </button>
    </>
  )
}
