import { useAtomValue } from 'jotai'
import { Goals } from 'src/context/goalContext'

//TODO fazer um placeholder quando n tiver metas

export const GoalHome = () => {

  const metas = useAtomValue(Goals)

  return (
    <div className='w-80 flex flex-col items-center  shadow-xl border-2 rounded-lg'>
      <h2 className='py-4 text-2xl'>Metas para realizar</h2>
      <div className='px-4 self-start'>
        {metas.length > 0 ?
          metas.map(item => (
            <p key={item.Id}>{item.Meta}</p>
          ))
          :
          ''
        }
      </div>
    </div>
  )
}
