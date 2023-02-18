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
        page.includes('/settings') || page.includes('login') || page.includes('/landingpage')
          ?
          <>
            {children}
          </>
          :
          page.includes('404')
            ?
            <main>
              <Navbar
                Page={page}
              />
              <section className='flex flex-col mx-12 my-12 '>
                {children}
              </section>
            </main>
            :
            <main className='flex'>
              <Sidebar />
              <section className='w-full'>
                <Navbar
                  Page={page}
                />
                <section className='flex flex-col mx-12 my-12 '>
                  {children}
                </section>
              </section>
            </main>
      }
    </>
  )
}
