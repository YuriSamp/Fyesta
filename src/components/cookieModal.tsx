import React, { Dispatch, SetStateAction } from 'react'
import * as Portal from '@radix-ui/react-portal';

type cookiesProps = { setCookiesAccept: Dispatch<SetStateAction<boolean>> }

export default function CookiesModal({ setCookiesAccept }: cookiesProps) {

  return (
    <Portal.Root>
      <section className='w-96 left-10 bottom-10 rounded-lg fixed  flex- flex-col bg-neutral-800' >
        <div className='px-4 py-4'>
          <p className='tracking-wide text-lg'>O Fyesta usa cookies para melhorar a experiência do usuário,
            ao aceitar você concorda com a nossa <span className='underline'>politica de cookies</span>
          </p>
        </div>
        <div className='pb-4 px-4'>
          <button
            className=' bg-white w-full py-2 text-center text-black rounded-md'
            onClick={() => setCookiesAccept(true)}
          >
            Aceitar
          </button>
        </div>
      </section>
    </Portal.Root>
  )
}
