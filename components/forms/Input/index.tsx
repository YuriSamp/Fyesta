import { cva, VariantProps } from 'class-variance-authority';
import { Dispatch, SetStateAction } from 'react';

const inputStyles = cva('py-2 px-2 rounded-lg', {
  variants: {
    intent: {
      primary: 'bg-InputGray',
      secondary: 'bg-gray-200 text-blue-300',
    },
    Width: {
      sm: 'w-4',
      md: 'w-12',
      lg: 'w-24',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface InputParams extends VariantProps<typeof inputStyles> {
  Id?: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>;
  name?: string;
}

export function Input({
  Width,
  intent,
  type,
  Id,
  placeholder,
  value,
  onChange,
  name,
}: InputParams) {
  return (
    <input
      name={name}
      className={inputStyles({ Width, intent })}
      type={type}
      id={Id}
      placeholder={placeholder}
      {...(typeof onChange === 'function' && {
        onChange: (e) => onChange(e.target.value),
      })}
      {...(typeof value === 'string' && {
        value: value,
      })}
    />
  );
}

