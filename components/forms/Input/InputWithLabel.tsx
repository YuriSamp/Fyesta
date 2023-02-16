import * as Label from '@radix-ui/react-label';
import { Dispatch, SetStateAction } from 'react'
import { Input } from '.';

interface Props {
  labelText?: string
  Id?: string
  type: string
  placeholder: string
  value?: string
  onChange?: Dispatch<SetStateAction<string>>
  name?: string
}

export const InputWithLabel = ({ labelText, Id, type, onChange, placeholder, value, name }: Props) => {
  return (
    <>
      <div className='flex flex-col gap-2 pt-4'>
        <Label.Root htmlFor={Id}>
          {labelText}
        </Label.Root>
        <Input name={name} type={type} Id={Id} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </>
  )
}
