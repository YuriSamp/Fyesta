import RetturnButton from '@ui/RetturnButton'
import Image from 'next/image'
import svg500 from '../../public/500.svg'

export default function Custom500() {

  return (
    <section className='text-black dark:text-white min-h-screen bg-CreamWhite dark:bg-[#121212]'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <p className='text-3xl'>Pelo visto tivemos algum problema interno</p>
        <p className='text-2xl py-3 text-neutral-900 dark:text-neutral-400'>Por favor tente novamente, caso o problema persista entre em contato conosco</p>
        <Image
          src={svg500}
          alt='imagem de um computador com erro'
          width={600}
          height={600}
        />
        <div className='pt-6'>
          <RetturnButton
            href='/home'
            text='Voltar a home'
          />
        </div>
      </div>
    </section>
  )
}
