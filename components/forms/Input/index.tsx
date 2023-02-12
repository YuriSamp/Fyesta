import * as Label from '@radix-ui/react-label';
import { Dispatch, SetStateAction } from 'react'
import { ControledInput } from './test';

interface Props {
  labelText?: string
  Id?: string
  type: string
  placeholder: string
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export const InputWithLabel = ({ labelText, Id, type, onChange, placeholder, value }: Props) => {
  return (
    <>
      <div className='flex flex-col gap-2 pt-4'>
        <Label.Root htmlFor={Id}>
          {labelText}
        </Label.Root>
        <ControledInput type={type} Id={Id} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </>
  )
}
