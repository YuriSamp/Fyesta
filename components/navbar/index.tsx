import Image from 'next/image'
import React from 'react'
// import logo from '../../public'
import * as Avatar from '@radix-ui/react-avatar';

export const Navbar = () => {
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
          <Avatar.Root className="w-10 h-10 inline-flex justify-center items-center overflow-hidden cursor-pointer select-none bg-white rounded-full">
            <Avatar.Image
              className='w-full h-full object-cover border-inherit'
              src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
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
