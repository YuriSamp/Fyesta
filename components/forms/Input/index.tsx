import * as Label from '@radix-ui/react-label';
import { Dispatch, SetStateAction } from 'react'

interface Props {
  labelText: string
  Id: string
  type: string
  placeholder: string
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export const InputWithLabel = ({ labelText, Id, type, onChange, placeholder, value }: Props) => {
  return (
    <>
      <div className='flex flex-col gap-2 pt-4'>
        <label>Email Address</label>
        <Label.Root htmlFor={Id}>
          {labelText}
        </Label.Root>
        <input type={type} id={Id} placeholder={placeholder} className='py-2 px-2 rounded-lg' value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    </>
  )
}

export const Input = (props: any) => {
  return (
    <input type='email' placeholder='Email Address' className='py-2 px-2 rounded-lg' value={props} onChange={(e) => props(e.target.value)} />
  )
}
