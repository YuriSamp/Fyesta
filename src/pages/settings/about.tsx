import { AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '@ui/settingsHeader'


export default function About() {
  const router = useRouter()
  const page = router.pathname

  return (
    <>
      <Header
        Page={page}
      />
      <div className='pt-5 flex flex-col  px-4'>
        <h1 className='text-2xl py-5 '>Como esse projeto ganhou vida ? </h1>
        <p className='text-lg tracking-wider'>Esse projeto nasceu da minha vontade de ter um lugar para escrever o meu diário,
          mas eu nunca encontrei um aplicativo para computador da exata maneira que eu queria,
          então por muito tempo eu usei o Google Keep posteriormente acabei migrando para o notion,
          o notion soluciona o problema de ter um lugar para armazenar o meu diário e tem uma interface muito legal,
          mas acaba criando outros problemas enquanto tenta resolver as coisas básicas, visando deixar as coisas da maneira
          que eu sempre quis, esse projeto ganhou vida.
        </p>
        <h1 className='text-2xl py-5 '>O que ele utiliza por debaixo dos panos ? </h1>
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
          <p className='text-lg'>Caso queira ver o codigo</p>
          <Link href='https://github.com/YuriSamp/Fyesta' target='_blank' className='pt-3'>
            <AiOutlineGithub className='w-16 h-16' />
          </Link>
        </div>
      </div>
    </>
  )
}
