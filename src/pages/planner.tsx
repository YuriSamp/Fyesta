import PlannerListaInput from '@ui/planner';

export default function Planner() {


  return (
    <>
      <section className='flex justify-evenly'>
        <div className='pt-11 flex flex-col justify-center '>
          <h1 className='text-center text-6xl font-Caveat' >Planos para uma semana incrível ! </h1>
        </div>
      </section>

      <section className=' pt-20 grid grid-cols-3  2xl:grid-cols-4 gap-y-24 justify-items-center'>
        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Segunda</h3>
          </div>
          <PlannerListaInput Quantidade={4} />
        </div>

        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Terça</h3>
          </div>
          <PlannerListaInput Quantidade={2} />
        </div>

        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Quarta</h3>
          </div>
          <PlannerListaInput Quantidade={2} />
        </div>

        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Quinta</h3>
          </div>
          <PlannerListaInput Quantidade={4} />
        </div>

        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Sexta</h3>
          </div>
          <PlannerListaInput Quantidade={3} />
        </div>

        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Sábado</h3>
          </div>
          <PlannerListaInput Quantidade={2} />
        </div>

        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Domingo</h3>
          </div>
          <PlannerListaInput Quantidade={2} />
        </div>

        <div className='flex flex-col gap-3'>
          <div className='pb-3 border-b-2 border-[#383838]'>
            <h3 className='text-2xl text-green-700'>Extra</h3>
          </div>
          <PlannerListaInput Quantidade={1} />
        </div>


      </section>
    </>
  )
}
