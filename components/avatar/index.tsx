import React from 'react'
import * as Avatar from '@radix-ui/react-avatar';

function AvatarIcon() {
  return (
    <Avatar.Root className='w-10 h-10 inline-flex justify-center items-center overflow-hidden cursor-pointer select-none bg-white rounded-full'>
      <Avatar.Image
        className='w-full h-full object-cover border-inherit'
        src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
        alt=''
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  )
}

export default AvatarIcon
