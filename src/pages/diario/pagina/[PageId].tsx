import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { diaryId, diaryPage } from 'src/context/diaryContext'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
import { Navbar } from '@ui/layout/navbar'

const Pagina = () => {
  const router = useRouter()
  const { PageId } = router.query
  const PageIdNumber = Number(PageId)

  const [diary, setdiary] = useAtom(diaryPage);
  const Id = useAtomValue(diaryId);

  const [Title, setTitle] = useState(diary[PageIdNumber]?.Title)
  const [Feeling, setFeeling] = useState(diary[PageIdNumber]?.Feeling)
  const [Text, setText] = useState(diary[PageIdNumber]?.Text)
  const [Data, setData] = useState(diary[PageIdNumber]?.Data)


  function HandleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (Title === '' || Data === '') {
      const notify = () => toast.warn("Por favor insira ao menos o titulo e data");
      notify()
      return
    }

    const updated = diary.map(item => {
      if (item.Id === Id - 1) {
        item.Title = Title
        item.Data = Data
        item.Feeling = Feeling
        item.Text = Text
      }
      return item
    })

    setdiary(updated)
    router.push('../')
  }

  return (
    <>
      <Head>
        <title>Fyesta</title>
      </Head>
      <section className='w-full'>
        <Navbar Page='diario' />
        <section
          className='flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400 bg-white dark:bg-[#121212] px-12 py-10 select-none text-black dark:text-white'>
          <form className='flex flex-col gap-8' onSubmit={e => HandleForm(e)}>
            <input
              className='bg-transparent focus:outline-none p-4 text-3xl'
              placeholder='Insira um titulo'
              autoFocus={true}
              value={Title}
              onChange={e => setTitle(e.target.value)}
            />
            <div className='flex flex-col gap-6'>
              <div className='flex w-full gap-3 items-center'>
                <AiOutlineCalendar className='w-6 h-6' />
                <input
                  type='date'
                  className='bg-transparent h-7 px-2 border-[1px]  border-black dark:border-white rounded-md focus:outline-none text-center'
                  value={Data}
                  onChange={e => setData(e.target.value)}
                />
              </div>
              <div className='flex w-full gap-3 items-center'>
                <AiOutlineHeart className='w-6 h-6' />
                <select
                  className='bg-transparent h-7 w-[155px] text-center border-[1px]  border-black dark:border-white rounded-md '
                  placeholder='Sentimentos'
                  value={Feeling}
                  onChange={e => setFeeling(e.target.value)}
                >
                  <option className='bg-white dark:bg-InputGray'>Feliz</option>
                  <option className='bg-white dark:bg-InputGray'>Triste</option>
                  <option className='bg-white dark:bg-InputGray'>Animado</option>
                  <option className='bg-white dark:bg-InputGray'>Depressivo</option>
                  <option className='bg-white dark:bg-InputGray'>Indiferente</option>
                </select>
              </div>
            </div>
            <hr />
            <textarea
              className='h-[450px] bg-transparent focus:outline-none p-3 text-lg placeholder:italic resize-none tracking-wide leading-relaxed indent-5 scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'
              placeholder='Comece a escrever sobre o seu dia'
              value={Text}
              onChange={e => setText(e.target.value)}
            />
            <div className='flex '>
              <button className='bg-green-700 p-4 rounded-md text-white'>Salvar mudanças</button>
            </div>
          </form>
          <ToastContainer limit={3} />
        </section>
      </section>
    </>
  )
}

export default Pagina
