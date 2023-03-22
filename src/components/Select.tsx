import { cva, VariantProps } from 'class-variance-authority';
import { SetStateAction } from 'jotai';
import { Dispatch } from 'react'
import UpperCaseFirstLetter from 'src/utils/UppercaseFirstLetter';

const SelectStyles = cva(
  'bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] ',
  {
    variants: {
      intent: {
        primary: '',
      },
      Width: {
        md: 'w-28 h-9',
        xmd: 'w-44 h-9',
        lg: 'w-36 h-12',
        full: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary'
    }
  },
);

export interface ISelect extends VariantProps<typeof SelectStyles> {
  Options: readonly string[]
  value: string | undefined
  onChange: Dispatch<SetStateAction<any>> | ((theme: string) => void) | ((mode: string) => void)
}

export function Select({ Width, intent, Options, onChange, value }: ISelect) {
  return (
    <select className={SelectStyles({ Width, intent })}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {Options.map((item, index) => (
        <option value={item} key={index} className='dark:bg-InputGray'>
          {UpperCaseFirstLetter(item)}
        </option>
      ))}
    </select>
  )
}
