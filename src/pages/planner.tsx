import { PlannerColumn } from '@ui/planner/plannerColumn';

export default function Planner() {

  return (
    <>
      <section className='flex justify-evenly'>
        <div className='pt-11 flex flex-col justify-center '>
          <h1 className='text-center text-5xl lg:text-6xl font-Caveat text-violet-500 dark:text-white' >Planos para uma semana incrível ! </h1>
        </div>
      </section>
      <section className=' pt-20 grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-y-24 justify-items-center'>
        <PlannerColumn Title='Segunda' editable={true} />
        <PlannerColumn Title='Terça' editable={true} />
        <PlannerColumn Title='Quarta' editable={true} />
        <PlannerColumn Title='Quinta' editable={true} />
        <PlannerColumn Title='Sexta' editable={true} />
        <PlannerColumn Title='Sábado' editable={true} />
        <PlannerColumn Title='Domingo' editable={true} />
        <PlannerColumn Title='Extra' editable={true} />
      </section>
    </>
  )
}
