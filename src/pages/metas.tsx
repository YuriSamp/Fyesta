import Sheets from '@ui/goals/sheets'
import YearBox from '@ui/goals/year'
import Fields from '@ui/goals/fields'
import Actions from '@ui/goals/actions'
import { useAtom } from 'jotai'
import { Goals } from 'src/context/Goals/GoalContext'

export default function Metas() {

  const [Metas, setMetas] = useAtom(Goals)

  return (
    <div className='flex flex-col gap-16 text-black dark:text-white'>
      <section className='w-full flex justify-center gap-12 items-center'>
        <YearBox Metas={Metas} />
        <Fields Metas={Metas} />
      </section>
      <section className='w-full flex justify-center gap-12 items-center'>
        <Sheets Metas={Metas} setMetas={setMetas} />
        <Actions Metas={Metas} />
      </section>
    </div>
  )
}
