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
        <ToastContainer limit={3} />
        <section className='flex flex-col'>
          <RetturnButton
            text='Retornar'
            href='./'
          />
          <form className='w-96 pt-8' onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>Criar uma conta</h1>
            </div>
            <InputWithLabel labelText='Nome' type='text' Id='Name' placeholder='Seu nome' value={displayName} onChange={setdisplayName} />
            <InputWithLabel labelText='Email' type='email' Id='email' placeholder='Email' value={email} onChange={setEmail} />
            <PasswordInput labelText='Senha' Id='password' placeholder='Senha' value={password} onChange={setPassword} />
            <PasswordInput labelText='Confirme sua senha' Id='password2' placeholder='Senha' value={passwordVerify} onChange={setPasswordVerify} />
            <InputWithLabel labelText='Coloque uma foto' type='text' Id='photo' placeholder='Insira a url' value={photoURL} onChange={setphotoURL} />
            <p className='pt-6 text-sm text-center italic'>Você não preicsa de uma foto, é só pra ficar bonitao</p>
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
