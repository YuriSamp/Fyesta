import { useAtomValue } from 'jotai'
import { categoryOptions } from 'src/context/goalContext'
import { Goals } from 'src/context/goalContext'
import { BsDot } from 'react-icons/bs'

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

  return (
    <div className='flex flex-col gap-4 items-center max-w-[1000px]'>
      <h2 className='text-3xl'>Metas para {year}</h2>
      <div className='grid grid-cols-3 gap-10'>
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
                nenhuma meta nessa categoria
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
