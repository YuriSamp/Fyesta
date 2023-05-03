import Head from 'next/head'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/input/inputWithLabel';
import { Button } from '@ui/button';
import RetturnButton from '@ui/retturnButton';
import useCreateUser from 'src/hooks/useCreateUser';
import dynamic from 'next/dynamic';
import { useAtom, useAtomValue } from 'jotai';
import { cookeisIsAccept } from 'src/context/cookiesContext';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies'
import { PasswordInput } from '@ui/input/passwordInput';
import { singUpContent } from 'src/translate/login/signup';
import { Language } from 'src/context/seetingsContext';

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


export default function SignUp() {

  const [displayName, setdisplayName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('')
  const [photoURL, setphotoURL] = useState('')
  const createUser = useCreateUser()
  const [cookiesAcept, setCookiesAccept] = useAtom(cookeisIsAccept)


  const locale = useAtomValue(Language)


  const {
    greetings,
    label1,
    label2,
    label3,
    label4,
    placeholder1,
    placeholder2,
    placeholder3,
    placeholder4,
    warning
  } = singUpContent[locale as keyof typeof singUpContent]

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (cookiesAcept === false) {
      const notify = () => toast.error("Por favor aceite os cookies primeiro");
      notify()
      return
    }

    const userData = {
      displayName,
      email,
      password,
      photoURL,
      passwordVerify,
    }
    createUser(userData)
  }

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen py-2'>
        <ToastContainer limit={3} />
        <section className='flex flex-col lg:w-96'>
          <RetturnButton
            text='Retornar'
            href='./'
          />
          <form className='pt-8' onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>{greetings}</h1>
            </div>
            <InputWithLabel labelText={label1} type='text' Id='Name' placeholder={placeholder1} value={displayName} onChange={setdisplayName} />
            <InputWithLabel labelText='Email' type='email' Id='email' placeholder='Email' value={email} onChange={setEmail} />
            <PasswordInput labelText={label2} Id='password' placeholder={placeholder2} value={password} onChange={setPassword} />
            <PasswordInput labelText={label3} Id='password2' placeholder={placeholder3} value={passwordVerify} onChange={setPasswordVerify} />
            <InputWithLabel labelText={label4} type='text' Id='photo' placeholder={placeholder4} value={photoURL} onChange={setphotoURL} />
            <p className='pt-6 text-sm text-center italic'>{warning}</p>
            <div className='pt-6'>
              <Button Children='Create a account' intent='success' Width='full' />
            </div>
          </form>
        </section>
        {!cookiesAcept && (
          <CookiesModal setCookiesAccept={setCookiesAccept} />
        )}
      </main>
    </>
  )
}
