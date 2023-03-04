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

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      {
        paths.includes(page)
          ?
          <section className='flex '>
            <Sidebar />
            <section className='w-full'>
              <Navbar
                Page={page}
              />
              <div className='flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 h-[980px] '>
                <div className='mx-12 my-12'>
                  {children}
                </div>
              </div>
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
