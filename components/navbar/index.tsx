import React from 'react'
import * as Separator from '@radix-ui/react-separator';
import AvatarWithDropDown from '@ui/avatar/AvatarWithDropDown';

interface Props {
  Page: string
}

export const Navbar = ({ Page }: Props) => {

  function UpperCaseFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let FinalString = ''

  if (Page !== '/') {
    const PageStringWithoutBar = Page.replace('/', '')
    FinalString = UpperCaseFirstLetter(PageStringWithoutBar)
  } else {
    FinalString = 'Home'
  }

  return (
    <header>
      <section className='flex py-4 px-8 border-b-2 border-gray-800 w-full justify-between items-center'>
        <div className='flex gap-3'>
          {FinalString}
          {/* <Separator.Root
            className="bg-slate-50  w-[1px] mx-1 rotate-[30deg]"
            decorative={true}
            orientation="vertical"
          />
          <p>Teste</p>
          <Separator.Root
            className="bg-slate-50 w-[1px] mx-1 rotate-[30deg]"
            decorative={true}
            orientation="vertical"
          />
          <p>Teste</p> */}
        </div>
        <div className='flex gap-6 items-center'>
          <p>Bem vindo</p>
          <AvatarWithDropDown />
        </div>
      </section>
    </header>
  )
}
