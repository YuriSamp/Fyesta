import React from 'react'
import * as Avatar from '@radix-ui/react-avatar';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link';

const routes = [
  { name: 'Perfil e visibilidade', link: '/seetings/perfil' },
  { name: 'Configurações', link: '/settings' },
  { name: 'Atividade', link: '/settings/atividade' },
  { name: 'Atalhos', link: '/seetings/shortcuts' },
  { name: 'Sobre', link: '/settings/about' },
]

interface Props {
  Page: string
}

export default function Header({ Page }: Props) {
  return (
    <>
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
          {routes.map((item, index) => (
            item.link === Page ?
              <li key={index}>
                <Link href={item.link} className='text-xl cursor-pointer settingUnderline relative text-[#138859]'>{item.name}</Link>
              </li>
              :
              <li key={index}>
                <Link href={item.link} className='text-xl cursor-pointer '>{item.name}</Link>
              </li>
          ))}
        </ul>
      </section>
    </>
  )
}
