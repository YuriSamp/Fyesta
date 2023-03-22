import * as Label from '@radix-ui/react-label';
import { inputProps } from 'src/interfaces/InputProps';
import { ControledInput } from './input';

export const InputWithLabel = ({ labelText, Id, type, onChange, placeholder, value, theme }: inputProps) => {
  return (
    <div className='flex flex-col gap-2 pt-4'>
      <Label.Root htmlFor={Id}>
        {labelText}
      </Label.Root>
      {theme == 'light' ?
        <ControledInput type={type} Id={Id} placeholder={placeholder} value={value} onChange={onChange} intent='light' />
        :
        <ControledInput type={type} Id={Id} placeholder={placeholder} value={value} onChange={onChange} />
      }

    </div>
  )
}
