import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toastNotify } from 'src/utils/toastNotify';

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
    try {
      toastNotify(data.displayName.length === 0, "Por favor insira um nome", 'warn')
      toastNotify(data.email.length === 0, "Por favor insira um email", 'warn')
      toastNotify(data.password.length === 0, "Por favor insira uma senha", 'warn')
      toastNotify(data.password.length < 8, "A senha precisa ter 8 caracteres", 'warn')
      toastNotify(data.password !== data.passwordVerify, "As senhas inseridas estão diferentes", 'warn')

      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await updateProfile(user, { displayName: data.displayName, photoURL: data.photoURL });

      const token = await user.getIdToken()
      nookies.set(undefined, 'token', token, { path: '/' })

      router.push('/home')
    } catch (error: any) {
      if (error.message.includes('email-already')) {
        const notify = () => toast.error("E-mail já cadastrado. Faça seu login.");
        notify()
        return
      }
    }
  }

  return createUser
};
