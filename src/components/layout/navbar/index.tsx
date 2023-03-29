import React from 'react'
import AvatarWithDropDown from '@ui/AvatarWithDropDown';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from 'src/server/Firebase/ClientApp';
import { AiOutlineCalendar, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { BsBook, BsPencil } from 'react-icons/bs';
import { FiTarget } from 'react-icons/fi';
import Link from 'next/link';

interface Props {
  Page: string
}

const pages = [
  { link: '/home', name: "home", emoji: <AiOutlineHome className='text-xl' /> },
  { link: '/diario', name: "diario", emoji: <BsBook className='text-xl' /> },
  { link: '/planner', name: "planner", emoji: <BsPencil className='text-xl' /> },
  { link: '/calendario', name: "calendario", emoji: <AiOutlineCalendar className='text-xl' /> },
  { link: '/metas', name: "metas", emoji: <FiTarget className='text-xl' /> },
  { link: '/emocoes', name: "emocoes", emoji: <AiOutlineHeart className='text-xl' /> }
]

export const Navbar = ({ Page }: Props) => {

  const [user] = useIdToken(auth);

  const horaAtual = new Date().getHours()
  let msg = ''

  switch (true) {
    case horaAtual >= 0 && horaAtual <= 6:
      msg = 'Boa Madrugada';
      break;
    case horaAtual > 6 && horaAtual <= 12:
      msg = 'Bom dia';
      break;
    case horaAtual > 12 && horaAtual <= 18:
      msg = 'Boa tarde';
      break;
    case horaAtual > 18 && horaAtual <= 24:
      msg = 'Boa noite';
      break;
  }

  return (
    <header>
      <section
        className='flex py-4 px-8 dark:border-b-2 bg-[#fafaf5] drop-shadow-lg dark:border-neutral-800 dark:bg-[#121212] w-full justify-between items-center text-black dark:text-white'>
        <div className='flex gap-6 select-none'>
          {pages.map((item, index) => (
            Page.includes(item.name) ?
              <Link
                key={index}
                href={item.link}
                title={item.name}
                className={`cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-white  bg-violet-900 dark:bg-green-700`}>
                {item.emoji}
              </Link>
              :
              <Link
                key={index}
                href={item.link}
                title={item.name}
                className='cursor-pointer w-10 h-10 flex justify-center items-center '>
                {item.emoji}
              </Link>
          ))}
        </div>
        <div className='flex gap-6 items-center'>
          <p className='select-none'>{msg}, {user?.displayName}</p>
          <AvatarWithDropDown Path={user?.photoURL as string} />
        </div>
      </section>
    </header>
  )
}
