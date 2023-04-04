import RetturnButton from '@ui/retturnButton'
import Image from 'next/image'
import svg404 from '../../public/404.svg'

export default function NotFound() {

  return (
    <section className='text-black dark:text-white min-h-screen bg-CreamWhite dark:bg-[#121212]'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <p className='text-3xl'>Pelo visto essa página ainda não foi escrita</p>
        <Image
          src={svg404}
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
