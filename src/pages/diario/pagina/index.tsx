import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'
import { useAtom } from 'jotai'
import { diaryId, diaryPage } from 'src/context/diaryContext'
import FormataData from 'src/utils/FormataData'
import { useRouter } from 'next/router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DiaryDateHelper from 'src/helper/DiaryDate'

// TODO ver a possibildiade de implementar uma toolbar

export default function Pagina() {

  const DateInput = DiaryDateHelper()

  const route = useRouter()
  const [Title, setTitle] = useState('')
  const [Feeling, setFeeling] = useState('Feliz')
  const [Text, setText] = useState('')
  const [DataRaw, setData] = useState(DateInput)
  const [diary, setdiary] = useAtom(diaryPage);
  const [Id, setdiaryId] = useAtom(diaryId);

  function HandleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (Title === '' || DataRaw === '') {
      const notify = () => toast.warn("Por favor insira ao menos o titulo e data");
      notify()
      return
    }

    const Data = FormataData(DataRaw)

    const notes = {
      Title,
      Data,
      Feeling,
      Text,
      Id
    }

    setdiary(prev => [...prev, notes])
    setdiaryId(prev => prev + 1)
    route.push('./')
  }

  return (
    <section className='text-black dark:text-white' >
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
              value={DataRaw}
              onChange={e => setData(e.target.value)}
            />
          </div>
          <div className='flex w-full gap-3 items-center'>
            <AiOutlineHeart className='w-6 h-6' />
            <select
              className='bg-transparent h-7 w-[155px] text-center border-[1px]  border-black dark:border-white rounded-md '
              placeholder='Sentimentos'
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
          className='h-[500px] bg-transparent focus:outline-none p-3 text-lg placeholder:italic resize-none tracking-wide leading-relaxed indent-5'
          placeholder='Comece a escrever sobre o seu dia'
          onChange={e => setText(e.target.value)}
        />
        <div className='flex '>
          <button className='bg-green-700 p-4 rounded-md text-white'>Incluir no diario</button>
        </div>
      </form>
      <ToastContainer limit={3} />
    </section>
  )
}
