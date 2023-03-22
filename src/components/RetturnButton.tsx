import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface Props {
  text: string
  href: string
}

export default function RetturnButton({ text, href }: Props) {
  return (
    <Link href={href} className='flex items-center gap-2'>
      <AiOutlineArrowLeft className='h-6 w-6' />
      <p className='text-2xl'>{text}</p>
    </Link>
  )
}
