import { cva, VariantProps } from 'class-variance-authority';
import { Dispatch, SetStateAction } from 'react';

const inputStyles = cva(
  'py-2 px-2 rounded-lg focus:outline-none',
  {
    variants: {
      intent: {
        primary: 'bg-InputGray text-white',
        light: 'bg-transparent border-[1px] border-black',
        transparent: 'bg-transparent border-b-2 border-black rounded-none dark:border-white focus:border-violet-700'
      },
      Width: {
        sm: 'w-4',
        md: 'w-12',
        lg: 'w-60',
        full: 'w-full'
      },
      textSize: {
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        Dxl: 'text-2xl',
      }
    },
    defaultVariants: {
      intent: 'primary'
    }
  },
);

interface Controled extends VariantProps<typeof inputStyles> {
  Id?: string
  type: string
  placeholder: string
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export function ControledInput({ Width, intent, textSize, type, Id, placeholder, value, onChange }: Controled) {
  return (
    <input
      className={inputStyles({ Width, intent, textSize })}
      type={type} id={Id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
