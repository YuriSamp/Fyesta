import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <nav className='flex py-5 px-80 text-black justify-between item border-b-[1px]'>
      <div className='flex gap-10 items-center'>
        <Link href='/'>
          <h2 className='italic text-3xl cursor-pointer'>Fyesta</h2>
        </Link>
        <div className='flex gap-3 pt-1 '>
          <Link href='/docs' className='cursor-pointer'>Docs</Link>
          <Link href='/contato' className='cursor-pointer'>Contato</Link>
        </div>
      </div>
      <li className='flex gap-6 items-center'>
        <Link href='./login' className='select-none cursor-pointer'>Log in</Link>
        <Link href='./login/signup' className='bg-black text-white px-6 py-2 rounded-lg select-none cursor-pointer'>Sign Up</Link>
      </li>
    </nav>
  )
}
