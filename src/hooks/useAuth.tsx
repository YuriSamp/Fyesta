import { CustomParameters, UserCredential } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'

type ProviderType = (
  scopes?: string[] | undefined,
  customOAuthParameters?: CustomParameters | undefined
) => Promise<UserCredential | undefined>

type AuthProviderType = (Provider: ProviderType) => void

type AuthSubmitType = (e: React.FormEvent<HTMLFormElement>, enail: string, password: string, persist: boolean) => void

type useAuthType = [AuthhProvider: AuthProviderType, AuthSubmit: AuthSubmitType]

export default function useAuth(): useAuthType {
  const router = useRouter()

  const [
    signInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);

  async function AuthhProvider(Provider: ProviderType) {
    try {
      const userCredential = await Provider()
      if (!userCredential) {
        const notify = () => toast.error("Ocorreu algum erro com o provedor");
        notify()
        return
      }
      const token = await userCredential.user.getIdToken()
      nookies.set(undefined, 'token', token, { maxAge: 60 * 60 * 24 * 15, path: '/' })
      router.push('/home');
    } catch (error) {
      console.log(error)
    }
  };

  const AuthSubmit = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string, persist: boolean) => {
    e.preventDefault()

    if (email.length === 0) {
      const notify = () => toast.warning("O campo de email encontra-se vazio");
      notify()
      return
    }

    if (password.length === 0) {
      const notify = () => toast.warning("O campo de senha encontra-se vazio");
      notify()
      return
    }

    try {
      const res = await signInWithEmailAndPassword(email, password)

      if (res === undefined) {
        const notify = () => toast.error("Email ou senha estão incorretos");
        notify()
        return
      }

      const maxAge = persist ? 60 * 60 * 24 * 15 : undefined;

      const token = await res.user.getIdToken()
      nookies.set(undefined, 'token', token, { maxAge, path: '/' });
      router.push('/home');
    } catch (error) {
      console.log(error)
    }

  }

  return [AuthhProvider, AuthSubmit]
}
