import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
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
import { IconType } from 'react-icons'
import { useRouter } from 'next/router';

// TODO tirar fotos melhores pra home

interface IFeatureBox {
  Title: string
  Description: string
  Icon: IconType
  image1: StaticImageData
  image2: StaticImageData
  image3: StaticImageData
  image4: StaticImageData
}

const content = {
  "en-US": {
    nav: {
      title: "Fyesta",
      login: "Log in",
      signup: "Sign Up"
    },
    section1: {
      heading1: "The Best Planner Available",
      heading2: "made for the web",
      description: "Developed with passion and care, Fyesta allows you to quickly and easily organize your day",
      description2: "Made by the community, for the community.",
      button1: "Get Started",
      button2: "Github"
    },
    section2: {
      heading: "Features",
      span1: 'This project was born from my desire to truly improve my skills using Typescript and Next',
      span2: 'Therefore, it features many things such as authentication, encryption, a custom backend, and more',
      feature1: {
        title: "Authentication",
        description: "All authentication was built using Firebase to handle security and authentication"
      },
      feature2: {
        title: "Organization",
        description: "All your daily planning in one place, in a simple, fast, and efficient way"
      },
      feature3: {
        title: "Customization",
        description: "With the goal of making it as pleasant as possible, we created several customizations for the user"
      }
    },
    section3: {
      heading: "Open Source",
      span1: "None of this would be possible if the project were not open source and had contributions from so many friends.",
      span2: "If you're curious to see the code, it's on",
      linkText: "Github"
    },
    footer: {
      title: "Fyesta",
      creator: "Created by",
      creatorLink: "https://twitter.com/Yuri_Sampa",
      creatorName: "Yuri Sampaio",
      host: "Hosted on",
      hostLink: "https://vercel.com",
      hostName: "Vercel",
      codeText: "All the code is available on Github"
    }
  },
  "pt-BR": {
    nav: {
      title: 'Fyesta',
      login: 'Log in',
      signup: 'Sign Up',
    },
    section1: {
      heading1: 'O Melhor Planner Disponível',
      heading2: 'feito para a web',
      description: 'Desenvolvido com paixão e cuidado, o Fyesta permite você organizar o seu dia de forma rápida e prática todo dia',
      description2: "Feito pela comunidade, para a comunidade.",
      button1: 'Comece a usar',
      button2: 'Github',
    },
    section2: {
      heading: 'Features',
      span1: 'Esse projeto nasceu da minha vontade de melhorar as minhas habilidades de verdade utilizando Typescript e Next',
      span2: 'Portanto ele conta com diversas features como autenticação, criptografia, um back-end proprio e muito mais',
      feature1: {
        title: 'Autenticação',
        description: 'Toda a autenticação foi montada usando firebase para lidar com a segurança e autenticação',
      },
      feature2: {
        title: 'Organização',
        description: 'Todo o seu planejamento diário em um só lugar De forma simples rápida e eficiente',
      },
      feature3: {
        title: 'Personalização',
        description: 'Pensando em deixar o mais agradavel possivel Criei diversas personalizações pro usuário',
      },
    },
    section3: {
      heading: 'Open Source',
      span1: "Nada disso seria possivel caso o projeto não fosse open source e tivesse contribuições de tantos amigos.",
      span2: "Caso esteja curioso pra ver o código, ele está no",
      linkText: 'Github',
    },
    footer: {
      title: 'Fyesta',
      creator: 'Criado por',
      creatorLink: 'https://twitter.com/Yuri_Sampa',
      creatorName: 'Yuri Sampaio',
      host: 'Hospedado na',
      hostLink: 'https://vercel.com',
      hostName: 'Vercel',
      codeText: 'Todo o código está disponivel no Github',
    },
  }
}

export default function Home() {
  const { locale } = useRouter()
  const { nav, section1, section2, section3, footer } = content[locale as keyof typeof content]

  return (
    <div className='min-h-screen bg-white'>
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

function FeatureBox({ Description, Title, Icon, image1, image2, image3, image4 }: IFeatureBox) {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start pt-20 gap-8'>
      <div className='flex flex-col w-[400px]'>
        <div className='flex gap-2 items-center justify-center lg:justify-start'>
          <Icon className='w-5 h-5' />
          <h3 className='text-2xl'>{Title}</h3>
        </div>
        <h3 className='text-lg pt-2 px-5 sm:px-0 text-center sm:text-left'>{Description}</h3>
      </div>
      <div className='grid grid-cols-2 justify-items-center gap-6 '>
        <Image src={image1} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
        <Image src={image2} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
        <Image src={image3} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
        <Image src={image4} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
      </div>
    </div>
  )
}
