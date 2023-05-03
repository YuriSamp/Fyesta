import { useAtomValue } from 'jotai';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Language } from 'src/context/seetingsContext';
import { monthControllerProps } from 'src/interfaces/controllerTypes';

import { arrMeses } from 'src/shared/months';

const minMonthIndex = 0;
const maxMonthIndex = 11;

export function MonthController({ year, setYear, setMonthIndex, monthIndex }: monthControllerProps) {
  const locale = useAtomValue(Language)
  let monthDisplay = arrMeses[monthIndex]

  const minusMonthIndex = (MonthIndex: number) => {
    if (MonthIndex > minMonthIndex) return MonthIndex - 1;
    setYear(year => year - 1)
    return 11;
  };

  const plusMonthIndex = (MonthIndex: number) => {
    if (MonthIndex < maxMonthIndex) return MonthIndex + 1;
    setYear(year => year + 1)
    return 0;
  };

  const setter = (operation: 'plus' | 'minus') => {
    if (operation === 'minus') {
      setMonthIndex(minusMonthIndex(monthIndex))
      monthDisplay = arrMeses[monthIndex]
      return
    }
    setMonthIndex(plusMonthIndex(monthIndex))
    monthDisplay = arrMeses[monthIndex]
  }

  return (
    <div className='flex items-center justify-center'>
      <button
        onKeyDown={(e) => e.key == 'Enter' && setter('minus')}
        onClick={() => setter('minus')}
      >
        <AiOutlineArrowLeft
          className='h-5 w-5 2xl:w-7 2xl:h-7 cursor-pointer'
          title='mês anterior'
        />
      </button>
      <h1 className='text-3xl text-center select-none w-72'>{monthDisplay} {year}</h1>
      <button
        onKeyDown={(e) => e.key == 'Enter' && setter('plus')}
        onClick={() => setter('plus')}
      >
        <AiOutlineArrowRight className='h-5 w-5 2xl:w-7 2xl:h-7 cursor-pointer'
          title='proximo mês'
        />
      </button>
    </div>
  )
}
