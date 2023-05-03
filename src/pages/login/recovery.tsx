import Head from 'next/head'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth } from '../../server/Firebase/ClientApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/input/inputWithLabel';
import { Button } from '@ui/button';
import RetturnButton from '@ui/retturnButton';
import { recoveryContent } from 'src/translate/login/recovery';
import { useAtomValue } from 'jotai';
import { Language } from 'src/context/seetingsContext';

export default function Passwordchange() {

  const [email, setEmail] = useState('')
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const locale = useAtomValue(Language)
  const { subTitle, submit, title } = recoveryContent[locale as keyof typeof recoveryContent]

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email.length === 0) {
      const notify = () => toast.warning("O campo de email encontra-se vazio");
      notify()
      return
    }
    try {
      await sendPasswordResetEmail(email)
      const notify = () => toast.success("Verifique na sua caixa de entrada se o email já chegou");
      notify()
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro, tente mais tarde");
      notify()
    }

  }

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
            onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>{title}</h1>
            </div>
            <p className='text-center py-6 text-xl'>{subTitle}</p>
            <InputWithLabel labelText='Email' type='email' Id='Email' placeholder='Email' value={email} onChange={setEmail} />
            <div className='pt-4'>
              <Button Children={submit} intent='success' Width='full' />
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
