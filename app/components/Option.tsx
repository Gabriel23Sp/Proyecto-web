import React from 'react'

export const Option = () => {
  return (
    <div className='flex flex-col border border-black w-[300px] h-[300px] rounded-md justify-center items-center gap-[10px]'>
        <figure className='bg-white w-[250px] h-[100px]'></figure>
        <h4 className='text-center'>¿Estás seguro de anular tu cita agendada?</h4>
        <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Si</button>
        <button className='bg-white text-black w-[50%] hover:bg-[#bf0908] hover:text-white'>No</button>
    </div>
  )
}
