import Head from 'next/head';
import { Sidebar } from './aside';
import { Navbar } from './navbar';


interface Props {
  page: string
  children: React.ReactNode
}

export default function Layout({ page, children }: Props) {

  const paths = [
    '/home',
    '/diario',
    '/diario/pagina',
    '/emocoes',
    '/planner',
    '/metas',
    '/calendario'
  ]

  if (paths.includes(page)) {
    return (
      <>
        <Head>
          <title>Fyesta</title>
        </Head>
        <section className='flex  '>
          <Sidebar />
          <section className='w-full'>
            <Navbar
              Page={page}
            />
            <div
              className='flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 h-[980px] bg-white dark:bg-[#121212] px-12 py-12 '>
              {children}
            </div>
          </section>
        </section>
      </>
    )
  }

  if (page.includes('settings')) {
    return (
      <>
        <Head>
          <title>Fyesta</title>
        </Head>
        <section className='px-10 sm:px-20 lg:px-40 2xl:px-96 pt-16 text-black dark:text-white min-h-screen bg-CreamWhite dark:bg-[#121212]' >
          {children}
        </section>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      {children}
    </>
  )
}
