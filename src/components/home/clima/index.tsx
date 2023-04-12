import { BsCloudDrizzle, BsCloud, BsCloudLightningRain } from 'react-icons/bs'

export const WheatherHome = () => {
  return (
    <div className='flex flex-col gap-5 p-5 shadow-xl border-2 rounded-lg'>
      <div className='flex justify-evenly items-center'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-2xl '>Rio de Janeiro</span>
          <span className='text-lg'>Clima</span>
        </div>
        <BsCloudDrizzle className='w-10 h-10' />
        <div className='flex flex-col justify-center items-center'>
          <span className='text-2xl'>21 ºC</span>
          <span className='text-lg'>Chuvoso</span>
        </div>
      </div>
      <div className='flex justify-evenly'>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-lg'>Terça</span>
          <BsCloudDrizzle className='w-7 h-7' />
          <div>22 ºC</div>
          <div>17 ºC</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-lg'>Quarta</span>
          <BsCloud className='w-7 h-7' />
          <div>24 ºC</div>
          <div>19 ºC</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-lg'>Quinta</span>
          <BsCloud className='w-7 h-7' />
          <div>25 ºC</div>
          <div>21 ºC</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-lg'>Sexta</span>
          <BsCloudLightningRain className='w-7 h-7' />
          <div>23 ºC</div>
          <div>20 ºC</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <span className='text-lg'>Sábado</span>
          <BsCloudLightningRain className='w-7 h-7' />
          <div>21 ºC</div>
          <div>16 ºC</div>
        </div>
      </div>
    </div>
  )
}
