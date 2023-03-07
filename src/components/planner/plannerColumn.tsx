import PlannerListaInput from '.';

type Title = { Title: string }

export function PlannerColumn({ Title }: Title) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='pb-3 border-b-2 border-[#707070] dark:border-[#383838]'>
        <h3 className='text-2xl text-violet-900 dark:text-green-700 '>{Title}</h3>
      </div>
      <PlannerListaInput />
    </div>
  )
}
