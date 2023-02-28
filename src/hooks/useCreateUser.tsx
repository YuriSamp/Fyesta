import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

type Data = {
  displayName: string
  email: string
  password: string
  photoURL: string
  passwordVerify: string
}

export default function useCreateUser() {

  const router = useRouter()

  async function createUser(data: Data) {
    if (data.password.length === 0) {
      const notify = () => toast.warning("Um nome para a identificação é necessário");
      notify()
      return
    }

    if (data.password.length < 8) {
      const notify = () => toast.warning("As senhas inseridas estão diferentes");
      notify()
      return
    }

    if (data.password !== data.passwordVerify) {
      const notify = () => toast.error("As senhas inseridas estão diferentes");
      notify()
      return
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await updateProfile(user, { displayName: data.displayName, photoURL: data.photoURL });

      nookies.set(undefined, 'token', data.displayName, { maxAge: 60 * 60 * 3, path: '/' })
      router.push('/home')
    } catch (error: any) {

      if (error.message.includes('email-already')) {
        const notify = () => toast.error("E-mail já cadastrado. Faça seu login.");
        notify()
        return
      }

      const notify = () => toast.error("Ocorreu um erro, tente mais tarde");
      notify()
    }
  }

  return createUser
};
