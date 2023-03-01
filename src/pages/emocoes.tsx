
export default function Emocões() {

  const arr = []

  for (let index = 0; index < 30; index++) {
    arr.push('8h')
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl pb-4'>Mood of January</h1>

      <div className='flex items-center gap-4 pt-6'>
        <h3 className='text-2xl'>Mood</h3>
        <div className='flex gap-2'>
          {arr.map(item => (
            <div className='rounded-full w-10 h-10 bg-yellow-300' key={item}></div>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-4 pt-6'>
        <h3 className='text-2xl'>Mood</h3>
        <div className='flex gap-2'>
          {arr.map(item => (
            <div className='rounded-full w-10 h-10 border-2 border-white flex justify-center items-center' key={item}>
              <p className='text'>{item}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
