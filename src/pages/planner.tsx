import EditableList from '@ui/To-do/editableList';
import { useAtomValue } from 'jotai';
import { Language } from 'src/context/seetingsContext';

export default function Planner() {
  const locale = useAtomValue(Language)

  const days = {
    "pt-BR": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", 'Sábado'],
    "en-US": ["Sunday", "Monday", 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };



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
        {days[locale].map((day, index) => (
          <EditableList Title={day} day={index} key={index} />
        ))}
        <EditableList Title='Extra' day={7} />
      </section>
    </>
  )
}
