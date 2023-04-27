import Head from 'next/head';
import { Navbar } from './navbar';
interface Props {
  page: string
  children: React.ReactNode
}

const paths = [
  '/home',
  '/diario',
  '/emocoes',
  '/planner',
  '/metas',
  '/calendario'
]

export default function Layout({ page, children }: Props) {

  if (paths.includes(page)) {
    return (
      <>
        <Head>
          <title>Fyesta</title>
        </Head>
        <section className='w-full'>
          <Navbar
            Page={page}
          />
          <div
            className={`flex flex-col select-none bg-white dark:bg-[#121212] ${page !== '/calendario' && 'overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400  px-12 py-10'}  `}>
            {children}
          </div>
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
        <section className='px-10 sm:px-20 lg:px-40 2xl:px-96 pt-16 text-black dark:text-white min-h-screen bg-white dark:bg-[#121212] select-none' >
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
