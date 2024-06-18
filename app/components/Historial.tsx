import React from 'react'
import { AgendaCard } from './AgendaCard'

const PESTAÑAS:string[]=[
    'Inicio',
    'Trámites y Servicios',
    'Directorio',
]
 const AGENDAS = Array(3).fill(null)
export const Historial = () => {
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
        <section className='w-full bg-white h-[400px] p-[20px]'>
                <h4 className='text-3xl font-semibold'>Historial de citas</h4>
                <div className='w-full flex justify-center gap-[100px]'>
                        <section className='flex flex-col justify-center items-center'>
                            <h5 className='text-black font-medium text-2xl'>Agendas</h5>
                            <div className='w-[400px] h-[5px] bg-black'></div>
                        </section>

                        <section className='flex flex-col justify-center items-center'>
                            <h5 className='text-black font-medium text-2xl'>Agendas</h5>
                            <div className='w-[400px] h-[5px] bg-black'></div>
                        </section>
                </div>
                <div className='p-[20px] w-full flex justify-around flex-wrap h-[250px] items-center'>
                    {AGENDAS.map(()=>(
                        <AgendaCard/>
                    ))}
                </div>
        </section>

    </main>
  )
}
