import React from 'react'
import { BsLayers } from 'react-icons/bs'
import { IoLayersSharp } from 'react-icons/io5'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { GoalProp } from 'src/interfaces/Goals'

export default function Fields({ Metas }: GoalProp) {

  const arr2 = new Array(5).fill('')
  const arr3 = new Array(3).fill('')

  const Category = Metas.map(item => item.Categoria)
  const MetasFinanceiras = Category.filter(item => item === 'Financeiro')
  const MetasPessoais = Category.filter(item => item === 'Pessoal')
  const MetasIntelectuais = Category.filter(item => item === 'Intelectual')

  console.log(Category)
  console.log(MetasFinanceiras)

  return (
    <section className='self-start'>
      <div className='pb-2 border-b-2 mb-2 '>
        <h3 className='text-3xl  dark:text-white '>Áreas</h3>
      </div>
      <div className='flex gap-2'>
        <div className='w-80 flex flex-col border-2 px-4 py-4'>
          <IoLayersSharp className='w-20 h-20 self-center my-5' />

          <div className='flex gap-2 items-center pb-4 text-lg'>
            <BsLayers />
            <p>Intelectual</p>
          </div>

          <p className='pb-2'>Progresso</p>
          <div className='flex gap-2 flex-wrap h-10'>
            {arr2.map((_, index) => (
              <RiCheckboxCircleFill className=' text-violet-900 dark:text-DarkModeGreen ' key={index} />
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
          <div className='flex gap-2 flex-wrap h-10'>
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
          <div className='flex gap-2 flex-wrap h-10'>
            {MetasFinanceiras.map((_, index) => (
              <RiCheckboxBlankCircleLine key={index} />
            ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
