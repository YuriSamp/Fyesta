import EditableList from '@ui/To-do/editableList';
import { useAtomValue } from 'jotai';
import { Language } from 'src/context/seetingsContext';

export default function Planner() {
  const locale = useAtomValue(Language)

  return (
    <>
      <section className='flex justify-evenly'>
        <div className='pt-11 flex flex-col justify-center '>
          <h1 className='text-center text-5xl lg:text-6xl font-Caveat text-violet-500 dark:text-white' >
            {locale === 'pt-BR' ? 'Planos para uma semana incrível !' : 'Plans for an amazing week !'}
          </h1>
        </div>
      </section>
      <section className=' pt-16 grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-y-16 justify-items-center'>
        <EditableList Title={locale === 'pt-BR' ? 'Domingo' : 'Sunday'} day={0} />
        <EditableList Title={locale === 'pt-BR' ? 'Segunda' : 'Monday'} day={1} />
        <EditableList Title={locale === 'pt-BR' ? 'Terça' : 'Tuesday'} day={2} />
        <EditableList Title={locale === 'pt-BR' ? 'Quarta' : 'Wednesday'} day={3} />
        <EditableList Title={locale === 'pt-BR' ? 'Quinta' : 'Thursday'} day={4} />
        <EditableList Title={locale === 'pt-BR' ? 'Sexta' : 'Friday'} day={5} />
        <EditableList Title={locale === 'pt-BR' ? 'Sabado' : 'Saturday'} day={6} />
        <EditableList Title='Extra' day={7} />
      </section>
    </>
  )
}
