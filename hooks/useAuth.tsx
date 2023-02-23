import { CustomParameters, UserCredential } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from 'server/Firebase/ClientApp';


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

  const HandleLoginWithProvider = (Provider: TypeProvider) => {

    Provider().then((res) => {
      if (res !== undefined) {
        router.push('/home');
      }
      if (res === undefined) {
        const notify = () => toast.error("Email ou senha estão incorretos");
        notify()
        return
      }
    });
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
