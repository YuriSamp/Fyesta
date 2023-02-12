import { useState } from 'react'
import Head from 'next/head'
import { Navbar } from '@ui/navbar'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai'
import * as Avatar from '@radix-ui/react-avatar';
import * as Switch from '@radix-ui/react-switch';
import { BsArrowDownUp } from 'react-icons/bs'
import Link from 'next/link'


export default function Settings() {
  const router = useRouter()
  const page = router.pathname

  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]


  const [selected, setSelected] = useState(people[0])

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <Navbar
        Page={page}
      />
      <main className='px-96 pt-16 '>
        <Link href='/' className='flex items-center gap-1'>
          <AiOutlineArrowLeft className='h-6 w-6' />
          <p className='text-2xl'>Home</p>
        </Link>
        <section className='pt-10 pb-2  border-b-2 border-gray-800'>
          <div className='flex'>
            <div className='pl-6' >
              <Avatar.Root className='w-24 h-24 inline-flex justify-center items-center overflow-hidden cursor-pointer select-none bg-white rounded-full'>
                <Avatar.Image
                  className='w-full h-full object-cover border-inherit'
                  src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
                  alt=''
                />
                <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                  CT
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
            <div className='flex flex-col pl-8 pt-3'>
              <p className='text-3xl'>Yuri Sampaio</p>
              <p>yurisamp123@gmail.com</p>
            </div>
          </div>
          <ul className='flex gap-5 pt-6'>
            <li>
              <Link href='./seetings/perfil' className='text-xl cursor-pointer '>Perfil e visibilidade</Link>
            </li>
            <li>
              <Link href='./settings' className='text-xl cursor-pointer settingUnderline relative text-[#138859]'>Configurações</Link>
            </li>
            <li>
              <Link href='./settings/atividade' className='text-xl cursor-pointer'>Atividade</Link>
            </li>
            <li>
              <Link href='./seetings/shortcuts' className='text-xl cursor-pointer' >Atalhos</Link>
            </li>
            <li>
              <Link href='./settings/about' className='text-xl cursor-pointer'>Sobre</Link>
            </li>
          </ul>
        </section>

        {/* Daqui pra cima eu vou arrancar depois */}

        <section >
          <div className='py-10 flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Aparencia</h2>
              <h3 className='text-sm'>Customiza o tema do Fyesta no seu dispositivo</h3>
            </div>
            <div>
              <select className='bg-transparent p-2'>
                <option>Dark</option>
              </select>
            </div>
          </div>
          <div className='py-10  flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Página ao abrir</h2>
              <h3 className='text-sm'>Escolha onde iniciar ao abrir o Fyesta</h3>
            </div>
            <div>
              <select className='bg-transparent p-2'>
                <option>Pagina inicial</option>
              </select>
            </div>
          </div>
          <div className='py-10  flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Idioma</h2>
              <h3 className='text-sm'>Escolha o idioma para a interface</h3>
            </div>
            <div>
              <select className='bg-transparent p-2'>
                <option>Português</option>
              </select>
            </div>
          </div>
          <div className='py-10  flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Começar a semana na segunda</h2>
              <h3 className='text-sm'>isso vai alterar a maneira como o calendario é apresentado</h3>
            </div>
            <div className=''>
              <Switch.Root className="SwitchRoot">
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
