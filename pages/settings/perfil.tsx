
export default function Perfil() {

  return (
    <>
      <section >
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
            <button className='bg-[#B3202C] w-36 h-12'>
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
            <button className='bg-[#B3202C] w-36 h-12'>
              Excluir sua conta
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
