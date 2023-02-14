import { Navbar } from '@ui/layout/navbar';
import Header from '@ui/settings/header';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Shortcuts() {
  const router = useRouter()
  const page = router.pathname

  return (
    <>
      <section className='px-96 pt-16'>
        <Header
          Page={page}
        />
      </section>
    </>
  )
}
