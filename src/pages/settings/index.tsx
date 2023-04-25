import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Select } from '@ui/select';
import { useAtom } from 'jotai';
import { BreakTimerAtom, Language, pomodoroTimerAtom } from 'src/context/seetingsContext';
import Header from '@ui/settingsHeader';
import { UpperCaseFirstLetter } from 'src/utils/uppercaseFirstLetter';

const themes = ['dark', 'light']
const languages = ['Português', 'inglês']
const breakOptions = [5, 10, 15, 20, 25]
const pomodoroOptions = [20, 25, 30, 45, 60]

export default function Settings() {
  const router = useRouter()
  const page = router.pathname

  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useAtom(Language)
  const { theme, setTheme } = useTheme()
  const [pomodoroTimer, setPomodoroTimer] = useAtom(pomodoroTimerAtom)
  const [breakTimer, setBreakTimer] = useAtom(BreakTimerAtom)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Header
        Page={page}
      />
      <div className='sm:max-h-[600px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 pr-2'>
        <div className='py-10 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Aparencia</h2>
            <h3 className='text-base  w-60 sm:w-72 xl:w-[500px] 2xl:w-[700px]'>Customiza o tema do Fyesta no seu dispositivo</h3>
          </div>
          <div>
            <Select Options={themes} onChange={setTheme} value={theme} />
          </div>
        </div>
        <div className='py-10  flex flex-col sm:flex-row gap-4 sm:gap-0  justify-between items-start sm:items-center  px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Idioma</h2>
            <h3 className='text-base  w-60 sm:w-72 xl:w-[500px] 2xl:w-[700px]'>Escolha o idioma para a interface</h3>
          </div>
          <div>
            <Select Options={languages} value={language} onChange={setLanguage} />
          </div>
        </div>
        <div className='py-10  flex flex-col sm:flex-row gap-4 sm:gap-0  justify-between items-start sm:items-center  px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Pomodoro</h2>
            <h3 className='text-base  w-60 sm:w-72 xl:w-[500px] 2xl:w-[700px]'>Escolha o tempo que acha necessário para realizar suas tarefas</h3>
          </div>
          <div>
            <select className='bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] dark:border-white '
              value={pomodoroTimer / 60}
              onChange={(e) => setPomodoroTimer(Number(e.target.value) * 60)}
            >
              {pomodoroOptions.map((item, index) => (
                <option value={item} key={index} className='dark:bg-InputGray'>
                  {UpperCaseFirstLetter(String(item) + ' min')}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='py-10  flex flex-col sm:flex-row gap-4 sm:gap-0  justify-between items-start sm:items-center  px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Descanso</h2>
            <h3 className='text-base  w-60 sm:w-72 xl:w-[500px] 2xl:w-[700px]'>Escolha o tempo de descanso entre suas tarefas</h3>
          </div>
          <div>
            <select className='bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] dark:border-white '
              value={breakTimer / 60}
              onChange={(e) => setBreakTimer(Number(e.target.value) * 60)}
            >
              {breakOptions.map((item, index) => (
                <option value={item} key={index} className='dark:bg-InputGray'>
                  {UpperCaseFirstLetter(String(item) + ' min')}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
