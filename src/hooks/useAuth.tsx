import { CustomParameters, UserCredential } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'
import { useState } from 'react'

type TypeProvider = (
  scopes?: string[] | undefined,
  customOAuthParameters?: CustomParameters | undefined
) => Promise<UserCredential | undefined>

export default function useAuth(email: string, password: string):
  [
    HandleLoginWithProvider: (Provider: TypeProvider) => void,
    HandleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  ] {

  const router = useRouter()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [userState] = useAuthState(auth)

  async function HandleLoginWithProvider(Provider: TypeProvider) {
    await Provider().then((res) => {
      if (res === undefined) {
        const notify = () => toast.error("Ocorreu algum erro com o provedor");
        nookies.set(undefined, 'token', '', { path: '/' });
        notify()
        return
      }
    });

    const token = await userState?.getIdToken() as string
    nookies.set(undefined, 'token', token, { maxAge: 60 * 60 * 3, path: '/' })
    router.push('/home');

  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInWithEmailAndPassword(email, password).then(res => {

      if (email.length === 0) {
        const notify = () => toast.warn("O campo de email encontra-se vazio");
        notify()
        return
      }

      if (password.length === 0) {
        const notify = () => toast.warning("O campo de senha encontra-se vazio");
        notify()
        return
      }

      if (res !== undefined) {
        router.push('/home');
      }
      if (res === undefined) {
        const notify = () => toast.error("Email ou senha estão incorretos");
        notify()
        return
      }
    })
  }

  return [HandleLoginWithProvider, HandleSubmit]
}
