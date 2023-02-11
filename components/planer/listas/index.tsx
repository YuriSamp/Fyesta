import React from 'react'
import PlannerListaInput from '../inputs';

interface Props {
  checkbox: boolean
  Quantidade: number
}

function PlannerLista({ checkbox, Quantidade }: Props) {

  const arr = new Array(Quantidade).fill("")

  return (
    <>
      {checkbox ?
        arr.map((_, index) => <PlannerListaInput key={index} />)
        :
        arr.map((_, index) => (
          <div className='flex w-full' key={index}>
            <input className='bg-transparent border-b-2 border-white outline-none w-80 text-xl' />
          </div>
        ))
      }
    </>
  )
}

export default PlannerLista
