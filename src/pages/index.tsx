import Link from 'next/link';
import Image from 'next/image';
import Loginpage from '../../public/loginpage.png'
import reset from '../../public/reset.png'
import recovery from '../../public/recovery.png'
import SignUp from '../../public/SignUp.png'
import { BsShieldCheck, BsBrush } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'
import { IconType } from 'react-icons'

// TODO tirar fotos melhores pra home

interface IFeatureBox {
  Title: string
  Description: string
  Icon: IconType
}

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <nav className='bg-white z-10 fixed  w-full flex py-5 px-20 md:px-40 lg:px-60 xl:px-80 text-black justify-between item border-b-[1px]'>
        <div className='flex gap-10 items-center'>
          <Link href='/'>
            <h2 className='italic text-3xl'>Fyesta</h2>
          </Link>
        </div>
        <ul className='flex gap-6 items-center'>
          <li> <Link href='./login' className='select-none cursor-pointer px-6 py-2 border-[1px] border-transparent rounded-lg hover:border-black hidden sm:block '>Log in</Link> </li>
          <li>  <Link href='./login/signup' className='bg-black text-white px-6 py-2 rounded-lg select-none cursor-pointer'>Sign Up</Link>  </li>
        </ul>
      </nav>
      <section className='flex flex-col pt-44 pb-20 border-b-[1px]'>
        <div>
          <h1 className=' text-3xl md:text-4xl lg:text-5xl text-black'>
            <span className='block text-center'>O Melhor Planner Disponível</span>
            <span className='block text-center'>feito para a web</span>
          </h1>
        </div>
        <div>
          <h2 className='text-black px-2 text-lg sm:text-xl'>
            <span className='block text-center pt-8 '>Desenvolvido com paixão e cuidado, o Fyesta permite você organizar o seu dia de forma rápida e prática todo dia</span>
            <span className='block text-center '>Feito pela comunidade, para a comunidade</span>
          </h2>
        </div>
        <div className='flex justify-center gap-8 pt-8'>
          <Link href='./login' className='w-40 h-14 bg-black rounded-xl drop-shadow-xl flex justify-center items-center text-white'>
            <p>Comece a usar</p>
          </Link>
          <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='w-40 h-14 bg-white rounded-xl drop-shadow-xl flex justify-center items-center'>
            <p className='text-black font-semibold'>Github</p>
          </Link>
        </div>
      </section>

      <section className='pt-10 pb-20 px-4 border-b-[1px] text-black'>
        <p className=' text-center pt-10 text-4xl'>Features</p>
        <span className=' text-center block pt-2 text-xl'>Esse projeto nasceu da minha vontade de melhorar as minhas habilidades de verdade utilizando Typescript e Next</span>
        <span className=' text-center block pt-2 text-xl'>Portanto ele conta com diversas features como autenticação, criptografia, um back-end proprio e muito mais</span>
        <FeatureBox
          Title='Autenticação'
          Icon={BsShieldCheck}
          Description='Toda a autenticação foi montada usando firebase para lidar com a segurança e autenticação'
        />

        <FeatureBox
          Title='Organização'
          Icon={AiOutlineCalendar}
          Description='Todo o seu planejamento diário em um só lugar De forma simples rápida e eficiente'
        />

        <FeatureBox
          Title='Personalização'
          Icon={BsBrush}
          Description='Pensando em deixar o mais agradavel possivel Criei diversas personalizações pro usuário'
        />
      </section>

      <section className='pt-10 pb-20 border-b-[1px] px-4'>
        <p className='text-black text-center pt-10 text-4xl'>Open Source</p>
        <span className='text-black text-center block pt-2 text-xl'>Nada disso seria possivel caso o projeto não fosse open source e tivesse contribuições de tantos amigos</span>
        <span className='text-black text-center block pt-2 text-xl'>Caso esteja curioso pra ver o código, ele está no <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='italic underline'>Github</Link></span>
      </section>

      <footer className='flex py-5 px-20 md:px-40 lg:px-40 xl:px-60 2xl:px-80  text-black justify-center xl:justify-between '>
        <div className='flex gap-3'>
          <h2 className='italic text-2xl hidden sm:block'>Fyesta</h2>
          <p className='text-lg self-end'>Criado por <Link href='https://twitter.com/Yuri_Sampa' target='_blank' className='italic underline'>Yuri Sampaio</Link>, Hospedado na <Link href='https://vercel.com' target='_blank' className='italic underline'>Vercel</Link> </p>
        </div>
        <div className='self-end hidden xl:block'>
          <p>Todo o código está disponivel no <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='italic underline'>Github</Link></p>
        </div>
      </footer>
    </div>
  )
}

function FeatureBox({ Description, Title, Icon }: IFeatureBox) {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start pt-20 gap-8'>
      <div className='flex flex-col w-[400px]'>
        <div className='flex gap-2 items-center justify-center lg:justify-start'>
          <Icon className='w-5 h-5' />
          <h3 className='text-2xl'>{Title}</h3>
        </div>
        <h3 className='text-lg pt-2 text-center sm:text-left'>{Description}</h3>
      </div>
      <div className='grid grid-cols-2 justify-items-center gap-6 '>
        <Image src={Loginpage} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
        <Image src={SignUp} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
        <Image src={recovery} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
        <Image src={reset} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
      </div>
    </div>
  )
}
