import RetturnButton from '@ui/retturnButton'
import Image from 'next/image'
import svg500 from '../../public/500.svg'
import { useAtomValue } from 'jotai'
import { Language } from 'src/context/seetingsContext'

export default function Custom500() {

  const locale = useAtomValue(Language)

  return (
    <section className='text-black dark:text-white min-h-screen bg-CreamWhite dark:bg-[#121212]'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <p className='text-3xl'>{locale === 'pt-BR' ? 'Pelo visto tivemos algum problema interno' : 'Apparently we had some internal problem'} </p>
        <p className='text-2xl py-3 text-neutral-900 dark:text-neutral-400'>
          {locale === 'pt-BR' ?
            'Por favor tente novamente, caso o problema persista entre em contato conosco'
            :
            'Please try again, if the problem persists, please contact us.'}
        </p>
        <Image
          src={svg500}
          alt='imagem de um computador com erro'
          width={600}
          height={600}
        />
        <div className='pt-6'>
          <RetturnButton
            href='/home'
            text='Home'
          />
        </div>
      </div>
    </section>
  )
}
