
import Link from 'next/link'
import { Idiary } from 'src/interfaces/diaryTypes'


export default function DiarypageWritten({ data, text, id, title, color }: Idiary) {

  const formatedText = text.slice(0, 200) + '...'
  const formatedData = data.slice(-5).split('-').reverse()
  const formatedTitle = title.slice(0, 19) + '...'
  const displayString = [formatedData[0], ' / ', formatedData[1]].concat()
  return (
    <Link
      href={`./diario/pagina/${id}`}
      className='w-60 h-52 bg-CreamWhite dark:bg-neutral-900 flex px-2 py-2 cursor-pointer relative select-none rounded-md drop-shadow-lg text-black dark:text-white border-2'
    >
      <p className='text-sm p-1'> {text.length > 200 ? formatedText : text}</p>
      <div
        style={{ backgroundColor: color }}
        className='flex justify-between absolute bottom-0 left-0 py-2  w-full px-3 rounded-b-md'>
        <p>{title.length > 10 ? formatedTitle : title}</p>
        <p>{displayString}</p>
      </div>
    </Link>
  )
}
