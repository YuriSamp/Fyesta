
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from 'src/server/Firebase/ClientApp';
import { AiOutlineCalendar, AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { BsBook, BsPencil } from 'react-icons/bs';
import { FiTarget } from 'react-icons/fi';
import Link from 'next/link';
import AvatarWithDropDown from '@ui/avatarWDropdown';
import { useState } from 'react'
import { UpperCaseFirstLetter } from 'src/utils/uppercaseFirstLetter';

interface Props {
  Page: string
}

export const pages = [
  { link: '/home', name: "home", emoji: <AiOutlineHome className='text-xl' /> },
  { link: '/diario', name: "diario", emoji: <BsBook className='text-xl' /> },
  { link: '/planner', name: "planner", emoji: <BsPencil className='text-xl' /> },
  { link: '/calendario', name: "calendario", emoji: <AiOutlineCalendar className='text-xl' /> },
  { link: '/metas', name: "metas", emoji: <FiTarget className='text-xl' /> },
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

  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <header>
      <section
        className='flex py-4 px-8 z-20 relative dark:border-b-2 bg-[#fafaf5] drop-shadow-lg dark:border-neutral-800 dark:bg-[#121212] w-full justify-between items-center text-black dark:text-white'>
        {!isSidebarOpen ?
          <HiOutlineBars3 className='w-10 h-10 sm:hidden' onClick={() => setSidebarOpen(true)} />
          :
          <TfiClose className='w-10 h-10 sm:hidden' onClick={() => setSidebarOpen(false)} />
        }
        {isSidebarOpen &&
          <div
            className='absolute top-20 bg-white w-64 py-3 will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
          >
            <ul className='flex flex-col gap-4 select-none'>
              {pages.map((item, index) => (
                Page.includes(item.name) ?
                  <li key={index}>
                    <Link
                      href={item.link}
                      title={item.name}
                      className={`cursor-pointer flex items-center gap-6`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='w-10 h-10 flex justify-center items-center bg-violet-900 dark:bg-green-700 text-white rounded-full'>{item.emoji}</span>
                      <span>{UpperCaseFirstLetter(item.name)}</span>
                    </Link>
                  </li>
                  :
                  <li key={index}>
                    <Link
                      href={item.link}
                      title={item.name}
                      className='cursor-pointer flex  items-center gap-6'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='w-10 h-10 flex justify-center items-center '>{item.emoji}</span>
                      <span>{UpperCaseFirstLetter(item.name)}</span>
                    </Link>
                  </li>
              ))}
            </ul>
          </div>
        }

        <ul className='hidden sm:flex gap-6 select-none'>
          {pages.map((item, index) => (
            Page.includes(item.name) ?
              <li key={index}>
                <Link
                  href={item.link}
                  title={item.name}
                  className={`cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-white  bg-violet-900 dark:bg-green-700`}>
                  {item.emoji}
                </Link>
              </li>
              :
              <li key={index}>
                <Link
                  href={item.link}
                  title={item.name}
                  className='cursor-pointer w-10 h-10 flex justify-center items-center '>
                  {item.emoji}
                </Link>
              </li>
          ))}
        </ul>
        <div className='flex gap-6 items-center'>
          <p className='select-none'>{msg}, {user?.displayName}</p>
          <AvatarWithDropDown Path={user?.photoURL as string} />
        </div>
      </section>
    </header>
  )
}
