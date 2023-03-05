import Head from 'next/head'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/input/InputWithLabel';
import { Button } from '@ui/button';
import RetturnButton from '@ui/RetturnButton';
import useCreateUser from 'src/hooks/useCreateUser';
import dynamic from 'next/dynamic';
import { useAtom } from 'jotai';
import { cookeisIsAccept } from 'src/context/cookiesContext';
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


export default function SignUp() {

  const [displayName, setdisplayName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('')
  const [photoURL, setphotoURL] = useState('')
  const createUser = useCreateUser()
  const [cookiesAcept, setCookiesAccept] = useAtom(cookeisIsAccept)


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
      <main className='flex justify-center items-center min-h-screen ' >
        <ToastContainer />
        <section className='flex flex-col'>
          <RetturnButton text='Retornar' />
          <form className='w-96' onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>Sign Up</h1>
            </div>
            <InputWithLabel labelText='Name' type='text' Id='Name' placeholder='Your name' value={displayName} onChange={setdisplayName} />
            <InputWithLabel labelText='Email Address' type='email' Id='email' placeholder='Email Address' value={email} onChange={setEmail} />
            <PasswordInput labelText='Password' Id='password' placeholder='Password' value={password} onChange={setPassword} />
            <PasswordInput labelText='Confirm yourPassword' Id='password2' placeholder='Password' value={passwordVerify} onChange={setPasswordVerify} />
            <InputWithLabel labelText='Insert a photo' type='text' Id='photo' placeholder='Insert a url' value={photoURL} onChange={setphotoURL} />
            <p className='pt-6 text-sm text-center italic'>you do not need to add a picture, is just optional</p>
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
