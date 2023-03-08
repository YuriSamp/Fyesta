import { Navbar } from '@ui/layout/navbar'
import RetturnButton from '@ui/RetturnButton'
import { useRouter } from 'next/router'

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
          <RetturnButton
            href='./home'
            text='Voltar a home'
          />
          <p className='textl-2xl'>Pelo visto essa página ainda não foi escrita</p>
        </div>
      </section>
    </section>
  )
}
