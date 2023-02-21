import Head from 'next/head';
import { Sidebar } from './aside';
import { Navbar } from './navbar';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from 'server/Firebase/ClientApp';

interface Props {
  page: string
  children: React.ReactNode
}

export default function Layout({ page, children }: Props) {

  const paths = [
    '/home',
    '/diario',
    '/emocoes',
    '/planner',
    '/metas',
    '/calendario'
  ]

  const [signOut] = useSignOut(auth);

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      {
        paths.includes(page)
          ?
          <section className='flex'>
            <Sidebar />
            <section className='w-full'>
              <Navbar
                Page={page}
                LogOut={signOut}
              />
              <section className='flex flex-col mx-12 my-12 '>
                {children}
              </section>
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
