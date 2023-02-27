import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { IoLayersSharp } from 'react-icons/io5'
import { BsLayers } from 'react-icons/bs'
import { SlArrowDown } from 'react-icons/sl'
import Sheets from '@ui/goals/sheets'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Metas() {

  const arr = new Array(5).fill('')
  const arr2 = new Array(5).fill('')
  const arr3 = new Array(3).fill('')
  const arr4 = new Array(2).fill('')

  return (
    <div className='flex flex-col gap-20'>
      <section className='w-full flex justify-center gap-12 items-center'>
        <section className='w-80'>
          <div className='pb-2 border-b-2 mb-2 '>
            <h3 className='text-3xl '>Ano</h3>
          </div>
          <div className=' flex flex-col border-2 px-4 py-4 '>

            <div className='py-10 text-center '>
              <h4 className='text-3xl'>2022</h4>
            </div>

            <div className='pb-2'>
              Progresoo :
            </div>
            <div className='flex gap-2'>
              {arr.map((_, index) => (
                <RiCheckboxCircleFill className='text-DarkModeGreen' key={index} />
              ))
              }
              {arr.map((_, index) => (
                <RiCheckboxBlankCircleLine key={index} />
              ))
              }
            </div>
            <div className='pt-4 pb-2'>
              <p>Planejadas</p>
            </div>
            <div className=''>
              <p>8 metas</p>
            </div>
            <div className='pt-4 pb-2'>
              <p>Realizadas</p>
            </div>
            <div className=''>
              <p>4 metas</p>
            </div>

          </div>

        </section>

        <section className='self-start'>
          <div className='pb-2 border-b-2 mb-2 '>
            <h3 className='text-3xl '>Áreas</h3>
          </div>
          <div className='flex gap-2'>
            <div className='w-80 flex flex-col border-2 px-4 py-4'>
              <IoLayersSharp className='w-20 h-20 self-center my-5' />

              <div className='flex gap-2 items-center pb-4 text-lg'>
                <BsLayers />
                <p>Intelectual</p>
              </div>

              <p className='pb-2'>Progresso</p>
              <div className='flex gap-2'>
                {arr2.map((_, index) => (
                  <RiCheckboxCircleFill className='text-DarkModeGreen ' key={index} />
                ))
                }
              </div>
            </div>

            <div className='w-80 flex flex-col border-2 px-4 py-4'>
              <IoLayersSharp className='w-20 h-20 self-center my-5' />
              <div className='flex gap-2 items-center pb-4 text-lg'>
                <BsLayers />
                <p>Pessoal</p>
              </div>
              <p className='pb-2'>Progresso</p>
              <div className='flex gap-2'>
                {arr3.map((_, index) => (
                  <RiCheckboxBlankCircleLine key={index} />
                ))
                }
              </div>
            </div>

            <div className='w-80 flex flex-col border-2 px-4 py-4'>
              <IoLayersSharp className='w-20 h-20 self-center my-5' />

              <div className='flex gap-2 items-center pb-4 text-lg'>
                <BsLayers />
                <p>Financeiro</p>
              </div>

              <p className='pb-2'>Progresso</p>
              <div className='flex gap-2'>
                {arr4.map((_, index) => (
                  <RiCheckboxBlankCircleLine key={index} />
                ))
                }
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className='w-full flex justify-center gap-12 items-center'>
        <Sheets />
        <section className='w-80 self-start'>
          <div className='pb-2 border-b-2 mb-2 flex items-center gap-6 '>
            <h3 className='text-3xl '>Ações</h3>
            <div className='flex gap-2 text-gray-100 self-end items-center'>
              <p className='text-lg'>Feitas</p>
              <SlArrowDown />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 pt-2'>
              <RiCheckboxCircleFill className='w-7 h-7  text-DarkModeGreen' />
              <p className='text-xl'>Teste</p>
            </div>
            <div className='flex gap-2 pt-2'>
              <RiCheckboxCircleFill className='w-7 h-7  text-DarkModeGreen' />
              <p className='text-xl'>Teste</p>
            </div>
            <div className='flex gap-2 pt-2'>
              <RiCheckboxCircleFill className='w-7 h-7  text-DarkModeGreen' />
              <p className='text-xl'>Teste</p>
            </div>
            <div className='flex gap-2 pt-2'>
              <RiCheckboxBlankCircleLine className='w-7 h-7  ' />
              <p className='text-xl'>Teste</p>
            </div>
            <div className='flex gap-2 items-center text-gray-400 cursor-pointer w-60'>
              <AiOutlinePlus className='w-7 h-7' />
              <p className='text-xl'>Nova ação</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
