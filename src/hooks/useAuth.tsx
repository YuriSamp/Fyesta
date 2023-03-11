import { CustomParameters, UserCredential } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'
import { cookeisIsAccept } from 'src/context/cookiesContext';
import { useAtom } from 'jotai';
import { toastNotify } from 'src/utils/toastNotify';

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

  const [cookiesAcept, setCookiesAccept] = useAtom(cookeisIsAccept)

  async function AuthhProvider(Provider: ProviderType) {
    try {
      toastNotify(cookiesAcept === false, "Por favor aceite os cookies primeiro", 'error')
      const userCredential = await Provider()

      toastNotify(userCredential === undefined, "Ocorreu algum erro com o provedor", 'error')

      const token = await userCredential?.user.getIdToken()

      nookies.set(undefined, 'token', token as string, { maxAge: 60 * 60 * 24 * 15, path: '/' })
      router.push('/home');
    } catch (error) {
      console.log(error)
    }
  };

  const AuthSubmit = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string, persist: boolean) => {
    e.preventDefault()

    try {
      toastNotify(cookiesAcept === false, "Por favor aceite os cookies primeiro", 'error')
      toastNotify(email.length === 0, "O campo de email encontra-se vazio", 'warn')
      toastNotify(password.length === 0, "O campo de senha encontra-se vazio", 'warn')

      const res = await signInWithEmailAndPassword(email, password)

      toastNotify(res === undefined, "Email ou senha estão incorretos", 'error')

      const maxAge = persist ? 60 * 60 * 24 * 15 : undefined;
      const token = await res?.user.getIdToken()
      nookies.set(undefined, 'token', token as string, { maxAge, path: '/' });
      router.push('/home');
    } catch (error) {
      console.log(error)
    }
  }

  return [AuthhProvider, AuthSubmit]
}
