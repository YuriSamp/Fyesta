import React from 'react'
import AvatarWithDropDown from '@ui/avatar/AvatarWithDropDown';

interface Props {
  Page: string
}

export const Navbar = ({ Page }: Props) => {

  let FinalString = ''

  if (Page !== '/') {
    const string = Page.slice(1)
    const parts = string.split('/')
    const UpperCaseEachParts = parts.map(item => (item.charAt(0).toUpperCase() + item.slice(1)))
    for (let i = 0; i < UpperCaseEachParts.length; i++) {
      FinalString += UpperCaseEachParts[i] + ' / '
    }
    FinalString = FinalString.slice(0, -3)
  } else {
    FinalString = 'Home'
  }

  return (
    <header>
      <section className='flex py-4 px-8 border-b-2 border-gray-800 w-full justify-between items-center'>
        <div className='flex gap-3'>
          {FinalString}
        </div>
        <div className='flex gap-6 items-center'>
          <p>Bem vindo</p>
          <AvatarWithDropDown />
        </div>
      </section>
    </header>
  )
}
