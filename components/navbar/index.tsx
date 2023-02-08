import Image from 'next/image'
import React from 'react'
// import logo from '../../public'
import * as Avatar from '@radix-ui/react-avatar';

function Navbar() {
  return (
    <header>
      <section className='flex py-4 px-8 border-b-2 border-gray-800 w-full justify-between items-center'>
        <div className='flex gap-3'>
          <p>Teste</p>
          <p> / </p>
          <p>Teste</p>
          <p> / </p>
          <p>Teste</p>
        </div>
        <div className='flex gap-6 items-center'>
          <p>Welcome back</p>
          <Avatar.Root className="w-9 h-9 inline-flex justify-center items-center overflow-hidden cursor-pointer select-none bg-white rounded-full">
            <Avatar.Image
              className='w-full h-full object-cover border-inherit'
              src='../../public/logo.png'
              alt=''
            />
            {/* <Avatar.Fallback className="AvatarFallback" delayMs={600}>
              CT
            </Avatar.Fallback> */}
          </Avatar.Root>
        </div>
      </section>
    </header>
  )
}

export default Navbar
