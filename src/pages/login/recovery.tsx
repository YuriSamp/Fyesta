import Head from 'next/head'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth } from '../../server/Firebase/ClientApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/InputWithLabel';
import { Button } from '@ui/button';
import RetturnButton from '@ui/RetturnButton';

export default function Passwordchange() {


  const [email, setEmail] = useState('')
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email.length === 0) {
      const notify = () => toast.warn("O campo de email encontra-se vazio");
      notify()
      return
    }
    const sucess = await sendPasswordResetEmail(email)
    if (sucess) {
      const notify = () => toast.success("Verifique na sua caixa de entrada se o email já chegou");
      notify()
    }
  }

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen'>
        <ToastContainer autoClose={3000} />
        <section className='flex flex-col'>
          <RetturnButton text='Retornar' />
          <form onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>Forgot your password?</h1>
            </div>
            <p className='text-center py-6 text-xl'>Dont worry, insert your email</p>
            <InputWithLabel labelText='Email Address' type='email' Id='Email' placeholder='Email Address' value={email} onChange={setEmail} />
            <div className='pt-4'>
              <Button Children='Send' intent='success' Width='full' />
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
