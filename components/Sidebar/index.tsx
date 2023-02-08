import { BsSearch, BsGear, BsTrash } from 'react-icons/bs'

export const Sidebar = () => {
  return (
    <aside className='w-80 min-h-screen flex flex-col items-center'>

      <h1 className='pt-24'>FYESTA</h1>

      <p className='py-12'>Menu</p>

      <section className='flex flex-col gap-4'>
        <div className='flex gap-3'>
          <BsSearch />
          <p>Search</p>
        </div>
        <div className='flex gap-3'>
          <BsGear />
          <p>Settings</p>
        </div>
        <div className='flex gap-3'>
          <BsTrash />
          <p>Trash</p>
        </div>
      </section>
    </aside>

  )
}
