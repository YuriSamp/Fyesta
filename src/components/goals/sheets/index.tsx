import { Dispatch, SetStateAction, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash, BsPencil } from 'react-icons/bs'
import * as Progress from '@radix-ui/react-progress';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Goal, SheetsProps, Task } from 'src/interfaces/goalsTypes';
import { AiOutlineCheck } from 'react-icons/ai'
import { useAtomValue } from 'jotai';
import { categoryOptions, categoryType } from 'src/context/goalContext';

interface ISheetsFilter {
  onChangeProgress: Dispatch<SetStateAction<progressFilter>>
  onChangeCategory: Dispatch<SetStateAction<string>>
  progressOptions: readonly progressFilter[]
  categoryOptions: categoryType[]
  progress: string
  category: string
}

const progressOptions = ['Todas', 'Concluidas', 'Em progresso', 'Não iniciadas'] as const
type progressFilter = typeof progressOptions[number]

export default function Sheets({ Metas, setState, setMetas, setGoalId }: SheetsProps) {

  const categoryOptionsState = useAtomValue(categoryOptions)

  const [progess, setProgress] = useState<progressFilter>('Todas')
  const [category, setCategory] = useState('Todas')

  const ordenaPlanilha = (Metas: Goal[], progressFilter: progressFilter, categoryFilter: string) => {
    return Metas.filter(meta => {
      return (categoryFilter === "Todas" || meta.Categoria === categoryFilter) &&
        (progressFilter === "Todas" ||
          (progressFilter === "Concluidas" && meta.Tarefas.every(task => task.realizada)) ||
          (progressFilter === "Não iniciadas" && meta.Tarefas.every(task => !task.realizada)) ||
          (progressFilter === "Em progresso" && meta.Tarefas.some(task => !task.realizada) && meta.Tarefas.some(task => task.realizada)));
    });
  }

  const removeTask = (id: number) => {
    const newLista = Metas.filter(item => item.Id !== id)
    setMetas(newLista)
  }

  const progressBarfunc = (tarefas: Task[]) => {
    const TarefasFeitas = tarefas.filter(task => task.realizada === false)
    return tarefas.length - TarefasFeitas.length
  }

  return (
    <section className='flex flex-col w-[976px]  self-start'>
      <div className='pb-2 border-b-2 mb-2 flex items-center justify-between '>
        <h3 className='text-3xl  dark:text-white'>Metas</h3>
        <SheetsFilter
          onChangeCategory={setCategory}
          onChangeProgress={setProgress}
          category={category}
          progress={progess}
          categoryOptions={categoryOptionsState}
          progressOptions={progressOptions}
        />
      </div>
      <div className='flex flex-col gap-3 pt-2'>
        <div className='flex '>
          <div className='w-60 text-center'>
            <p className='text-lg'>Objetivo</p>
          </div>
          <div className='w-96 text-center'>
            <p className='text-lg'>Progresso</p>
          </div>
          <div className='w-60 text-center'>
            <p className='text-lg pl-10 '>Categoria</p>
          </div>
        </div>
        <section className='flex flex-col gap-3 h-[200px] overflow-y-auto  scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
          {ordenaPlanilha(Metas, progess, category)?.map(item => (
            <div
              className='w-full flex gap-3'
              key={item.Id}
            >
              <div className='flex gap-2 items-center w-60'>
                <p className='text-xl'>{item.Meta}</p>
              </div>
              <div className='w-96 flex gap-2 items-center justify-center'>
                <Progress.Root
                  className="relative overflow-hidden bg-white border-[1px] border-black rounded-full w-52 h-[25px]"
                  style={{
                    transform: 'translateZ(0)',
                  }}
                  value={item.Tarefas.length}
                >
                  <Progress.Indicator
                    className="bg-violet-900 dark:bg-green-700 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                    style={{ transform: `translateX(-${100 - (progressBarfunc(item.Tarefas) * (100 / item.Tarefas.length))}%)` }}
                  />
                </Progress.Root>
              </div>
              <div className='w-60 text-center'>
                <p>{item.Categoria}</p>
              </div>
              <div className='flex gap-5 items-center'>
                <BsPencil className='w-4 h-4 cursor-pointer'
                  onClick={() => {
                    setGoalId(item.Id)
                    setState(true)
                  }}
                />
                <BsTrash className='w-4 h-4 cursor-pointer'
                  onClick={() => removeTask(item.Id)}
                />
              </div>
            </div>
          ))}
          <button
            className='flex gap-2 items-center text-gray-400 cursor-pointer w-48'
            onClick={() => setState(true)}
          >
            <AiOutlinePlus className='w-7 h-7' />
            <p className='text-xl'>Nova meta</p>
          </button>
        </section>
      </div>
    </section>
  )
}

const SheetsFilter = ({ onChangeCategory, onChangeProgress, progress, category, categoryOptions, progressOptions }: ISheetsFilter) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu.Root
      open={isOpen}
    >
      <DropdownMenu.Trigger asChild>
        <button
          className='bg-transparent w-28 h-9 text-center border-[1px] rounded-md border-[#2A292B] '
          onClick={() => setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              setIsOpen(true)
            }
          }}
          aria-label="Filter options"
        >
          Filtrar
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className=" absolute  left-[-100px] min-w-[220px] bg-white dark:bg-[#151515] text-black dark:text-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
          onPointerDownOutside={() => setIsOpen(false)}
          onEscapeKeyDown={() => setIsOpen(false)}
        >
          <DropdownMenu.Item className=" text-base flex items-center px-6 outline-none select-none mb-1 ">
            <p>Progresso</p>
          </DropdownMenu.Item>
          <DropdownMenu.Group>
            {progressOptions.map((item, index) => (
              <DropdownMenu.Item
                className="text-sm  rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-violet-900 dark:hover:bg-gray-800 hover:text-white justify-between"
                key={index}
                role='button'
                onClick={() => onChangeProgress(item)}
              >
                {item}
                {item === progress && <AiOutlineCheck />}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Group>

          <DropdownMenu.Separator className="h-[1px] m-1 bg-gray-800" />

          <DropdownMenu.Item className=" text-base flex items-center px-6 outline-none select-none mb-1 ">
            <p>Categorias</p>
          </DropdownMenu.Item>
          <DropdownMenu.Group className='max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-slate-400'>
            <DropdownMenu.Item
              className="text-sm  rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-violet-900 dark:hover:bg-gray-800 hover:text-white justify-between"
              role='button'
              onClick={() => onChangeCategory('Todas')}
            >
              Todas
              {'Todas' === category && <AiOutlineCheck />}
            </DropdownMenu.Item>
            {categoryOptions.map(item => (
              <DropdownMenu.Item
                className="text-sm rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-violet-900   dark:hover:bg-gray-800 hover:text-white justify-between"
                key={item.id}
                role='button'
                onClick={() => onChangeCategory(item.name)}
              >
                {item.name}
                {item.name === category && <AiOutlineCheck />}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Group>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
