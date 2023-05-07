import { useAtomValue } from 'jotai'
import { categoryOptions } from 'src/context/goalContext'
import { Goals } from 'src/context/goalContext'
import { BsDot } from 'react-icons/bs'
import { Language } from 'src/context/seetingsContext'

export const HomeGoalTracker = () => {

  const metas = useAtomValue(Goals)
  const categoryOptionsState = useAtomValue(categoryOptions)
  const year = new Date().getFullYear()


  const filtraMetas = () => {
    const arrFiltrado = categoryOptionsState.map(category => {
      const metasArr = metas.filter(meta => meta.Categoria === category.name)
      const newArr = {
        categoryName: category.name,
        goals: metasArr
      }
      return newArr
    }
    )
    return arrFiltrado
  }

  const locale = useAtomValue(Language)


  return (
    <div className='flex flex-col gap-4 items-center max-w-[1000px]'>
      <h2 className='text-3xl'> {locale === 'pt-BR' ? 'Metas para' : 'Goals for'} {year}</h2>
      <div className='grid  md:grid-cols-2 xl:grid-cols-3 gap-10'>
        {filtraMetas().map((item, i) => (
          <div className='w-80 flex flex-col p-5 shadow-xl border-2 rounded-lg ' key={i}>
            <h3 className='pb-1'>{item.categoryName}</h3>
            {item.goals.length > 0 ?
              <ol>
                {item.goals.map(goal => (
                  <li key={goal.Id} className='flex items-center gap-2'>
                    <BsDot />
                    <span>{goal.Meta}</span>
                  </li>
                ))}
              </ol>
              :
              <div>
                {locale === 'pt-BR' ? 'nenhuma meta nessa categoria' : 'no goals in this category'}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
