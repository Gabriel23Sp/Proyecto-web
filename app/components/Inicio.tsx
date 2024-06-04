import React from 'react'

const PESTAÑAS:string[]=[
    'Inicio',
    'Trámites y Servicios',
    'Directorio',

]
export const Inicio = () => {
  return (
    <main className='w-full flex flex-col'>
        <header className='w-[80%] flex items-center h-[150px] m-auto gap-[50px]'>
            <figure className='w-[300px] h-[120px] bg-black rounded-2xl'>

            </figure>
            <nav className='flex gap-x-[100px]'>
                {PESTAÑAS.map((item,index)=>(
                    <div key={index} className='font-semibold text-2xl'>{item}</div>
                ))}
            </nav>
        </header>
        <section className='w-full bg-white h-[400px]'>
                <div className='w-[80%] flex items-center m-auto gap-x-[100px] h-full'>
                    <h2 className='text-5xl font-semibold'>¡Bienvenid@! <br /> Angel Montesinos</h2>
                    <button className='border-[1px] border-black h-[350px] w-[500px] flex justify-center items-center flex-col gap-y-[50px]'>
                        <figure className='w-[150px] h-[100px] bg-black'></figure>
                        <p>AGENDA TU CITA</p>
                    </button>
                    <button className='border-[1px] border-black h-[350px] w-[500px] flex justify-center items-center flex-col gap-y-[50px]'>
                        <figure className='w-[150px] h-[100px] bg-black'></figure>
                        <p>HISTORIAL DE CITAS</p>
                    </button>
                </div>
        </section>
        <section className='w-[80%] h-[150px] flex flex-col justify-center items-end m-auto'>
                <button className='bg-[#bf0908] text-white hover:bg-white hover:text-black text-2xl'>Cerrar Sesión</button>

        </section>
    </main>
  )
}
