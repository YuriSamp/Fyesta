import React from 'react'
import * as Avatar from '@radix-ui/react-avatar';
import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva(
  'inline-flex justify-center items-center overflow-hidden cursor-pointer select-none bg-white rounded-full',
  {
    variants: {
      Width: {
        sm: 'w-6 h-6',
        md: 'w-10 h-10',
        lg: ' w-14 h-14 sm:w-24 sm:h-24 ',
      },
    },
    defaultVariants: {
      Width: 'sm'
    }
  },
);

interface avatar extends VariantProps<typeof inputStyles> {
  userPhoto: string | undefined
}

function AvatarIcon({ Width, userPhoto }: avatar) {
  return (
    <Avatar.Root className={inputStyles({ Width })}>
      <Avatar.Image
        className='w-full h-full object-cover border-inherit'
        src={userPhoto}
        alt=''
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

export default AvatarIcon
