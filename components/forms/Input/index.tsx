

export const InputWithLabel = (props: any) => {
  return (
    <>
      <div className='flex flex-col gap-2 pt-4'>
        <label>Email Address</label>
        <input type='email' placeholder='Email Address' className='py-2 px-2 rounded-lg' value={props} onChange={(e) => props(e.target.value)} />
      </div>
    </>
  )
}

export const Input = (props: any) => {
  return (
    <input type='email' placeholder='Email Address' className='py-2 px-2 rounded-lg' value={props} onChange={(e) => props(e.target.value)} />
  )
}
