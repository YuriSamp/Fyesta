import { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

interface Props {
  Quantidade: number
}

export default function PlannerListaInput({ Quantidade }: Props) {

  let arr = []

  for (let index = 0; index < Quantidade; index++) {
    arr.push({ Id: index, Selecionado: false })
  }

  const [lista, setLista] = useState(arr)

  function BooleanChange(id: number) {
    const ListaVerificada = lista?.map(item => {
      if (item.Id === id) {
        item.Selecionado = !item.Selecionado
      }
      return item
    })
    setLista(ListaVerificada);
  }

  return (
    <div className='flex flex-col gap-3 items-center'>
      {lista.map((item, index) => (
        <div className='flex gap-3 items-center' key={index}>
          <Checkbox.Root
            className={`w-5 h-5 border-[1px] border-[#383838]  flex items-center justify-center cursor-pointer ${item.Selecionado ? 'bg-green-700' : ''} `}
            id="c1"
            onClick={() => BooleanChange(item.Id)}>
            <Checkbox.Indicator
              className="text-white">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <div className='flex w-full' key={index}>
            <input className={`bg-transparent  outline-none w-80 text-xl  ${item.Selecionado ? 'line-through text-gray-400' : ''}`}
              placeholder='To - do'
              readOnly={item.Selecionado}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
