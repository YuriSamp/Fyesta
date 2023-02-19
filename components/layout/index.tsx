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
        page.includes('/home') ||
          page.includes('/diario') ||
          page.includes('/emocoes') ||
          page.includes('/planner') ||
          page.includes('/metas') ||
          page.includes('/calendario')
          ?
          <section className='flex'>
            <Sidebar />
            <section className='w-full'>
              <Navbar
                Page={page}
              />
              <section className='flex flex-col mx-12 my-12 '>
                {children}
              </section>
            </section>
          </section>
          :
          page.includes('404')
            ?
            <section>
              <Navbar
                Page={page}
              />
              <section className='flex flex-col mx-12 my-12 '>
                {children}
              </section>
            </section>
            :
            <>
              {children}
            </>
      }
    </>
  )
}
