import EditableList from '@ui/To-do/editableList';


export default function Planner() {
  return (
    <>
      <section className='flex justify-evenly'>
        <div className='pt-11 flex flex-col justify-center '>
          <h1 className='text-center text-5xl lg:text-6xl font-Caveat text-violet-500 dark:text-white' >Planos para uma semana incrível ! </h1>
        </div>
      </section>
      <section className=' pt-16 grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-y-16 justify-items-center'>
        <EditableList Title='Domingo' day={0} />
        <EditableList Title='Segunda' day={1} />
        <EditableList Title='Terça' day={2} />
        <EditableList Title='Quarta' day={3} />
        <EditableList Title='Quinta' day={4} />
        <EditableList Title='Sexta' day={5} />
        <EditableList Title='Sábado' day={6} />
        <EditableList Title='Extra' day={7} />
      </section>
    </>
  )
}
