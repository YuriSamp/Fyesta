import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useAtom } from 'jotai';
import { holidayAtom, nationalHolidayAtom, reminderAtom, taskAtom } from 'src/context/calendarContext';

export function CalendarFilters() {
  const [isNationalHolidaysAllowed, setNationalHolidaysAllowed] = useAtom(nationalHolidayAtom)
  const [isHolidaysAllowed, setHolidaysAllowed] = useAtom(holidayAtom)
  const [isReminderAllowed, setReminderAllowed] = useAtom(reminderAtom)
  const [isTaskAllowed, setTaskAllowed] = useAtom(taskAtom)

  return (
    <div className='flex flex-col  pt-3'>
      <h2 className='text-3xl'>Minha Agenda</h2>
      <div className='flex gap-3 items-center z-0 pt-2'>
        <Checkbox.Root
          className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border border-black bg-white drop-shadow-2xl  outline-none focus:border-2 focus:border-violet-600 dark:focus:border-DarkModeGreen dark:focus:bg-DarkModeGreen"
          checked={isNationalHolidaysAllowed}
          id="c1"
          onClick={() => setNationalHolidaysAllowed(prev => !prev)}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              setNationalHolidaysAllowed(prev => !prev)
            }
          }}
        >
          <Checkbox.Indicator className="text-black">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className='text-xl w-52'>Feriados nacionais</p>
      </div>
      <div className='flex gap-3 items-center z-0 pt-2'>
        <Checkbox.Root
          className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border border-black bg-white drop-shadow-2xl  outline-none focus:border-2 focus:border-violet-600 dark:focus:border-DarkModeGreen dark:focus:bg-DarkModeGreen"
          checked={isHolidaysAllowed}
          id="c1"
          onClick={() => setHolidaysAllowed(prev => !prev)}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              setHolidaysAllowed(prev => !prev)
            }
          }}
        >
          <Checkbox.Indicator className="text-black">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className='text-xl w-52'>Datas comemorativas</p>
      </div>
      <div className='flex gap-3 items-center z-0 pt-2'>
        <Checkbox.Root
          className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border border-black bg-white drop-shadow-2xl  outline-none focus:border-2 focus:border-violet-600 dark:focus:border-DarkModeGreen dark:focus:bg-DarkModeGreen"
          checked={isReminderAllowed}
          id="c1"
          onClick={() => setReminderAllowed(prev => !prev)}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              setReminderAllowed(prev => !prev)
            }
          }}
        >
          <Checkbox.Indicator className="text-black">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className='text-xl w-52'>Lembretes</p>
      </div>
      <div className='flex gap-3 items-center z-0 pt-2'>
        <Checkbox.Root
          className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border border-black bg-white drop-shadow-2xl  outline-none focus:border-2 focus:border-violet-600 dark:focus:border-DarkModeGreen dark:focus:bg-DarkModeGreen"
          checked={isTaskAllowed}
          id="c1"
          onClick={() => setTaskAllowed(prev => !prev)}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              setTaskAllowed(prev => !prev)
            }
          }}
        >
          <Checkbox.Indicator className="text-black">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p className='text-xl w-52'>Tarefas</p>
      </div>
    </div>
  )
}
