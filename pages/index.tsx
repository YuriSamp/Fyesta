import Head from 'next/head';
import { Sidebar } from '@ui/aside';
import { Navbar } from '@ui/navbar';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter()
  const page = router.pathname

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Navbar
            Page={page}
          />
          <section className='flex flex-col mx-8 my-8 '>

          </section>
        </div>
      </main>
    </>
  )
}
