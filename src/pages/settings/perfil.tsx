
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
import { perfilContent } from 'src/translate/settings/perfil';
import { Language } from 'src/context/seetingsContext';
import { useAtomValue } from 'jotai';

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

  const locale = useAtomValue(Language)
  const { Container1, Container2, Container3, Container4, Container5, Container6, placeholders } = perfilContent[locale as keyof typeof perfilContent]

  const update = (object: 'username' | 'photo') => {
    try {
      toastNotify(userName === '', 'Por favor insira ao menos 1 caracterer', 'error')
      if (object === 'username') {
        updateProfile({ displayName: userName })
        setuserName('')
      } else {
        updateProfile({ photoURL: photo })
        setPhoto('')
      }

      const notify = () => toast.success("Sua alteração foi realizada com sucesso");
      notify()
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro, por favor tente novamente");
      notify()
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

  const input = (theme: string | undefined, type: 'name' | 'photo') => {
    return (
      <ControledInput
        type='text'
        Width='lg'
        intent={theme === 'light' ? 'light' : 'primary'}
        placeholder={`${type === 'name' ? placeholders.nameInput : placeholders.photoInput}`}
        value={photo}
        onChange={setPhoto} />
    )
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
          title={Container1.title}
          firstChild={input(theme, 'name')}
        >
          <Button
            Children={Container1.children}
            onClick={() => update('username')}
          />
        </SettingsContainer>

        <SettingsContainer
          title={Container2.title}
          firstChild={input(theme, 'photo')}
        >
          <Button
            Children={Container2.children}
            onClick={() => update('photo')}
          />
        </SettingsContainer>

        <SettingsContainer
          title={Container3.title}
          firstChild={user?.email}
        >
          <Button
            Children={Container3.children}
            onClick={async () => updateEmail()}
          />
        </SettingsContainer>

        <SettingsContainer
          title={Container4.children}
          firstChild={Container4.firstChild}
        >
          <Button
            Children={Container4.children}
            onClick={async () => changePassword()}
          />
        </SettingsContainer>

        <SettingsContainer
          title={Container5.title}
          firstChild={Container5.firstChild}
        >
          <Button
            Children={Container5.children}
            intent='danger'
            onClick={async () => logout()}
          />
        </SettingsContainer>
        <SettingsContainer
          title={Container6.title}
          firstChild={`${Container6.firstChild} 😭`}
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
