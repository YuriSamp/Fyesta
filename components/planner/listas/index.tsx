import React from 'react'
import PlannerListaInput from '../inputs';

interface Props {
  checkbox: boolean
  Quantidade: number
  Title: string
}

function PlannerLista({ checkbox, Quantidade, Title }: Props) {

  const arr = new Array(Quantidade).fill("")

  return (
    <>
      {checkbox ?
        <>
          <h3 className='pl-8 text-2xl'>{Title}</h3>
          {arr.map((_, index) => <PlannerListaInput key={index} />)}
        </>
        :
        <>
          <h3 className='text-2xl'>{Title}</h3>
          {arr.map((_, index) => (
            <div className='flex w-full' key={index}>
              <input className='bg-transparent border-b-2 border-white outline-none w-80 text-xl' />
            </div>
          ))}
        </>
      }
    </>
  )
}

export default PlannerLista
