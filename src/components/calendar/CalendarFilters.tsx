import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { SetStateAction, useAtom } from 'jotai';
import { holidayAtom, nationalHolidayAtom, reminderAtom, taskAtom } from 'src/context/calendarContext';
import { SetAtom } from 'src/interfaces/diaryTypes';

interface filter {
  name: string,
  value: boolean,
  setter: SetAtom<[SetStateAction<boolean>], void>
}

export function CalendarFilters() {
  const [isNationalHolidaysAllowed, setNationalHolidaysAllowed] = useAtom(nationalHolidayAtom)
  const [isHolidaysAllowed, setHolidaysAllowed] = useAtom(holidayAtom)
  const [isReminderAllowed, setReminderAllowed] = useAtom(reminderAtom)
  const [isTaskAllowed, setTaskAllowed] = useAtom(taskAtom)

  return (
    <div className='flex flex-col  pt-3'>
      <h2 className='text-3xl'>Minha Agenda</h2>
      <Filter
        name={'Feriados nacionais'}
        setter={setNationalHolidaysAllowed}
        value={isNationalHolidaysAllowed}
      />
      <Filter
        name={'Datas Comemorativas'}
        setter={setHolidaysAllowed}
        value={isHolidaysAllowed}
      />
      <Filter
        name={'Lembretes'}
        setter={setReminderAllowed}
        value={isReminderAllowed}
      />
      <Filter
        name={'Tarefas'}
        setter={setTaskAllowed}
        value={isTaskAllowed}
      />
    </div>
  )
}

const Filter = ({ name, setter, value }: filter) => {
  return (
    <div className='flex gap-3 items-center z-0 pt-2'>
      <Checkbox.Root
        className="flex h-5 w-5 appearance-none items-center justify-center rounded-[4px] border border-black bg-white drop-shadow-2xl  outline-none focus:border-2 focus:border-violet-600 dark:focus:border-DarkModeGreen dark:focus:bg-DarkModeGreen"
        checked={value}
        id="c1"
        onClick={() => setter(prev => !prev)}
        onKeyDown={(e) => e.key == 'Enter' && setter(prev => !prev)}
      >
        <Checkbox.Indicator className="text-black">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p className='text-xl w-52'>{name}</p>
    </div>
  )
}
