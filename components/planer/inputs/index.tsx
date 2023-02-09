import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';


function PlannerListaInput() {
  return (
    <div className='flex w-full gap-3 items-center'>
      <Checkbox.Root className="bg-white w-4 h-4 rounded flex items-center justify-center
          cursor-pointer" defaultChecked id="c1">
        <Checkbox.Indicator className="text-black">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <input className='bg-transparent border-b-2 border-white outline-none w-80' />
    </div>
  )
}

export default PlannerListaInput
