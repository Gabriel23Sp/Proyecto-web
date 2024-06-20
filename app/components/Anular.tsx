import React from 'react'

export const Anular = () => {
  return (
    <div className='flex flex-col border border-black w-[300px] h-[300px] rounded-md justify-center items-center gap-[10px]'>
        <h4 className='text-center'>¡Se ha anulado exitosamente!</h4>
        <figure className='bg-white w-[250px] h-[100px]'></figure>
        <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Volver al inicio</button>
        <button className='bg-white text-black w-[50%] hover:bg-[#bf0908] hover:text-white'>Agendar una nueva Cita</button>
    </div>
  )
}
