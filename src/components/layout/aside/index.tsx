import { BsSearch, BsTrash, BsBook, BsPencil, BsClockHistory } from 'react-icons/bs'
import { AiOutlineCalendar, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import { FiTarget } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'


const TrashModal = dynamic(() => import('./trashModal'), {
  ssr: false,
})

const SearchModal = dynamic(() => import('./searchModal'), {
  ssr: false
})

const pages = [
  { link: '/home', name: "Home", emoji: <AiOutlineHome className='text-xl' /> },
  { link: '/diario', name: "Diario", emoji: <BsBook className='text-xl' /> },
  { link: '/planner', name: "Planner", emoji: <BsPencil className='text-xl' /> },
  { link: '/calendario', name: "Calendario", emoji: <AiOutlineCalendar className='text-xl' /> },
  { link: '/metas', name: "Metas", emoji: <FiTarget className='text-xl' /> },
  { link: '/emocoes', name: "Emoções", emoji: <AiOutlineHeart className='text-xl' /> }
]

export const Sidebar = () => {

  const [Trashmodal, setTrashmodal] = useState(false)
  const [Searchmodal, setSearchmodal] = useState(false)
  const [Historyhmodal, setHistorymodal] = useState(false)

  return (
    <aside className='w-64  flex flex-col items-center bg-[#fafaf5] dark:bg-neutral-900 text-black dark:text-white justify-between z-10'>
      <section >
        <h1 className='pt-4 pb-1 text-4xl font-semibold italic text-center'>FYESTA</h1>
        <div className='flex flex-col gap-7 pt-20'>
          <h2 className='text-lg  text-center font-semibold text-violet-900 dark:text-white'>Menu</h2>
          <div className='flex gap-3 items-center cursor-pointer buttonaside relative'
          // onClick={() => setSearchmodal((prevstate) => !prevstate)}
          >
            <BsSearch className='text-xl' />
            <p className='text-xl'>Busca</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer buttonaside relative ' >
            <BsClockHistory className='text-xl' />
            <p className='text-xl'>Histórico</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer buttonaside relative'
          // onClick={() => setTrashmodal((prevstate) => !prevstate)}
          >
            <BsTrash className='text-xl' />
            <p className='text-xl'>Lixeira</p>
          </div>
        </div>
        <div className='flex flex-col gap-7 pt-20'>
          <h2 className='text-lg  text-center font-semibold text-violet-900 dark:text-white'>Páginas</h2>
          {pages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className='flex gap-3 items-center cursor-pointer buttonaside relative'>
              {item.emoji}
              <p className='text-xl'>{item.name}</p>
            </Link>
          ))}
        </div>
      </section>
      <TrashModal
        State={Trashmodal}
        SetState={setTrashmodal}
      />
      <SearchModal
        State={Searchmodal}
        SetState={setSearchmodal}
      />
    </aside>
  )
}
