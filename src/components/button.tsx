import { cva, VariantProps } from 'class-variance-authority';

const ButtonStyles = cva(
  'border-[1px] border-[#2A292B] w-36 h-12 cursor-pointer rounded-md',
  {
    variants: {
      intent: {
        primary: '',
        danger: 'bg-[#B3202C] border-none text-white',
        success: 'bg-DarkModeGreen rounded-lg border-none text-white'
      },
      Width: {
        sm: 'w-4',
        md: 'w-36 h-12',
        full: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary'
    }
  },
);

export interface IButton extends VariantProps<typeof ButtonStyles> {
  Children: string
  onClick?: any
}

export function Button({ Width, intent, Children, onClick }: IButton) {
  return (
    <button className={ButtonStyles({ Width, intent })} onClick={onClick}>{Children}</button>
  )
}
