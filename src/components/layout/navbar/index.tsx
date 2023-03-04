import React, { useState } from 'react'
import AvatarWithDropDown from '@ui/AvatarWithDropDown';
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from 'src/server/Firebase/ClientApp';
import breadcrumbs from 'src/utils/breadcrumbs';

interface Props {
  Page: string
}

export const Navbar = ({ Page }: Props) => {

  const PageName = breadcrumbs(Page)

  const [user] = useIdToken(auth);

  const data = new Date()
  const horaAtual = data.getHours()

  let msg = ''

  if (horaAtual > 6 && horaAtual <= 12) {
    msg = 'Bom dia'
  }
  if (horaAtual > 12 && horaAtual <= 18) {
    msg = 'Boa tarde'
  }
  if (horaAtual > 18 && horaAtual <= 24) {
    msg = 'Boa noite'
  }
  if (horaAtual >= 0 && horaAtual <= 6) {
    msg = 'Boa Madrugada'
  }


  return (
    <header>
      <section className='flex py-4 px-8 border-b-2 border-neutral-800 w-full justify-between items-center'>
        <div className='flex gap-3'>
          {PageName}
        </div>
        <div className='flex gap-6 items-center'>
          <p>{msg}, {user?.displayName}</p>
          <AvatarWithDropDown Path={user?.photoURL as string} />
        </div>
      </section>
    </header>
  )
}
