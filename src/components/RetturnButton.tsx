import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface Props {
  text: string
  href: string
}

export default function RetturnButton({ text, href }: Props) {
  return (
    <Link href={href} className='flex items-center gap-2'>
      <AiOutlineArrowLeft className='h-5 w-5' />
      <p className='text-xl'>{text}</p>
    </Link>
  )
}
