import { useAtomValue } from 'jotai'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { BsLayers } from 'react-icons/bs'
import { IoLayersSharp } from 'react-icons/io5'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { categoryOptions } from 'src/context/goalContext'
import { GoalsProps, IField, TaskWithCategory } from 'src/interfaces/goalsTypes'

import 'swiper/css';
import 'swiper/css/pagination';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { Language } from 'src/context/seetingsContext';

export default function Fields({ Metas }: GoalsProps) {

  const categoryOptionsArr = useAtomValue(categoryOptions)

  const arrTratado = Metas.map(item => {
    const newObject = {
      Tarefas: item.Tarefas,
      Categoria: item.Categoria,
      Id: item.Id
    }
    return newObject
  })

  const progressTasks = (item: TaskWithCategory[], categoria: string) => {
    const arrDeCategoriaFiltrado = item.filter(item => item.Categoria === categoria)
    const arrFinal = arrDeCategoriaFiltrado.map(item => {
      const arrVerificado = item.Tarefas.filter(item => item.realizada === false)
      if (arrVerificado.length === 0) {
        return <RiCheckboxCircleFill className='w-5 h-5  text-violet-900 dark:text-DarkModeGreen' key={item.Id} />
      }
      return <RiCheckboxBlankCircleLine className='w-5 h-5' key={item.Id} />
    })
    return arrFinal
  }

  const mdBP = useMediaQuery('(min-width: 640px)')
  const lgBP = useMediaQuery('(min-width: 1300px)')

  const locale = useAtomValue(Language)

  return (
    <section className='self-start w-full lg:w-[600px] xl:w-[800px]  2xl:min-w-[976px]'>
      <div className='pb-2 border-b-2 mb-2 '>
        <h3 className='text-3xl  dark:text-white '>{locale === 'pt-BR' ? 'Áreas' : 'Fields'}</h3>
      </div>
      <Swiper
        modules={[Pagination]}
        className='w-80 sm:w-full lg:w-[600px] xl:w-[800px] 2xl:w-[976px]'
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        spaceBetween={40}
        slidesPerView={mdBP ? lgBP ? 3 : 2 : 1}
        speed={50}
      >
        {categoryOptionsArr.map(item => (
          <SwiperSlide
            key={item.id}
          >
            <Field
              FieldName={item.name}
              Metas={progressTasks(arrTratado, item.name)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function Field({ FieldName, Metas }: IField) {

  const locale = useAtomValue(Language)

  return (
    <div className='w-64 2xl:w-80 flex flex-col border-2 px-4 py-3 shadow-xl dark:bg-neutral-300 text-black'>
      <IoLayersSharp className='w-16 h-16 xl:w-20 xl:h-20 self-center my-5' />
      <div className='flex gap-2 items-center pb-4 text-lg'>
        <BsLayers />
        <p>{FieldName}</p>
      </div>
      <p className='pb-2'>{locale === 'pt-BR' ? 'Progresso' : 'Progress'}</p>
      <div className='flex gap-2 flex-wrap h-10'>
        {Metas}
      </div>
    </div>
  )
}
