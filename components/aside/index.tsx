import { BsSearch, BsGear, BsTrash, BsBook } from 'react-icons/bs'
import { AiOutlineCalendar, AiOutlinePlus, AiOutlineHeart } from 'react-icons/ai'
import { FiTarget } from 'react-icons/fi'

export const Sidebar = () => {
  return (
    <aside className='w-64 min-h-screen flex flex-col items-center border-r-2 border-gray-800 justify-between'>

      <section >
        <h1 className='pt-4 pb-1 text-4xl font-semibold italic border-b-2 border-white border-dashed'>FYESTA</h1>
        <div className='flex flex-col gap-6 pt-20'>
          <h2 className='text-lg italic text-center'>Menu</h2>
          <div className='flex gap-3 items-center cursor-pointer'>
            <BsSearch className='text-xl' />
            <p className='text-xl'>Search</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer '>
            <BsGear className='text-xl' />
            <p className='text-xl'>Settings</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <BsTrash className='text-xl' />
            <p className='text-xl'>Trash</p>
          </div>
        </div>

        <div className='flex flex-col gap-6 pt-20'>
          <h2 className='text-lg italic text-center'>Pages</h2>
          <div className='flex gap-3 items-center cursor-pointer'>
            <BsBook className='text-xl' />
            <p className='text-xl'>Diario</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <AiOutlineCalendar className='text-xl' />
            <p className='text-xl' >Calendario</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <FiTarget className='text-xl' />
            <p className='text-xl'>Metas</p>
          </div>
          <div className='flex gap-3 items-center cursor-pointer'>
            <AiOutlineHeart className='text-xl' />
            <p className='text-xl'>Emoções</p>
          </div>
        </div>
      </section>

      <div className='flex gap-3 items-center cursor-pointer border-t-2 border-gray-800 w-full justify-center py-4 '>
        <AiOutlinePlus className='text-2xl' />
        <p>New Entry</p>
      </div>

    </aside>
  )
}
