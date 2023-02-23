import { cva, VariantProps } from 'class-variance-authority';

const SelectStyles = cva(
  'border-2 border-[#2A292B] w-36 h-12 cursor-pointer',
  {
    variants: {
      intent: {
        primary: '',
        danger: 'bg-[#B3202C] border-none',
        success: 'bg-DarkModeGreen rounded-lg'
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

export interface ISelect extends VariantProps<typeof SelectStyles> {
  Options: string | string[]
  // onClick?: () => Promise<void>
}

export function Select({ Width, intent, Options }: ISelect) {
  if (typeof Options === 'object')
    return (
      <select className={SelectStyles({ Width, intent })} >
        {Options.map((item, index) => (
          <option value={item} key={index}>
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
