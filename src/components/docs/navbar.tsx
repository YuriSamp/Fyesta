import Link from 'next/link'

export function Navbar() {
  return (
    <nav className='bg-CreamWhite z-10 fixed  w-full flex py-5 px-80 text-black justify-between item border-b-[1px]'>
      <div className='flex gap-10 items-center'>
        <Link href='/'>
          <h2 className='italic text-3xl cursor-pointer'>Fyesta</h2>
        </Link>
        <div className='flex gap-3 pt-1 '>
          <Link href='/docs' className='cursor-pointer text-gray-600 hover:text-black'>Docs</Link>
          <Link href='/contato' className='cursor-pointer text-gray-600 hover:text-black'>Contato</Link>
        </div>
      </div>
      <ul className='flex gap-6 items-center'>
        <li> <Link href='./login' className='select-none cursor-pointer px-6 py-2 border-[1px] border-transparent rounded-lg hover:border-black '>Log in</Link> </li>
        <li>  <Link href='./login/signup' className='bg-black text-white px-6 py-2 rounded-lg select-none cursor-pointer'>Sign Up</Link>  </li>
      </ul>
    </nav>
  )
}
