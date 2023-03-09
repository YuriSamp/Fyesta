import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


//TODO ta funcionando para um ano só, agora precisa funcionar pro resto
// para ano anterior ou posterior  <h1 className='text-3xl'>Fevereiro INSIRA A DATA</h1>

export default function Calendario() {

  const arr = [1, 2, 3, 4, 5, 6, 7]
  const arrTeste = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const [Quantity, setQuantity] = useState(0);

  const minQuantity = 0;
  const maxQuantity = 11;

  const minusQuantity = (Quantity: number) => {
    if (Quantity > minQuantity) return Quantity - 1;
    return 11;
  };
  const plusQuantity = (Quantity: number) => {
    if (Quantity < maxQuantity) return Quantity + 1;
    return 0;
  };

  return (
    <section className='flex flex-col items-center text-black dark:text-white'>
      <div className='flex gap-6 items-center'>
        <AiOutlineArrowLeft
          className='w-7 h-7 cursor-pointer'
          onClick={() => setQuantity(minusQuantity(Quantity))}
        />
        <h1 className='text-3xl w-32 text-center select-none'>{arrTeste[Quantity]}</h1>
        <AiOutlineArrowRight className='w-7 h-7 cursor-pointer'
          onClick={() => setQuantity(plusQuantity(Quantity))}
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
      <div className='flex' >
        {arr.map(item => (
          <div className='w-52 h-40 border-2 border-[#383838]' key={item}>
            <div className='text-end py-2 pr-4'>
              {item}
            </div>
            <div className='py-1 px-2 flex flex-col gap-1'>
              <div className='w-full py-1 text-center bg-green-700 rounded-md cursor-pointer'>
                Terminar esse projeto
              </div>
              <div className='w-full py-1 text-center bg-DarkModeOrange rounded-md cursor-pointer'>
                Diminuir as tasks
              </div>
              <div className='w-full py-1 text-center bg-yellow-800 rounded-md cursor-pointer'>
                Melhorar o Design
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex' >
        {arr.map(item => (
          <div className='w-52 h-40 border-2 border-[#383838]' key={item}>
            <div className='text-end py-2 pr-4'>
              {item}
            </div>
          </div>
        ))}
      </div>
      <div className='flex' >
        {arr.map(item => (
          <div className='w-52 h-40 border-2 border-[#383838]' key={item}>
            <div className='text-end py-2 pr-4'>
              {item}
            </div>
          </div>
        ))}
      </div>
      <div className='flex' >
        {arr.map(item => (
          <div className='w-52 h-40 border-2 border-[#383838]' key={item}>
            <div className='text-end py-2 pr-4'>
              {item}
            </div>
          </div>
        ))}
      </div>
      <div className='flex' >
        {arr.map(item => (
          <div className='w-52 h-40 border-2 border-[#383838]' key={item}>
            <div className='text-end py-2 pr-4'>
              {item}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
