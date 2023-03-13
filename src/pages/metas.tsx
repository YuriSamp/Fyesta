import Sheets from '@ui/goals/sheets'
import YearBox from '@ui/goals/year'
import Fields from '@ui/goals/fields'
import Actions from '@ui/goals/actions'
import { useAtom } from 'jotai'
import { Goals } from 'src/context/Goals/GoalContext'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = dynamic(() => import('@ui/goals/goalsModal'), {
  ssr: false
})

export default function Metas() {

  const [Metas, setMetas] = useAtom(Goals)
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <>
      <ToastContainer limit={3} />
      <div className={`flex flex-col gap-16 text-black dark:text-white ${isModalOpen ? 'blur-sm' : ''}`}>
        <section className='w-full flex justify-center gap-12 items-center'>
          <YearBox Metas={Metas} />
          <Fields Metas={Metas} />
        </section>
        <section className='w-full flex justify-center gap-12 items-center'>
          <Sheets
            Metas={Metas}
            setMetas={setMetas}
            setState={setIsModalOpen} />
          <Actions
            Metas={Metas}
            setMetas={setMetas} />
        </section>
        <Modal
          State={isModalOpen}
          SetState={setIsModalOpen} />
      </div>
    </>
  )
}
