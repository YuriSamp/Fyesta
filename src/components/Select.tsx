import { cva, VariantProps } from 'class-variance-authority';
import { SetStateAction } from 'jotai';
import { Dispatch } from 'react'

const SelectStyles = cva(
  'bg-transparent w-36 h-12 text-center border-[1px] rounded-md border-[#2A292B] ',
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
  onChange: Dispatch<SetStateAction<string>> | ((theme: string) => void) | ((mode: string) => void)
}

export function Select({ Width, intent, Options, onChange, value }: ISelect) {
  if (typeof Options === 'object')
    return (
      <select className={SelectStyles({ Width, intent })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Options.map((item, index) => (
          <option value={item} key={index} className='dark:bg-InputGray'>
            {item}
          </option>
        ))}
      </select>
    )
  return (
    <select className={SelectStyles({ Width, intent })} >
      <option value={Options}>{Options}</option>
    </select>
  )

}
