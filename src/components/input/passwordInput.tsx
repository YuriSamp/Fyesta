import * as Label from '@radix-ui/react-label';
import { useState } from 'react'
import { ControledInput } from './input';
import { RiEyeLine, RiEyeOffFill } from 'react-icons/ri'
import { passwordInputType } from 'src/interfaces/inputTypes';

export const PasswordInput = ({ labelText, Id, onChange, placeholder, value }: passwordInputType) => {

  const [inputType, setInputType] = useState('password');

  return (
    <div className='flex flex-col gap-2 pt-4'>
      <Label.Root htmlFor={Id}>
        {labelText}
      </Label.Root>
      <div className='relative'>
        {inputType === 'password' ?
          <RiEyeLine
            onClick={() => setInputType('text')}
            className='absolute right-3 top-3 text-lg cursor-pointer'
          />
          :
          <RiEyeOffFill
            onClick={() => setInputType('password')}
            className='absolute right-3 top-3 text-lg cursor-pointer'
          />
        }
        <ControledInput
          type={inputType}
          id={Id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          Width='full'
        />
      </div>
    </div>
  )
}
