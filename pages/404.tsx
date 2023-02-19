import { Navbar } from '@ui/layout/navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { } from 'react-icons'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function NotFound() {

  const router = useRouter()
  const page = router.pathname

  return (
    <section>
      <Navbar
        Page={page}
      />
      <section className='flex flex-col mx-12 my-12 '>
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <Link href='./' className='pb-8 flex items-center gap-3 w-48'>
            <AiOutlineArrowLeft />
            <p className='text-xl'>Voltar a home</p>
          </Link>
          <p className='textl-2xl'>Pelo visto essa página ainda não foi escrita</p>
        </div>
      </section>
    </section>
  )
}
