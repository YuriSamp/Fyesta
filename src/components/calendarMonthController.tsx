import { Dispatch, SetStateAction } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface Props {
  year: number
  monthIndex: number
  setYear: Dispatch<SetStateAction<number>>
  setMonthIndex: Dispatch<SetStateAction<number>>
}

const CalendarMonthController = ({ year, setYear, setMonthIndex, monthIndex }: Props) => {
  const arrMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  let monthDisplay = arrMeses[monthIndex]

  const minMonthIndex = 0;
  const maxMonthIndex = 11;

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

  return (
    <div className='flex items-center justify-center'>
      <button
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            setMonthIndex(minusMonthIndex(monthIndex))
            monthDisplay = arrMeses[monthIndex]
          }
        }}
        onClick={() => {
          setMonthIndex(minusMonthIndex(monthIndex))
          monthDisplay = arrMeses[monthIndex]
        }}
      >
        <AiOutlineArrowLeft
          className='h-5 w-5 2xl:w-7 2xl:h-7 cursor-pointer'

          title='mês anterior'
        />
      </button>
      <h1 className='text-lg xl:text-2xl 2xl:text-3xl text-center select-none w-40 xl:w-60 2xl:w-72'>{monthDisplay} de {year}</h1>
      <button
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            setMonthIndex(plusMonthIndex(monthIndex))
            monthDisplay = arrMeses[monthIndex]
          }
        }}
        onClick={() => {
          setMonthIndex(plusMonthIndex(monthIndex))
          monthDisplay = arrMeses[monthIndex]
        }}
      >
        <AiOutlineArrowRight className='h-5 w-5 2xl:w-7 2xl:h-7 cursor-pointer'
          title='proximo mês'
        />
      </button>
    </div>
  )
}

export default CalendarMonthController
