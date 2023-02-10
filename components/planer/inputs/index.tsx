import { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';


function PlannerListaInput() {

  const [checked, setChecked] = useState(false)
  console.log(checked)

  return (
    <div className='flex w-full gap-3 items-center'>
      <Checkbox.Root className="bg-white w-5 h-5 rounded flex items-center justify-center cursor-pointer" id="c1" onClick={() => setChecked(!checked)}>
        <Checkbox.Indicator

          className="text-black">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {/* <input className='bg-transparent border-b-2 border-white outline-none w-80' /> */}
      <input className={`bg-transparent border-b-2 border-white outline-none w-80 text-xl ${checked ? 'line-through text-gray-400' : ''}`} />
    </div>
  )
}

export default PlannerListaInput
