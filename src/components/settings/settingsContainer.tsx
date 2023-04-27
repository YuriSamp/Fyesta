import { ReactNode } from 'react'

interface Props {
  title: string
  firstChild: any
  children: ReactNode
}

export function SettingsContainer({ firstChild, children, title }: Props) {
  return (
    <div className='py-10  flex flex-col sm:flex-row gap-4 sm:gap-0  justify-between items-start sm:items-center  px-4'>
      <div className='flex flex-col gap-2 '>
        <h2 className='text-xl'>{title}</h2>
        <div className='pt-2'>
          {firstChild}
        </div>
      </div>
      {children}
    </div>
  )
}
