import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

// para ano anterior ou posterior  <h1 className='text-3xl'>Fevereiro INSIRA A DATA</h1>

export default function Calendario() {

  const arr = [1, 2, 3, 4, 5, 6, 7]

  return (
    <section className='flex flex-col items-center'>
      <div className='flex gap-6 items-center'>
        <AiOutlineArrowLeft className='w-7 h-7 cursor-pointer' />
        <h1 className='text-3xl'>Janeiro</h1>
        <AiOutlineArrowRight className='w-7 h-7 cursor-pointer' />
      </div>
      <div className='flex pt-2 '>
        <div className='px-4 py-2 w-52 text-center'>
          <h3>Domingo</h3>
        </div>
        <div className='px-4 py-2 w-52 text-center'>
          <h3>Segunda</h3>
        </div>
        <div className='px-4 py-2 w-52 text-center'>
          <h3>Terça</h3>
        </div>
        <div className='px-4 py-2 w-52 text-center'>
          <h3>Quarta</h3>
        </div>
        <div className='px-4 py-2 w-52 text-center'>
          <h3>Quinta</h3>
        </div>
        <div className='px-4 py-2 w-52 text-center'>
          <h3>Sexta</h3>
        </div>
        <div className='px-4 py-2 w-52 text-center'>
          <h3>Sabado</h3>
        </div>
      </div>
      <div className='flex' >
        {arr.map(item => (
          <div className='w-52 h-40 border-2 border-[#383838]' key={item}>
            <div className='text-end py-2 pr-4'>
              {item}
            </div>
            <div className='py-1 px-2 flex flex-col gap-1'>
              <div className='w-full py-1 text-center bg-green-800 rounded-md cursor-pointer'>
                Terminar esse projeto
              </div>
              <div className='w-full py-1 text-center bg-orange-700 rounded-md cursor-pointer'>
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
