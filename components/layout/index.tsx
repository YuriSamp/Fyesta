import Head from 'next/head';
import { Sidebar } from './aside';
import { Navbar } from './navbar';

interface Props {
  page: string
  children: React.ReactNode
}

export default function Layout({ page, children }: Props) {


  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      {
        page.includes('/settings') || page.includes('login') || page.includes('404')
          ?
          <>
            {children}
          </>
          :
          <main className='flex'>
            <Sidebar />
            <section className='w-full'>
              <Navbar
                Page={page}
              />
              {children}
            </section>
          </main>
      }
    </>
  )
}
