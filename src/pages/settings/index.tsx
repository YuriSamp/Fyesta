import { useRouter } from 'next/router';
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useTheme } from 'next-themes'
import { Select } from '@ui/select';
import { useAtom } from 'jotai';
import { BreakTimerAtom, Language, pomodoroTimerAtom } from 'src/context/seetingsContext';
import Header from '@ui/settings/settingsHeader';
import { UpperCaseFirstLetter } from 'src/utils/uppercaseFirstLetter';
import { SettingsContainer } from '@ui/settings/settingsContainer';
import { settingsContent } from 'src/translate/settings';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const themes = ['dark', 'light']
const breakOptions = [5, 10, 15, 20, 25]
const pomodoroOptions = [20, 25, 30, 45, 60]

export default function Settings() {
  const { pathname } = useRouter()
  const page = pathname

  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useAtom(Language)
  const { theme, setTheme } = useTheme()
  const [pomodoroTimer, setPomodoroTimer] = useAtom(pomodoroTimerAtom)
  const [breakTimer, setBreakTimer] = useAtom(BreakTimerAtom)
  const [storedValue, setValue] = useLocalStorage('language', '')

  useEffect(() => setValue(language), [language, setValue])

  useEffect(() => setMounted(true), [])

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

  const { Container1, Container2, Container3, Container4 } = settingsContent[language]

  return (
    <>
      <Header
        Page={page}
      />
      <div className='sm:max-h-[600px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 pr-2'>
        <SettingsContainer
          title={Container1.title}
          firstChild={Container1.firstChild}
        >
          <Select Options={themes} onChange={setTheme} value={theme} />
        </SettingsContainer>

        <SettingsContainer
          title={Container2.title}
          firstChild={Container2.firstChild}
        >
          <select className='bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] dark:border-white '
            value={storedValue}
            onChange={(e: any) => setLanguage(e.target.value)}
          >
            <option value={'pt-BR'} >Português</option>
            <option value={'en-US'} >English</option>
          </select>

        </SettingsContainer>

        <SettingsContainer
          title={Container3.title}
          firstChild={Container3.firstChild}
        >
          <select className='bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] dark:border-white '
            value={pomodoroTimer / 60}
            onChange={(e) => setPomodoroTimer(Number(e.target.value) * 60)}
          >
            {mapOptions(pomodoroOptions)}
          </select>
        </SettingsContainer>
        <SettingsContainer
          title={Container4.title}
          firstChild={Container4.firstChild}
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
