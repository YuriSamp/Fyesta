import { useRouter } from 'next/router';
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useTheme } from 'next-themes'
import { Select } from '@ui/select';
import { useAtom } from 'jotai';
import { BreakTimerAtom, Language, pomodoroTimerAtom } from 'src/context/seetingsContext';
import Header from '@ui/settings/settingsHeader';
import { UpperCaseFirstLetter } from 'src/utils/uppercaseFirstLetter';
import { SettingsContainer } from '@ui/settings/settingsContainer';

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

  const mapOptions = (arr: any[]) => {
    return (
      arr.map((item, index) => (
        <option value={item} key={index} className='dark:bg-InputGray'>
          {UpperCaseFirstLetter(String(item) + ' min')}
        </option>
      ))
    )
  }

  return (
    <>
      <Header
        Page={page}
      />
      <div className='sm:max-h-[600px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 pr-2'>
        <SettingsContainer
          title='Aparencia'
          firstChild='Customiza o tema do Fyesta no seu dispositivo'
        >
          <Select Options={themes} onChange={setTheme} value={theme} />
        </SettingsContainer>

        <SettingsContainer
          title='Idioma'
          firstChild='Escolha o idioma para a interface'
        >
          <Select Options={languages} value={language} onChange={setLanguage} />
        </SettingsContainer>

        <SettingsContainer
          title='Pomodoro'
          firstChild='Escolha o tempo que acha necessário para realizar suas tarefas'
        >
          <select className='bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] dark:border-white '
            value={pomodoroTimer / 60}
            onChange={(e) => setPomodoroTimer(Number(e.target.value) * 60)}
          >
            {mapOptions(pomodoroOptions)}
          </select>
        </SettingsContainer>

        <SettingsContainer
          title='Descanso'
          firstChild='Escolha o tempo de descanso entre suas tarefas'
        >
          <select className='bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] dark:border-white '
            value={breakTimer / 60}
            onChange={(e) => setBreakTimer(Number(e.target.value) * 60)}
          >
            {mapOptions(breakOptions)}
          </select>
        </SettingsContainer>
      </div>
    </>
  )
}
