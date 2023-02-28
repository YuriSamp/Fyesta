import { CustomParameters, UserCredential } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'

type ProviderType = (
  scopes?: string[] | undefined,
  customOAuthParameters?: CustomParameters | undefined
) => Promise<UserCredential | undefined>

type useAuthType = [
  HandleLoginWithProvider: (Provider: ProviderType) => void,
  HandleSubmit: (e: React.FormEvent<HTMLFormElement>, enail: string, password: string) => void
]

export default function useAuth(): useAuthType {
  const router = useRouter()

  const [
    signInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);

  async function HandleLoginWithProvider(Provider: ProviderType) {
    try {
      const userCredential = await Provider()
      if (!userCredential) {
        const notify = () => toast.error("Ocorreu algum erro com o provedor");
        notify()
        return
      }
      const token = await userCredential.user.getIdToken()
      nookies.set(undefined, 'token', token, { maxAge: 60 * 60 * 3, path: '/' })
      router.push('/home');

    } catch (error) {
      console.log(error)
    }
  };


  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
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

      if (res === undefined) {
        const notify = () => toast.error("Email ou senha estão incorretos");
        notify()
        return
      }

      nookies.set(undefined, 'token', email, { maxAge: 60 * 60 * 3, path: '/' })
      router.push('/home');
    })
  }

  return [HandleLoginWithProvider, HandleSubmit]
}
