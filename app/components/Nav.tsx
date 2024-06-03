import React from 'react'

const options:string[]=[
    'Inicio',
    'Trámites y Servicios',
    'Directorio',
    'Información institucional',
    'Noticias',
    'Contacto',
    'Registra tu cita'
]

export const Nav = () => {
  return (
    <div className=' w-full h-[70px] flex justify-center'>
        <nav className=' w-[95%] h-full bg-white flex justify-around items-center'>
            {options.map((item,index)=>(
                <div key={index} className='text-black font-bold hover:text-[#bf0908] transition-all duration-300 cursor-pointer nav-options'>{item}</div>
            ))}
        </nav>
    </div>
  )
}
