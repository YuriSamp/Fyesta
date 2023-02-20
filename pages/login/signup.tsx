import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth } from '../../server/Firebase/ClientApp';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputWithLabel } from '@ui/Input/InputWithLabel';



export default function SignUp() {

  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('')
  const [picture, setPicture] = useState('')

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password.length < 8) {
      const notify = () => toast.warning("As senhas inseridas estão diferentes");
      notify()
      return
    }

    if (password !== passwordVerify) {
      const notify = () => toast.error("As senhas inseridas estão diferentes");
      notify()
      return
    }

    createUserWithEmailAndPassword(email, password)
    router.push('/home')
  }


  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <main className='flex justify-center items-center min-h-screen ' >
        <ToastContainer />
        <section className='flex flex-col'>
          <Link href='./' className='pb-8 flex items-center gap-3 w-24'>
            <AiOutlineArrowLeft />
            <p className='text-xl'>Return</p>
          </Link>
          <form className='w-96' onSubmit={(e) => HandleSubmit(e)}>
            <div>
              <h1 className='text-center text-4xl'>Sign Up</h1>
            </div>
            <InputWithLabel labelText='Name' type='text' Id='Name' placeholder='Your name' value={name} onChange={setName} />
            <InputWithLabel labelText='Email Address' type='email' Id='email' placeholder='Email Address' value={email} onChange={setEmail} />
            <InputWithLabel labelText='Password' type='password' Id='password' placeholder='Password' value={password} onChange={setPassword} />
            <InputWithLabel labelText='Confirm yourPassword' type='password' Id='password2' placeholder='Password' value={passwordVerify} onChange={setPasswordVerify} />
            <InputWithLabel labelText='Insert a photo' type='text' Id='photo' placeholder='Insert a url' value={picture} onChange={setPicture} />
            <p className='pt-6 text-sm text-center italic'>you do not need to add a picture, is just optional</p>
            <div className='pt-6'>
              <button className='w-full bg-DarkModeGreen rounded-lg h-12 text-center '>Create a account</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
