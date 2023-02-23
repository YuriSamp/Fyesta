import { cva, VariantProps } from 'class-variance-authority';
import { SetStateAction } from 'jotai';
import { Dispatch } from 'react'

const SelectStyles = cva(
  'bg-transparent w-36 h-12 text-center',
  {
    variants: {
      intent: {
        primary: '',
      },
      Width: {
        full: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary'
    }
  },
);

export interface ISelect extends VariantProps<typeof SelectStyles> {
  Options: string | string[]
  value: string | undefined
  onChange: Dispatch<SetStateAction<string>> | ((theme: string) => void)
}

export function Select({ Width, intent, Options, onChange, value }: ISelect) {
  if (typeof Options === 'object')
    return (
      <select className={SelectStyles({ Width, intent })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Options.map((item, index) => (
          <option value={item} key={index} className='bg-InputGray'>
            {item}
          </option>
        ))}
      </select>
    )
  else {
    return (
      <select className={SelectStyles({ Width, intent })} >
        <option value={Options}>{Options}</option>
      </select>
    )
  }
}
