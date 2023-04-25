import Link from 'next/link';
import Loginpage from '../../public/loginpage.png'
import reset from '../../public/reset.png'
import recovery from '../../public/recovery.png'
import SignUp from '../../public/SignUp.png'
import diary from '../../public/diario.png'
import calendar from '../../public/Calendário.png'
import goals from '../../public/Metas.png'
import planner from '../../public/planner.png'
import { BsShieldCheck, BsBrush } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { FeatureBox, bluredAtom } from '@ui/landingPage/featureBox';
import { useAtomValue } from 'jotai';
import { landingPagecontent } from 'src/translate/landingPage';

// TODO tirar fotos melhores pra home

export default function Home() {
  const { locale } = useRouter()
  const { nav, section1, section2, section3, footer } = landingPagecontent[locale as keyof typeof landingPagecontent]
  const ísblured = useAtomValue(bluredAtom)


  return (
    <div className={`min-h-screen bg-white ${ísblured && 'blur-sm'}`}>
      <nav className='bg-white z-10 fixed  w-full flex py-5 justify-center sm:px-20 md:px-40 lg:px-60 xl:px-80 text-black sm:justify-between item border-b-[1px]'>
        <h2 className='italic text-3xl'>{nav.title}</h2>
        <ul className='flex gap-6 items-center'>
          <li> <Link href='./login' className='select-none cursor-pointer px-6 py-2 border-[1px] border-transparent rounded-lg hover:border-black hidden sm:block '>{nav.login}</Link> </li>
          <li>  <Link href='./login/signup' className='bg-black text-white px-6 py-2 rounded-lg select-none cursor-pointer  hidden sm:block'>{nav.signup}</Link>  </li>
        </ul>
      </nav>
      <section className='flex flex-col pt-44 pb-20 border-b-[1px]'>
        <div>
          <h1 className=' text-3xl md:text-4xl lg:text-5xl text-black'>
            <span className='block text-center'>{section1.heading1}</span>
            <span className='block text-center'>{section1.heading2}</span>
          </h1>
        </div>
        <div>
          <h2 className='text-black px-2 text-lg sm:text-xl'>
            <span className='block text-center pt-8 '>{section1.description}</span>
            <span className='block text-center '>{section1.description2}</span>
          </h2>
        </div>
        <div className='flex justify-center gap-8 pt-8'>
          <Link href='./login' className='w-40 h-14 bg-black rounded-xl drop-shadow-xl flex justify-center items-center text-white'>
            <p>{section1.button1}</p>
          </Link>
          <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='w-40 h-14 bg-white rounded-xl drop-shadow-xl flex justify-center items-center'>
            <p className='text-black font-semibold'>{section1.button2}</p>
          </Link>
        </div>
      </section>

      <section className='pt-10 pb-20 px-4 border-b-[1px] text-black'>
        <p className=' text-center pt-10 text-4xl'>{section2.heading}</p>
        <span className=' text-center block pt-2 text-xl'>{section2.span1}</span>
        <span className=' text-center block pt-2 text-xl'>{section2.span2}</span>
        <FeatureBox
          Title={section2.feature1.title}
          Icon={BsShieldCheck}
          Description={section2.feature1.description}
          image1={Loginpage}
          image2={SignUp}
          image3={recovery}
          image4={reset}
        />
        <FeatureBox
          Title={section2.feature2.title}
          Icon={AiOutlineCalendar}
          Description={section2.feature2.description}
          image1={goals}
          image2={calendar}
          image3={planner}
          image4={diary}
        />
        <FeatureBox
          Title={section2.feature3.title}
          Icon={BsBrush}
          Description={section2.feature3.description}
          image1={Loginpage}
          image2={SignUp}
          image3={recovery}
          image4={reset}
        />
      </section>
      <section className='pt-10 pb-20 border-b-[1px] px-4'>
        <p className='text-black text-center pt-10 text-4xl'>Open Source</p>
        <span className='text-black text-center block pt-2 text-xl'>{section3.span1}</span>
        <span className='text-black text-center block pt-2 text-xl'>{section3.span2} <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='italic underline'>Github</Link></span>
      </section>

      <footer className='flex py-5 px-20 md:px-40 lg:px-40 xl:px-60 2xl:px-80  text-black justify-center xl:justify-between '>
        <div className='flex gap-3'>
          <h2 className='italic text-2xl hidden sm:block'>Fyesta</h2>
          <p className='text-lg self-end'>{footer.creator} <Link href='https://twitter.com/Yuri_Sampa' target='_blank' className='italic underline'>Yuri Sampaio</Link>, {footer.host} <Link href='https://vercel.com' target='_blank' className='italic underline'>Vercel</Link> </p>
        </div>
        <div className='self-end hidden xl:block'>
          <p>{footer.codeText} <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='italic underline'>Github</Link></p>
        </div>
      </footer>
    </div>
  )
}
