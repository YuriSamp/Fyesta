
import { ControledInput } from '@ui/Input';
import Header from '@ui/settings/header'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useSignOut, useDeleteUser } from 'react-firebase-hooks/auth';
import { auth } from 'server/Firebase/ClientApp';

export default function Perfil() {
  const router = useRouter()

  const page = router.pathname

  const [signOut, loading, error] = useSignOut(auth);
  const [deleteUser, deleteUserloading, deleteUserError] = useDeleteUser(auth);

  const [Username, setUsername] = useState<string>('Yuri Sampaio')
  const [photo, setPhoto] = useState<string>('')


  return (
    <>
      <section className='px-96 pt-16 '  >
        <Header
          Page={page}
        />
        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Nome</h2>
            <div className='pt-2'>
              <ControledInput type='text' Width='lg' placeholder='Yuri Sampaio' value={Username} onChange={setUsername} />
            </div>
          </div>
          <div>
            <button className='bg-transparent border-2 border-[#2A292B] w-36 h-12'>
              Atualizar
            </button>
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
            <button className='bg-transparent border-2 border-[#2A292B] w-36 h-12'>
              Atualizar
            </button>
          </div>
        </div>


        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Email</h2>
            <h3 className='text-base'>yurisamp123@gmail.com</h3>
          </div>
          <div>
            <button className='bg-transparent border-2 border-[#2A292B] w-36 h-12'>
              Mudar o email
            </button>
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Senha</h2>
            <h3 className='text-base'>Escolha uma senha forte, afinal você não quer que ninguem saiba seus segredos</h3>
          </div>
          <div>
            <button className='bg-transparent border-2 border-[#2A292B] w-36 h-12 '>
              Mudar a senha
            </button>
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Log out</h2>
            <h3 className='text-base'>Irá te redirecionar para página de login</h3>
          </div>
          <div>
            <button className='bg-[#B3202C] w-36 h-12'
              onClick={async () => {
                const resposta = await signOut()
                if (resposta) {
                  router.push('../../')
                }
              }}
            >
              Sair da conta
            </button>
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Excluir sua conta</h2>
            <h3 className='text-base'>É uma pena que você esteja indo embora <span className='text-lg'>😭</span>  </h3>
          </div>
          <div >
            <button className='bg-[#B3202C] w-36 h-12'
              onClick={async () => {
                const resposta = await deleteUser()
                if (resposta) {
                  router.push('../../')
                }
              }}
            >
              Excluir sua conta
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
