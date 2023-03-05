import { cva, VariantProps } from 'class-variance-authority';
import { Dispatch, SetStateAction } from 'react';

const inputStyles = cva(
  'py-2 px-2 rounded-lg',
  {
    variants: {
      intent: {
        primary: 'bg-InputGray',
        secondary: 'bg-gray-200 text-blue-300'
      },
      Width: {
        sm: 'w-4',
        md: 'w-12',
        lg: 'w-60',
        full: 'w-full'
      },
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

export function ControledInput({ Width, intent, type, Id, placeholder, value, onChange }: Controled) {
  return (
    <input
      className={inputStyles({ Width, intent })}
      type={type} id={Id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
