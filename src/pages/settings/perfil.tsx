
import { Button } from '@ui/button';
import { ControledInput } from '@ui/input';
import Header from '@ui/SettingsHeader'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useSignOut, useDeleteUser, useIdToken, useUpdateProfile, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';

export default function Perfil() {
  const router = useRouter()
  const page = router.pathname

  const [signOut, loading, error] = useSignOut(auth);
  const [deleteUser, deleteUserloading, deleteUserError] = useDeleteUser(auth);
  const [user] = useIdToken(auth);
  const [Username, setUsername] = useState(user?.displayName as string)
  const [photo, setPhoto] = useState<string>('')
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);

  async function HandlePromise(fn: Promise<Boolean>) {
    await fn
    router.push('../../')
  }


  return (
    <section className='px-96 pt-16 '  >
      <Header
        Page={page}
      />
      <div className='max-h-[600px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-2'>
        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Nome</h2>
            <div className='pt-2'>
              <ControledInput type='text' Width='lg' placeholder='Yuri Sampaio' value={Username} onChange={setUsername} />
            </div>
          </div>
          <div>
            <Button
              Children='Atualizar'
              onClick={() => updateProfile({ displayName: Username })}
            />
          </div>
        </div>

        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Foto</h2>
            <div className='pt-2'>
              <ControledInput type='text' Width='lg' placeholder='Insira a nova url' value={photo} onChange={setPhoto} />
            </div>
          </div>
          <div>
            <Button
              Children='Atualizar'
              onClick={() => updateProfile({ photoURL: photo })}
            />
          </div>
        </div>

        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Email</h2>
            <h3 className='text-base'>yurisamp123@gmail.com</h3>
          </div>
          <div>
            <Button
              Children='Mudar o email'

            />
          </div>
        </div>

        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Senha</h2>
            <h3 className='text-base'>Escolha uma senha forte, afinal você não quer que ninguem saiba seus segredos</h3>
          </div>
          <div>
            <Button Children='Mudar a senha'
              onClick={() => {
                sendPasswordResetEmail(user?.email as string)
                const notify = () => toast.success("Um email foi enviado para alterar a senha");
                notify()
              }}
            />
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Log out</h2>
            <h3 className='text-base'>Irá te redirecionar para página de login</h3>
          </div>
          <div>
            <Button
              Children='Sair da conta'
              intent='danger'
              onClick={async () => HandlePromise(signOut())}
            />
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Excluir sua conta</h2>
            <h3 className='text-base'>É uma pena que você esteja indo embora <span className='text-lg'>😭</span>  </h3>
          </div>
          <div >
            <Button
              Children='Excluir sua conta'
              intent='danger'
              onClick={async () => HandlePromise(deleteUser())}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
