import { PlannerColumn } from '@ui/planner/plannerColumn';

export default function Planner() {



  return (
    <>
      <section className='flex justify-evenly'>
        <div className='pt-11 flex flex-col justify-center '>
          <h1 className='text-center text-6xl font-Caveat' >Planos para uma semana incrível ! </h1>
        </div>
      </section>
      <section className=' pt-20 grid grid-cols-3  2xl:grid-cols-4 gap-y-24 justify-items-center'>
        <PlannerColumn Title='Segunda' />
        <PlannerColumn Title='Terça' />
        <PlannerColumn Title='Quarta' />
        <PlannerColumn Title='Quinta' />
        <PlannerColumn Title='Sexta' />
        <PlannerColumn Title='Sábado' />
        <PlannerColumn Title='Domingo' />
        <PlannerColumn Title='Extra' />
      </section>
    </>
  )
}
