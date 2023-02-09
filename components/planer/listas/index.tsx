import React from 'react'
import PlannerListaInput from '../inputs';

interface Props {
  checkbox: boolean
  Quantidade?: number
}

function PlannerLista({ checkbox, Quantidade }: Props) {

  let QuantidadeDefault = 5
  let camposComCheckbox = []
  let camposSemCheckbox = []
  if (Quantidade !== undefined)
    QuantidadeDefault = Quantidade

  for (let index = 0; index < QuantidadeDefault; index++) {
    camposComCheckbox.push(<PlannerListaInput key={index} />)
  }

  for (let index = 0; index < QuantidadeDefault; index++) {
    camposSemCheckbox.push(
      <div className='flex w-full' key={index}>
        <input className='bg-transparent border-b-2 border-white outline-none w-80' />
      </div>
    )
  }

  return (
    <>
      {checkbox ?
        camposComCheckbox.map(item => item)
        :
        camposSemCheckbox.map(item => item)
      }
    </>
  )
}

export default PlannerLista
