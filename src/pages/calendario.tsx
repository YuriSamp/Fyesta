import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

//TODO ta funcionando para um ano só, agora precisa funcionar pro resto
// TODO usar o nth-child pra fazer o css

export default function Calendario() {
  const arrMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const date = new Date()
  const month = date.getMonth()
  const [Quantity, setQuantity] = useState(month);
  const [year, setYear] = useState(date.getFullYear())
  let monthDisplay = arrMeses[Quantity]

  const minQuantity = 0;
  const maxQuantity = 11;

  const daysDisplay = () => {
    const date = new Date()
    date.setDate(1);
    const arr: number[] = []
    const prevLastDay = new Date(year, Quantity, 0).getDate();
    const lastDayIndex = new Date(year, Quantity + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const firstDayIndex = new Date(year, Quantity, 0).getDay()
    const lastDay = new Date(year, Quantity + 1, 0).getDate();

    if (firstDayIndex !== 6) {
      for (let i = firstDayIndex + 1; i > 0; i--) {
        arr.push(prevLastDay - i + 1)
      }
    }

    if (year % 2 === 0) {

    }
    for (let i = 1; i <= lastDay; i++) {
      arr.push(i)
    }

    for (let i = 1; i <= nextDays; i++) {
      arr.push(i)
    }

    return arr
  }

  const minusQuantity = (Quantity: number) => {
    if (Quantity > minQuantity) return Quantity - 1;
    setYear(year => year - 1)
    return 11;
  };
  const plusQuantity = (Quantity: number) => {
    if (Quantity < maxQuantity) return Quantity + 1;
    setYear(year => year + 1)
    return 0;
  };

  const [days, setDays] = useState<number[]>(daysDisplay())

  useEffect(() => {
    setDays(daysDisplay)
  }, [Quantity])


  console.log(days.length)

  return (
    <section className='flex flex-col items-center text-black dark:text-white'>
      <div className='flex gap-6 items-center'>
        <AiOutlineArrowLeft
          className='w-7 h-7 cursor-pointer'
          onClick={() => {
            setQuantity(minusQuantity(Quantity))
            monthDisplay = arrMeses[Quantity]
          }
          }
        />
        <h1 className='text-3xl text-center select-none w-72'>{monthDisplay} de {year}</h1>
        <AiOutlineArrowRight className='w-7 h-7 cursor-pointer'
          onClick={() => {
            setQuantity(plusQuantity(Quantity))
            monthDisplay = arrMeses[Quantity]
          }}
        />
      </div>
      <div className='flex pt-2 '>
        {daysOfWeek.map(item => (
          <div
            className='px-4 py-2 w-52 text-center'
            key={item}
          >
            <h3 className='select-none'>{item}</h3>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap max-w-[1460px] justify-center' >
        {days.length > 35 ?
          days.map((item, index) => (
            <div className='w-52 h-32 calendar' key={index}>
              <div className='text-center py-2 pr-4 select-none'>
                {item}
              </div>
            </div>
          ))
          :
          days.map((item, index) => (
            <div className='w-52 h-40 calendar' key={index}>
              <div className='text-center py-2 pr-4 select-none'>
                {item}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
