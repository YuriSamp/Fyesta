import { AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import PlannerLista from '@ui/planner/listas';
import Link from 'next/link';

export default function Planner() {


  return (
    <>
      <section className='flex justify-evenly'>
        <div className='pt-11 flex flex-col justify-center '>
          <h1 className='text-center text-6xl font-Caveat' >Planos para um dia incrível ! </h1>
        </div>

        <div className='pt-8 flex flex-col gap-6'>
          <h1 className='text-2xl'>Informações importantes</h1>
          <div className='flex w-full gap-3 items-center'>
            <AiOutlineCalendar className='w-7 h-7' />
            <input placeholder='Informe o dia' type='date' className='bg-transparent w-40 pl-7 border-[1px] border-[#5f5f5f]' />
          </div>
          <div className='flex w-full gap-3 items-center'>
            <AiOutlineHeart className='w-7 h-7' />
            <select className='bg-transparent w-40 h-7 text-center'>
              <option className='bg-InputGray'>Triste</option>
              <option className='bg-InputGray'>Feliz</option>
              <option className='bg-InputGray'>Animado</option>
              <option className='bg-InputGray'>Depressivo</option>
              <option className='bg-InputGray'>Ansioso</option>
            </select>
          </div>
          <Link href='/' className='flex w-full gap-3 items-center'>
            <BsBook className='w-7 h-7' />
            <p>Escreva sobre o seu dia</p>
          </Link>
        </div>
      </section>

      <section className=' pt-20 grid grid-cols-2  2xl:grid-cols-3 justify-items-center'>
        <div className='flex flex-col gap-3'>
          <PlannerLista
            checkbox={true}
            Quantidade={5}
            Title='Manhâ'
          />

          <div className='pt-20 flex flex-col gap-3'>
            <PlannerLista
              checkbox={true}
              Quantidade={5}
              Title='Tarde'
            />
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-3'>
            <PlannerLista
              checkbox={true}
              Quantidade={5}
              Title='Noite'
            />
          </div>

          <div className='pt-[92px] flex flex-col gap-3'>
            <PlannerLista
              checkbox={false}
              Quantidade={5}
              Title='Notas'
            />
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-3 pt-10 2xl:pt-0'>
            <PlannerLista
              checkbox={false}
              Quantidade={5}
              Title='Metas'
            />
          </div>
        </div>
      </section>
    </>
  )
}
