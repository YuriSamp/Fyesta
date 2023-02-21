import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth } from '../../server/Firebase/ClientApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/Input/InputWithLabel';

//TODO Concertar essa parte que n mandando o email

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
          <Link href='./' className='pb-8 flex items-center gap-3 w-24'>
            <AiOutlineArrowLeft />
            <p className='text-xl'>Return</p>
          </Link>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>Forgot your password?</h1>
            </div>
            <p className='text-center py-6 text-xl'>Dont worry, insert your email</p>
            <InputWithLabel labelText='Email Address' type='email' Id='Email' placeholder='Email Address' value={email} onChange={setEmail} />
            <div className='pt-4'>
              <button className='w-full bg-DarkModeGreen rounded-lg h-12 text-center'>Send</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
