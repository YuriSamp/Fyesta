import Head from 'next/head'
import Link from 'next/link'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth } from '../../server/Firebase/ClientApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/input/inputWithLabel';
import { Button } from '@ui/button';
import RetturnButton from '@ui/retturnButton';
import useAuth from 'src/hooks/useAuth';
import dynamic from 'next/dynamic';
import { cookeisIsAccept } from 'src/context/cookiesContext';
import { useAtom, useAtomValue } from 'jotai';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies'
import { PasswordInput } from '@ui/input/passwordInput';
import { loginContent } from 'src/translate/login';
import { Language } from 'src/context/seetingsContext';

// TODO concertar os inputs

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
  const [passwordState, setPasswordState] = useState('')
  const [persist, setPersist] = useState(false)
  const [AuthhProvider, AuthSubmit] = useAuth()
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [cookiesAcept, setCookiesAccept] = useAtom(cookeisIsAccept)

  const locale = useAtomValue(Language)
  const { OAuth, createAccount, forgot, formOption, greetings, session, password } = loginContent[locale as keyof typeof loginContent]

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen'>
        <ToastContainer limit={3} />
        <section className='flex flex-col lg:w-96'>
          <RetturnButton
            text='Retornar'
            href='./'
          />
          <form
            className='pt-8'
            onSubmit={(event) => AuthSubmit(event, email, passwordState, persist)}
          >
            <div>
              <h1 className='text-center text-4xl'>{greetings}</h1>
            </div>
            <p className='text-center py-6'>{OAuth}</p>
            <div className='flex justify-center gap-12 py-2'>
              <BsGithub className='h-10 w-10 cursor-pointer' title='Github' onClick={() => AuthhProvider(signInWithGithub)} />
              <BsGoogle className='h-10 w-10 cursor-pointer' title='Google' onClick={() => AuthhProvider(signInWithGoogle)} />
            </div>
            <p className='text-center pt-6 pb-4'>{formOption}</p>
            <InputWithLabel labelText='Email' type='email' placeholder='Email' value={email} onChange={setEmail} />
            <PasswordInput labelText={password} placeholder={password} value={passwordState} onChange={setPasswordState} />
            <div className='flex justify-between pt-4'>
              <div className='flex gap-2'>
                <input type='checkbox' id='checkbox' className='' onClick={() => setPersist(prevstate => !prevstate)} />
                <label htmlFor='checkbox' >{session}</label>
              </div>
              <div>
                <Link href='login/recovery' className='text-DarkModeOrange'>{forgot}</Link>
              </div>
            </div>
            <div className='pt-4'>
              <Button Children='Entrar' intent='success' Width='full' />
            </div>
          </form>
          <div className='pt-4'>
            <p className='flex justify-between'>{createAccount.text1} <Link href='login/signup' className='text-DarkModeOrange'> {createAccount.text2} </Link> </p>
          </div>
        </section>
        {!cookiesAcept && (
          <CookiesModal setCookiesAccept={setCookiesAccept} />
        )}
      </main>
    </>
  )
}
