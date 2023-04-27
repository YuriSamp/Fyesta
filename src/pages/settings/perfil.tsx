
import { Button } from '@ui/button';
import { ControledInput } from '@ui/input/input';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useSignOut, useIdToken, useUpdateProfile, useSendPasswordResetEmail, useVerifyBeforeUpdateEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';
import 'react-toastify/dist/ReactToastify.css';
import nookies from 'nookies'
import Header from '@ui/settings/settingsHeader';
import { toastNotify } from 'src/utils/toastNotify';
import { SettingsContainer } from '@ui/settings/settingsContainer';
import SettingsAlert from '@ui/settings/settingsAlert';

export default function Perfil() {
  const router = useRouter()
  const page = router.pathname

  const [signOut, loading, error] = useSignOut(auth);
  const [user] = useIdToken(auth);
  const [userName, setuserName] = useState('')
  const [photo, setPhoto] = useState<string>('')
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
  const [verifyBeforeUpdateEmail, updating1, error1] = useVerifyBeforeUpdateEmail(auth);
  const { theme, setTheme } = useTheme()
  const [alertOpen, setAlertOpen] = useState(false)

  const updateuserName = () => {
    try {
      toastNotify(userName === '', 'Por favor insira ao menos 1 caracterer', 'error')

      updateProfile({ displayName: userName })
      setuserName('')
      const notify = () => toast.success("O nome do usuario foi alterado com sucesso");
      notify()

    } catch (error) {

    }
  }

  const updatePhoto = () => {
    try {
      toastNotify(photo === '', 'Por favor insira ao menos 1 caracterer', 'error')
      updateProfile({ photoURL: photo })
      setPhoto('')
      const notify = () => toast.success("A foto do usuario foi alterado com sucesso");
      notify()
    } catch (error) {
    }
  }

  async function HandlePromise(fn: Promise<Boolean>) {
    await fn
    router.push('../../')
  }

  const logout = async () => {
    await HandlePromise(signOut())
    nookies.destroy(undefined, 'token')
    router.push('/')
  }

  const input = (theme: string | undefined) => {
    if (theme === 'light') {
      return <ControledInput type='text' Width='lg' intent='light' placeholder='Insira a nova url' value={photo} onChange={setPhoto} />
    }
    return <ControledInput type='text' Width='lg' placeholder='Insira a nova url' value={photo} onChange={setPhoto} />
  }

  const changePassword = async () => {
    sendPasswordResetEmail(user?.email as string)
    const notify = () => toast.success("Um email foi enviado para alterar a senha");
    notify()
  }

  const updateEmail = async () => {
    const sucess = await verifyBeforeUpdateEmail(user?.email as string, null)
    if (sucess) {
      const notify = () => toast.success("Um link para alterar o email foi enviado para o email atual");
      notify()
    }
  }

  return (
    <div className={`${alertOpen ? 'blur-sm' : ''}`}>
      <ToastContainer />
      <Header
        Page={page}
      />
      <div className='sm:max-h-[600px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-2'>
        <SettingsContainer
          title='Nome'
          firstChild={input(theme)}
        >
          <Button
            Children='Atualizar'
            onClick={() => updateuserName()}
          />
        </SettingsContainer>

        <SettingsContainer
          title='Foto'
          firstChild={input(theme)}
        >
          <Button
            Children='Atualizar'
            onClick={() => updatePhoto()}
          />
        </SettingsContainer>

        <SettingsContainer
          title='Email'
          firstChild={user?.email}
        >
          <Button
            Children='Mudar o email'
            onClick={async () => updateEmail()}
          />
        </SettingsContainer>

        <SettingsContainer
          title='Senha'
          firstChild='Escolha uma senha forte, afinal você não quer que ninguem saiba seus segredos'
        >
          <Button Children='Mudar a senha'
            onClick={async () => changePassword()}
          />
        </SettingsContainer>

        <SettingsContainer
          title='Sair da conta'
          firstChild='Irá te redirecionar para página de login'
        >
          <Button
            Children='Sair da conta'
            intent='danger'
            onClick={async () => logout()}
          />
        </SettingsContainer>
        <SettingsContainer
          title='Excluir sua conta'
          firstChild={`É uma pena que você esteja indo embora ${<span className='text-lg'>😭</span>}`}
        >
          <SettingsAlert
            HandlePromise={HandlePromise}
            isAlertOpen={alertOpen}
            setIsAlertOpen={setAlertOpen}
          />
        </SettingsContainer>
      </div>
    </div>
  )
}
