import Head from 'next/head'
import Link from 'next/link'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth } from '../../server/Firebase/ClientApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/input/InputWithLabel';
import { Button } from '@ui/button';
import RetturnButton from '@ui/RetturnButton';
import useAuth from 'src/hooks/useAuth';
import dynamic from 'next/dynamic';
import { cookeisIsAccept } from 'src/context/cookiesContext';
import { useAtom } from 'jotai';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies'
import { PasswordInput } from '@ui/input/passwordInput';

const CookiesModal = dynamic(() => import('@ui/cookieModal'), {
  ssr: false,
})

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = nookies.get(context)
  if (cookies.token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}

export default function LogIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [persist, setPersist] = useState(false)
  const [AuthhProvider, AuthSubmit] = useAuth()
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [cookiesAcept, setCookiesAccept] = useAtom(cookeisIsAccept)
  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen'>
        <ToastContainer limit={3} />
        <section className='flex flex-col'>
          <RetturnButton
            text='Retornar'
            href='./'
          />
          <form
            className='pt-8'
            onSubmit={(event) => AuthSubmit(event, email, password, persist)}
          >
            <div>
              <h1 className='text-center text-4xl'>Bem vindo de volta</h1>
            </div>
            <p className='text-center py-6'>Entre com</p>
            <div className='flex justify-center gap-12 py-2'>
              <BsGithub className='h-10 w-10 cursor-pointer' title='Github' onClick={() => AuthhProvider(signInWithGithub)} />
              <BsGoogle className='h-10 w-10 cursor-pointer' title='Google' onClick={() => AuthhProvider(signInWithGoogle)} />
            </div>
            <p className='text-center pt-6 pb-4'>Ou use seu email</p>
            <InputWithLabel labelText='Email' type='email' placeholder='Email' value={email} onChange={setEmail} />
            <PasswordInput labelText='Senha' placeholder='Senha' value={password} onChange={setPassword} />
            <div className='flex gap-10 pt-4'>
              <div className='flex gap-2'>
                <input type='checkbox' id='checkbox' className='' onClick={() => setPersist(prevstate => !prevstate)} />
                <label htmlFor='checkbox' >Mantenha logado</label>
              </div>
              <div>
                <Link href='login/recovery' className='text-DarkModeOrange'>Esqueceu sua senha?</Link>
              </div>
            </div>
            <div className='pt-4'>
              <Button Children='Entrar' intent='success' Width='full' />
            </div>
          </form>
          <div className='pt-4'>
            <p>Ainda não possui uma conta? <Link href='login/signup' className='text-DarkModeOrange'> Criar uma conta </Link> </p>
          </div>
        </section>
        {!cookiesAcept && (
          <CookiesModal setCookiesAccept={setCookiesAccept} />
        )}
      </main>
    </>
  )
}
