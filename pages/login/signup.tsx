import Head from 'next/head'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth } from '../../Firebase/ClientApp';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
    router.push('/')
  }

  console.log(user)

  return (
    <>
      <Head>
        <title>Fyesta</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex justify-center items-center min-h-screen'>
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
            <div className='flex flex-col gap-2 pt-4'>
              <label>Name</label>
              <input type='text' placeholder='Your name' className='py-2 px-2 rounded-lg' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 pt-4'>
              <label>Email Address</label>
              <input type='email' placeholder='Email Address' className='py-2 px-2 rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 pt-4'>
              <label>Password</label>
              <input type='password' placeholder='Password' className='py-2 px-2 rounded-lg' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 pt-4'>
              <label>Confirm your password</label>
              <input type='password' placeholder='Password' className='py-2 px-2 rounded-lg' value={passwordVerify} onChange={(e) => setPasswordVerify(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2 pt-4'>
              <label >Insert a photo</label>
              <input type='text' placeholder='Insert a url' className='py-2 px-2 rounded-lg' value={picture} onChange={(e) => setPicture(e.target.value)} />
              <p className='pt-2 text-sm text-center italic'>you do not need to add a picture, is just optional</p>
            </div>
            <div className='pt-8'>
              <button className='w-full bg-[#138859] rounded-lg h-12 '>Create a accont</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}