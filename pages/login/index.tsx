import Head from 'next/head'
import Link from 'next/link'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { CustomParameters, UserCredential } from 'firebase/auth';
import { useSignInWithGithub, useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormEvent, useState } from 'react'
import { auth } from '../../server/Firebase/ClientApp';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from '@ui/forms/Input';
import { InputWithLabel } from '@ui/forms/Input/InputWithLabel';

interface FormLoginElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
}

interface FormLoginParams extends HTMLFormElement {
  readonly elements: FormLoginElements
}

export default function LogIn() {
  const [test, setTest] = useState("")

  const router = useRouter()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [
    signInWithGithub,
    userGithub,
    loadingGithub,
    errorGithub
  ] = useSignInWithGithub(auth);


  const [
    signInWithGoogle,
    userGoogle,
    loadingGoogle,
    errorGoogle
  ] = useSignInWithGoogle(auth);


  const HandleLoginWithProvider = (
    Provider: (
      scopes?: string[] | undefined,
      customOAuthParameters?: CustomParameters | undefined
    ) => Promise<UserCredential | undefined>
  ) => {

    Provider().then((res) => {
      if (res !== undefined) {
        router.push('/');
      }
      if (res === undefined) {
        const notify = () => toast.error("Email ou senha estão incorretos");
        notify()
        return
      }
    });
  };

  const HandleSubmit = (e: FormEvent<FormLoginParams>) => {

    e.preventDefault()

    const { 
      email: { value: emailValue },
      password: { value: passwordValue} 
    } = e.currentTarget.elements

    if (!emailValue.trim()) {
      const notify = () => toast.warn("O campo de email encontra-se vazio");
      notify()
      return
    }

    if (!passwordValue.trim()) {
      const notify = () => toast.warning("O campo de senha encontra-se vazio");
      notify()
      return
    }

    signInWithEmailAndPassword(emailValue, passwordValue).then(res => {

      if (res !== undefined) {
        router.push('/teste')
      }
      if (res === undefined) {
        const notify = () => toast.error("Email ou senha estão incorretos");
        notify()
        return
      }
    })
  }

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen'>
        <ToastContainer />
        <section className='flex flex-col'>
          <form onSubmit={HandleSubmit}>
            <div>
              <h1 className='text-center text-4xl'>Welcome Back</h1>
            </div>
            <p className='text-center py-6'>Log in with</p>
            <div className='flex justify-center gap-12 py-2'>
              <BsGithub className='h-10 w-10 cursor-pointer' title='Github' onClick={() => HandleLoginWithProvider(signInWithGithub)} />
              <BsGoogle className='h-10 w-10 cursor-pointer' title='Google' onClick={() => HandleLoginWithProvider(signInWithGoogle)} />
            </div>
            <p className='text-center pt-6 pb-4'>Or login with email</p>
            <InputWithLabel labelText='Email Address' type='email' placeholder='Email Address' name="email" />
            <div className='flex flex-col gap-2 pt-4'>
              <label>Password</label>
              <Input type='password' placeholder='Password' name='password'/>
            </div>
            <div className='flex gap-10 pt-4'>
              <div className='flex gap-2'>
                <input type='checkbox' id='checkbox' className='' />
                <label htmlFor='checkbox' >Keep me loged in</label>
              </div>
              <div>
                <Link href='login/passwordchange' className='text-DarkModeOrange'> Forgot your password?</Link>
              </div>
            </div>
            <div className='pt-4'>
              <button className='w-full bg-DarkModeGreen rounded-lg h-12 text-center '>Log in</button>
            </div>
          </form>
          <div className='pt-4'>
            <p>Dont have an account? <Link href='login/signup' className='text-DarkModeOrange'> Sign up </Link> </p>
          </div>
        </section>
      </main>
    </>
  )
}
