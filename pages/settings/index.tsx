import * as Switch from '@radix-ui/react-switch';



export default function Settings() {

  return (
    <>
      <section >
        <div className='py-10 flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Aparencia</h2>
            <h3 className='text-base'>Customiza o tema do Fyesta no seu dispositivo</h3>
          </div>
          <div>
            <select className='bg-transparent h-12 w-36 text-center'>
              <option className='bg-InputGray'>Dark</option>
              <option className='bg-InputGray'>White</option>
              <option className='bg-InputGray'>Colors</option>
            </select>
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Página ao abrir</h2>
            <h3 className='text-base'>Escolha onde iniciar ao abrir o Fyesta</h3>
          </div>
          <div>
            <select className=' bg-transparent h-12 w-36 text-center'>
              <option className='bg-InputGray'>Pagina inicial</option>
              <option className='bg-InputGray'>Última visitada</option>
            </select>
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Idioma</h2>
            <h3 className='text-base'>Escolha o idioma para a interface</h3>
          </div>
          <div>
            <select className='bg-transparent h-12 w-36 text-center'>
              <option className='bg-InputGray'>Português</option>
              <option className='bg-InputGray'>Inglês</option>
            </select>
          </div>
        </div>
        <div className='py-10  flex justify-between items-center px-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>Começar a semana na segunda</h2>
            <h3 className='text-base'>isso vai alterar a maneira como o calendario é apresentado</h3>
          </div>
          <div className=''>
            <Switch.Root className="SwitchRoot">
              <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
          </div>
        </div>
      </section>
    </>
  )
}
