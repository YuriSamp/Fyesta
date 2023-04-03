import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { diaryId, diaryPage } from 'src/context/diaryContext'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { TodayDateToDateInput } from 'src/helper/DateHelpers'
import Head from 'next/head'
import { Navbar } from '@ui/layout/navbar'
import { InputWithSelect } from '@ui/input/EmotionInput'
import { emotionsOptions } from 'src/context/emotionsOptions'

const NovaPagina = () => {

  const DateInput = TodayDateToDateInput()
  const router = useRouter()

  const [Title, setTitle] = useState('')
  const [Feeling, setFeeling] = useState('Feliz')
  const [Text, setText] = useState('')
  const [Data, setData] = useState(DateInput)
  const [_, setdiary] = useAtom(diaryPage);
  const [Id, setdiaryId] = useAtom(diaryId);
  const [options, setoptions] = useAtom(emotionsOptions)
  const [Color, setColor] = useState('')

  function HandleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (Title === '' || Data === '') {
      const notify = () => toast.warn("Por favor insira ao menos o titulo e data");
      notify()
      return
    }

    const notes = {
      Title,
      Data,
      Feeling,
      Text,
      Id,
      Color
    }

    setdiary(prev => [...prev, notes])
    setdiaryId(prev => prev + 1)
    router.push('./')
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
                <InputWithSelect
                  options={options}
                  setoption={setoptions}
                  setState={setFeeling}
                  setColor={setColor}
                  placeholder={'Procure o sentimento'}
                />
              </div>
            </div>
            <hr />
            <textarea
              className='h-[450px] bg-transparent focus:outline-none p-3 text-lg placeholder:italic resize-none tracking-wide leading-relaxed indent-5 scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'
              placeholder='Comece a escrever sobre o seu dia'
              onChange={e => setText(e.target.value)}
            />
            <div className='flex '>
              <button className='bg-green-700 p-4 rounded-md text-white'>Incluir no diario</button>
            </div>
          </form>
          <ToastContainer limit={3} />
        </section>
      </section>
    </>
  )
}

export default NovaPagina
