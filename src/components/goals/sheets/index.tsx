import { AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { SlArrowDown } from 'react-icons/sl'
import { SheetsProps } from 'src/interfaces/Goals'

export default function Sheets({ Metas, setState }: SheetsProps) {

  return (
    <section className='flex flex-col w-[976px]  self-start'>
      <div className='pb-2 border-b-2 mb-2 flex items-center gap-6 '>
        <h3 className='text-3xl  dark:text-white'>Metas</h3>
        <div className='flex gap-2 text-gray-100 self-end items-center'>
          <p className='text-lg'>Em progresso</p>
          <SlArrowDown />
        </div>
      </div>
      <div className='flex flex-col gap-3 pt-2'>
        <div className='flex '>
          <div className='w-60 text-center'>
            <p className='text-lg'>Objetivo</p>
          </div>
          <div className='w-96 text-center'>
            <p className='text-lg'>Progresso</p>
          </div>
          <div className='w-60 text-center'>
            <p className='text-lg pl-10'>Categoria</p>
          </div>
        </div>
        <section className='flex flex-col gap-3 h-[200px] overflow-y-auto  scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
          {Metas.map(item => (
            <div
              className='w-full flex gap-3'
              key={item.Id}
            >
              <div className='flex gap-2 items-center w-60'>
                <AiOutlineStar className='w-5 h-5' />
                <p className='text-xl'>{item.Meta}</p>
              </div>
              <div className='w-96 flex gap-2 items-center justify-center'>
                {item.Tarefas.map((item, index) => (
                  item.realizada === true ?
                    <RiCheckboxCircleFill className='w-5 h-5  text-violet-900 dark:text-DarkModeGreen' key={index} />
                    :
                    <RiCheckboxBlankCircleLine className='w-5 h-5' key={index} />
                ))
                }
                <p>Ações</p>
                <p> 0 / {item.Tarefas.length} </p>
              </div>
              <div className='w-60 text-center'>
                <p>{item.Categoria}</p>
              </div>
            </div>
          ))}
          <div
            className='flex gap-2 items-center text-gray-400 cursor-pointer w-48'
            onClick={() => setState(true)}
          >
            <AiOutlinePlus className='w-7 h-7' />
            <p className='text-xl'>Nova meta</p>
          </div>
        </section>
      </div>
    </section>
  )
}
