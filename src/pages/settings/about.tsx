import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '@ui/settings/settingsHeader'
import { aboutContet } from 'src/translate/settings/about'
import { useAtomValue } from 'jotai'
import { Language } from 'src/context/seetingsContext'


export default function About() {
  const { pathname } = useRouter()
  const page = pathname

  const locale = useAtomValue(Language)
  const { callToAction, text, titl2, title1 } = aboutContet[locale as keyof typeof aboutContet]

  return (
    <>
      <Header
        Page={page}
      />
      <div className='pt-5 flex flex-col  px-4'>
        <h1 className='text-2xl py-5 '>{title1} </h1>
        <p className='text-lg tracking-wider'>{text}</p>
        <h1 className='text-2xl py-5 '>{titl2} </h1>
        <ul>
          <li><p>- Next Js</p></li>
          <li><p>- Typescirpt</p></li>
          <li><p>- Tailwind Css</p></li>
          <li><p>- Framer motion</p></li>
          <li><p>- PlanetScale</p></li>
          <li><p>- Firebase</p></li>
          <li><p>- Jotai</p></li>
        </ul>
        <div className='flex flex-col justify-center items-center pt-10'>
          <p className='text-lg'>{callToAction}</p>
          <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='pt-3'>
            <AiOutlineGithub className='w-16 h-16' />
          </Link>
        </div>
      </div>
    </>
  )
}
