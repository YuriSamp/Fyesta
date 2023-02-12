import Head from 'next/head'
import { Navbar } from '@ui/navbar'
import { useRouter } from 'next/router'
import * as Switch from '@radix-ui/react-switch';
import Header from '@ui/settings/header';


export default function Settings() {
  const router = useRouter()
  const page = router.pathname
  console.log(page)
  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <Navbar
        Page={page}
      />
      <main className='px-96 pt-16 '>
        <Header
          Page={page}
        />

        <section >
          <div className='py-10 flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Aparencia</h2>
              <h3 className='text-sm'>Customiza o tema do Fyesta no seu dispositivo</h3>
            </div>
            <div>
              <select className='bg-transparent p-2'>
                <option>Dark</option>
              </select>
            </div>
          </div>
          <div className='py-10  flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Página ao abrir</h2>
              <h3 className='text-sm'>Escolha onde iniciar ao abrir o Fyesta</h3>
            </div>
            <div>
              <select className='bg-transparent p-2'>
                <option>Pagina inicial</option>
              </select>
            </div>
          </div>
          <div className='py-10  flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Idioma</h2>
              <h3 className='text-sm'>Escolha o idioma para a interface</h3>
            </div>
            <div>
              <select className='bg-transparent p-2'>
                <option>Português</option>
              </select>
            </div>
          </div>
          <div className='py-10  flex justify-between items-center px-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl'>Começar a semana na segunda</h2>
              <h3 className='text-sm'>isso vai alterar a maneira como o calendario é apresentado</h3>
            </div>
            <div className=''>
              <Switch.Root className="SwitchRoot">
                <Switch.Thumb className="SwitchThumb" />
              </Switch.Root>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
