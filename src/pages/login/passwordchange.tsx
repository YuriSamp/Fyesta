import { Button } from '@ui/button';
import { InputWithLabel } from '@ui/InputWithLabel';
import Head from 'next/head';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.req.url?.includes('mode=resetPassword')) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}

export default function Passwordchange() {
  const [password, setPassword] = useState('')
  const [passwordVerify, setPasswordVerify] = useState('')


  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // if (email.length === 0) {
    //   const notify = () => toast.warn("O campo de email encontra-se vazio");
    //   notify()
    //   return
    // }
    // const sucess = await sendPasswordResetEmail(email)
    // if (sucess) {
    //   const notify = () => toast.success("Verifique na sua caixa de entrada se o email já chegou");
    //   notify()
    // }
  }

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen'>
        <ToastContainer autoClose={3000} />
        <section className='flex flex-col'>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>Reset your password</h1>
            </div>
            <p className='text-center py-6 text-xl'>Dont worry, just type your new password</p>
            <InputWithLabel labelText='Password' type='password' Id='password' placeholder='password' value={password} onChange={setPassword} />
            <InputWithLabel labelText='Password Verify' type='password' Id='passwordVerify' placeholder='password' value={passwordVerify} onChange={setPasswordVerify} />
            <div className='pt-4'>
              <Button Children='Reset' intent='success' Width='full' />
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
