import React from 'react'
import Link from 'next/link';
import AvatarIcon from '@ui/avatar';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from 'src/server/Firebase/ClientApp';
import RetturnButton from '../retturnButton';
import { routes } from 'src/translate/settings/header';
import { useAtomValue } from 'jotai';
import { Language } from 'src/context/seetingsContext';


interface Props {
  Page: string
}

export default function Header({ Page }: Props) {

  const [user] = useIdToken(auth);

  const locale = useAtomValue(Language)


  return (
    <>
      <RetturnButton href='/home' text='Home' />
      <section className='pt-10 pb-2 border-b-2 border-gray-800'>
        <div className='flex items-center sm:items-start'>
          <div className='pl-6' >
            <AvatarIcon Width='lg' userPhoto={user?.photoURL as string} />
          </div>
          <div className='flex flex-col pl-8 sm:pt-3'>
            <p className='text-3xl'>{user?.displayName}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <ul className='flex gap-5 pt-6'>
          {routes.map((item, index) => (
            item.link === Page ?
              <li key={index}>
                <Link
                  href={item.link}
                  className=" text-lg sm:text-xl cursor-pointer relative text-violet-900 dark:text-[#138859]  after:absolute after:bottom-[-11px] after:left-0 after:h-[2px]  after:w-full after:bg-violet-900 after:content-[''] after:dark:bg-[#138859]">
                  {item[locale].name}
                </Link>
              </li>
              :
              <li key={index}>
                <Link href={item.link} className=' text-lg sm:text-xl cursor-pointer '>
                  {item[locale].name}
                </Link>
              </li>
          ))}
        </ul>
      </section>
    </>
  )
}
