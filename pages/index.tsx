import Link from 'next/link';
import Image from 'next/image';
import Loginpage from '../public/loginpage.png'
import reset from '../public/reset.png'
import recovery from '../public/recovery.png'
import SignUp from '../public/SignUp.png'
import { Navbar } from '@ui/docs/navbar';


export default function Home() {
  return (
    <div className='min-h-screen bg-CreamWhite'>
      <Navbar />
      <section className='flex flex-col pt-44 pb-20 border-b-[1px]'>
        <div>
          <h1 className='text-5xl text-black'>
            <span className='block text-center'>O Melhor Planner Disponível</span>
            <span className='block text-center'>feito para a web</span>
          </h1>
        </div>
        <div>
          <h2 className='text-black'>
            <span className='block text-center pt-8 text-xl'>Desenvolvido com paixão e cuidado, o Fyesta permite você organizar o seu dia de forma rápida e prática todo dia</span>
            <span className='block text-center text-xl'>Feito pela comunidade, para a comunidade</span>
          </h2>
        </div>
        <div className='flex justify-center gap-8 pt-8'>
          <Link href='./login' className='w-40 h-14 bg-black rounded-xl drop-shadow-xl flex justify-center items-center'>
            <p>Comece a usar</p>
          </Link>
          <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='w-40 h-14 bg-white rounded-xl drop-shadow-xl flex justify-center items-center'>
            <p className='text-black font-semibold'>Github</p>
          </Link>
        </div>
      </section>
      <section className='pt-10 pb-20 border-b-[1px] text-black'>
        <p className=' text-center pt-10 text-4xl'>Features</p>
        <span className=' text-center block pt-2 text-xl'>Esse projeto nasceu da minha vontade de melhorar as minhas habilidades de verdade utilizando Typescript e Next</span>
        <span className=' text-center block pt-2 text-xl'>Portanto ele conta com diversas features como autenticação, criptografia, um back-end proprio e muito mais</span>


        <div className='flex justify-center pt-20 gap-8'>
          <div className='flex flex-col w-[400px]'>
            <h3 className='text-2xl'>Organização</h3>
            <h3 className='text-lg'>Todo o seu planejamento diario em um lugar só</h3>
            <h3 className='text-lg'>para lidar com a segurança e autenticação</h3>
          </div>
          <div className='grid grid-cols-2 justify-items-center gap-6 '>
            <Image src={Loginpage} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={SignUp} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={recovery} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={reset} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
          </div>
        </div>



        <div className='flex justify-center pt-20 gap-8'>
          <div className='flex flex-col w-[400px]'>
            <h3 className='text-2xl'>Autenticação</h3>
            <h3 className='text-lg'>Todas a autenticação foi montada usando firebase </h3>
            <h3 className='text-lg'>para lidar com a segurança e autenticação</h3>
          </div>
          <div className='grid grid-cols-2 justify-items-center gap-6 '>
            <Image src={Loginpage} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={SignUp} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={recovery} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={reset} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
          </div>
        </div>

        <div className='flex justify-center pt-20 gap-8'>
          <div className='flex flex-col w-[400px]  '>
            <h3 className='text-2xl'>Temas</h3>
            <h3 className='text-lg'>Pensando em deixar o mais agradavel possivel </h3>
            <h3 className='text-lg'>Criei temas para todos os gostos</h3>
          </div>
          <div className='grid grid-cols-2 justify-items-center gap-6 '>
            <Image src={Loginpage} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={SignUp} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={recovery} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
            <Image src={reset} alt='foto da parte de login' width={300} height={500} className='drop-shadow-2xl rounded-md' />
          </div>
        </div>

      </section>


      <section className='pt-10 pb-20 border-b-[1px]'>
        <p className='text-black text-center pt-10 text-4xl'>Open Source</p>
        <span className='text-black text-center block pt-2 text-xl'>Nada disso seria possivel caso o projeto não fosse open source e tivesse contribuições de tantos amigos</span>
        <span className='text-black text-center block pt-2 text-xl'>Caso esteja curioso pra ver o código. está por completo no <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='italic underline'>Github</Link>, <Link href='/' className='italic underline'>também estou documentando tudo por aqui.</Link> </span>
      </section>



      <footer className='flex py-5 px-80 text-black justify-between '>
        <div className='flex gap-3'>
          <h2 className='italic text-2xl'>Fyesta</h2>
          <p className='text-lg self-end'>Criado por <Link href='https://twitter.com/Yuri_Sampa' target='_blank' className='italic underline'>Yuri Sampaio</Link>, Hopedado na <Link href='https://vercel.com' target='_blank' className='italic underline'>Vercel</Link> </p>
        </div>
        <div className='self-end'>
          <p>Todo o código está disponivel no <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='italic underline'>Github</Link></p>
        </div>
      </footer>
    </div>
  )
}
