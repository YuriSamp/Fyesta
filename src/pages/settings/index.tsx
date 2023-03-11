import * as Switch from '@radix-ui/react-switch';
import Header from '@ui/SettingsHeader';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Select } from '@ui/Select';
import { useAtom } from 'jotai';
import { Language, Monday } from 'src/context/seetingsContext';

const themes = ['dark', 'ligth']
const languages = ['Português', 'inglês']

export default function Settings() {
  const router = useRouter()
  const page = router.pathname

  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useAtom(Language)
  const [StartOnMOnday, setStartOnMonday] = useAtom(Monday)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className='px-96 pt-16 text-black dark:text-white min-h-screen bg-CreamWhite dark:bg-[#121212]' >
      <Header
        Page={page}
      />
      <div className='py-10 flex justify-between items-center px-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl'>Aparencia</h2>
          <h3 className='text-base'>Customiza o tema do Fyesta no seu dispositivo</h3>
        </div>
        <div>
          <Select Options={themes} onChange={setTheme} value={theme} />
        </div>
      </div>
      <div className='py-10  flex justify-between items-center px-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl'>Idioma</h2>
          <h3 className='text-base'>Escolha o idioma para a interface</h3>
        </div>
        <div>
          <Select Options={languages} value={language} onChange={setLanguage} />
        </div>
      </div>
      <div className='py-10  flex justify-between items-center px-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl'>Começar a semana na segunda</h2>
          <h3 className='text-base'>isso vai alterar a maneira como o calendario é apresentado</h3>
        </div>
        <div>
          <Switch.Root
            className="w-11 h-[25px] bg-gray-300 dark:bg-white rounded-full relative data-[state=checked]:bg-[rgb(59,130,246)] dark:data-[state=checked]:bg-[#138859]"
            role='switch'
            checked={StartOnMOnday}
            onClick={() => setStartOnMonday(prev => !prev)}
          >
            <Switch.Thumb
              className="block w-[21px] h-[21px] bg-white dark:bg-black rounded-full shadow-SwitchShadow data-[state=checked]:translate-x-[19px] duration-100 transform translate-x-[2px]" />
          </Switch.Root>
        </div>
      </div>
    </section>
  )
}
