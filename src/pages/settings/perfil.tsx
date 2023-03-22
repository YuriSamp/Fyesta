
import { Button } from '@ui/button';
import { ControledInput } from '@ui/input/input';
import Header from '@ui/SettingsHeader'
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useSignOut, useDeleteUser, useIdToken, useUpdateProfile, useSendPasswordResetEmail, useVerifyBeforeUpdateEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from 'src/server/Firebase/ClientApp';
import 'react-toastify/dist/ReactToastify.css';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import nookies from 'nookies'

export default function Perfil() {
  const router = useRouter()
  const page = router.pathname

  const [signOut, loading, error] = useSignOut(auth);
  const [deleteUser, deleteUserloading, deleteUserError] = useDeleteUser(auth);
  const [user] = useIdToken(auth);
  const [Username, setUsername] = useState('')
  const [photo, setPhoto] = useState<string>('')
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
  const [verifyBeforeUpdateEmail, updating1, error1] = useVerifyBeforeUpdateEmail(auth);
  const { theme, setTheme } = useTheme()
  const [AlertOpen, setAlertOpen] = useState(false)

  async function HandlePromise(fn: Promise<Boolean>) {
    await fn
    router.push('../../')
  }

  return (
    <div className={`${AlertOpen ? 'blur-sm' : ''}`}>
      <ToastContainer />
      <Header
        Page={page}
      />
      <div className='max-h-[600px] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 px-2'>
        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2 '>
            <h2 className='text-xl'>Nome</h2>
            <div className='pt-2'>
              {theme == 'light' ?
                <ControledInput type='text' Width='lg' intent='light' placeholder={user?.displayName as string} value={Username} onChange={setUsername} />
                :
                <ControledInput type='text' Width='lg' placeholder={user?.displayName as string} value={Username} onChange={setUsername} />
              }
            </div>
          </div>
          <Button
            Children='Atualizar'
            onClick={() => {
              updateProfile({ displayName: Username })
              setUsername('')
              const notify = () => toast.success("O nome do usuario foi alterado com sucesso");
              notify()
            }
            }
          />
        </div>

        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Foto</h2>
            <div className='pt-2 '>
              {theme === 'light' ?
                <ControledInput type='text' Width='lg' intent='light' placeholder='Insira a nova url' value={photo} onChange={setPhoto} />
                :
                <ControledInput type='text' Width='lg' placeholder='Insira a nova url' value={photo} onChange={setPhoto} />
              }
            </div>
          </div>
          <Button
            Children='Atualizar'
            onClick={() => {
              updateProfile({ photoURL: photo })
              setPhoto('')
              const notify = () => toast.success("A foto do usuario foi alterado com sucesso");
              notify()
            }}
          />
        </div>

        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Email</h2>
            <h3 className='text-base w-72 xl:w-[500px] 2xl:w-[700px]'>{user?.email}</h3>
          </div>
          <Button
            Children='Mudar o email'
            onClick={async () => {
              const sucess = await verifyBeforeUpdateEmail(user?.email as string, null)
              if (sucess) {
                const notify = () => toast.success("Um link para alterar o email foi enviado para o email atual");
                notify()
              }
            }}
          />
        </div>

        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Senha</h2>
            <h3 className='text-base w-72 xl:w-[500px] 2xl:w-[700px]'>Escolha uma senha forte, afinal você não quer que ninguem saiba seus segredos</h3>
          </div>
          <Button Children='Mudar a senha'
            onClick={() => {
              sendPasswordResetEmail(user?.email as string)
              const notify = () => toast.success("Um email foi enviado para alterar a senha");
              notify()
            }}
          />
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Log out</h2>
            <h3 className='text-base w-72 xl:w-[500px] 2xl:w-[700px]'>Irá te redirecionar para página de login</h3>
          </div>
          <Button
            Children='Sair da conta'
            intent='danger'
            onClick={async () => {
              await HandlePromise(signOut())
              nookies.destroy(undefined, 'token')
              router.push('/')
            }}
          />
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Excluir sua conta</h2>
            <h3 className='text-base w-72 xl:w-[500px] 2xl:w-[700px]'>É uma pena que você esteja indo embora <span className='text-lg'>😭</span>  </h3>
          </div>
          <AlertDialog.Root open={AlertOpen} onOpenChange={setAlertOpen}>
            <AlertDialog.Trigger asChild>
              <Button
                Children='Excluir sua conta'
                intent='danger'
              />
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="data-[state=open]:animate-overlayShow blur-xl fixed inset-0" />
              <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-black p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none text-black dark:text-white">
                <AlertDialog.Title className="m-0 text-[17px] font-medium">
                  Tem certeza?
                </AlertDialog.Title>
                <AlertDialog.Description className=" mt-4 mb-5 text-[15px] leading-normal">
                  Essa ação não pode ser desfeita. Sua conta e os seus dados serão permanentemente excluidos
                  do servidor
                </AlertDialog.Description>
                <div className="flex justify-end gap-[25px]">
                  <AlertDialog.Cancel asChild>
                    <button className=" bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                      Cancelar
                    </button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <button
                      className=" bg-[#B3202C] text-white focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                      onClick={async () => {
                        await HandlePromise(deleteUser())
                        nookies.destroy(undefined, 'token')
                        router.push('/')
                      }}
                    >
                      deletar conta
                    </button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>

        </div>
      </div>
    </div>
  )
}
