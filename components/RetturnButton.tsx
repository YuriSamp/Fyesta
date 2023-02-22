import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface Props {
  text: string
}

export default function RetturnButton({ text }: Props) {
  return (
    <Link href='./' className='mb-8 flex items-center gap-3 w-24'>
      <AiOutlineArrowLeft />
      <p className='text-xl'>{text}</p>
    </Link>
  )
}
