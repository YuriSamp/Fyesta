import { useAtomValue } from 'jotai'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'
import { Language } from 'src/context/seetingsContext'
import { GoalsProps, Task } from 'src/interfaces/goalsTypes'

export default function YearBox({ Metas }: GoalsProps) {

  const year = new Date().getFullYear()

  const metasPlanejadas = Metas.map(item => item.Tarefas.length)

  const verificaTarefas = (item: Task[], id: number) => {
    const arrVerificado = item.filter(item => item.realizada === false)
    if (arrVerificado.length === 0) {
      return <RiCheckboxCircleFill className='w-5 h-5  text-violet-900 dark:text-DarkModeGreen' key={id} />
    }
    return <RiCheckboxBlankCircleLine className='w-5 h-5' key={id} />
  }

  const metasRealizadas = () => {
    const ArrDeMetas = Metas.map(item => item.Tarefas.map(item => item.realizada))
    const ArrDeBoolean = ArrDeMetas.map(item => item.every(item => item === true))
    const TaksDoneArr = ArrDeBoolean.filter(item => item === true)
    return TaksDoneArr.length
  }


  const locale = useAtomValue(Language)

  return (
    <section className='w-80'>
      <div className='pb-2 border-b-2 mb-2 '>
        <h3 className='text-3xl dark:text-white '> {locale === 'pt-BR' ? 'Ano' : 'Year'}</h3>
      </div>
      <div className=' flex flex-col border-2 px-4 py-3 shadow-xl dark:bg-neutral-300 text-black rounded'>
        <div className='py-10 text-center '>
          <h4 className='text-3xl'>{year}</h4>
        </div>

        <div className='pb-2'>
          {locale === 'pt-BR' ? 'Progresso : ' : 'Progress : '}
        </div>
        <div className='flex gap-2 flex-wrap h-10'>
          {Metas.map((item) => (
            verificaTarefas(item.Tarefas, item.Id)
          ))}
        </div>
        <div className='pt-4 pb-2'>
          <p>{locale === 'pt-BR' ? 'Planejados' : 'Planned'}</p>
        </div>
        <div className=''>
          <p>{metasPlanejadas.length} metas</p>
        </div>
        <div className='pt-4 pb-2'>
          <p>{locale === 'pt-BR' ? 'Realizadas' : 'Done'}</p>
        </div>
        <div className=''>
          <p>{metasRealizadas()} metas</p>
        </div>
      </div>
    </section>
  )
}
