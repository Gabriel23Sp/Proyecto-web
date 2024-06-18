import React from 'react'

export const Agenda = () => {
    const Calendario = Array(43).fill('')
    const Horas = Array(5).fill('')
    return (
    <div className='flex flex-col gap-[10px] w-[850px] p-[10px]'>
        <h3 className='text-3xl font-semibold'>AGENDA TU CITA</h3>
        <form className='text-xl flex flex-col gap-[20px]'>
            <section className='flex gap-[100px]'>
                <div>
                    <p>Especialidad</p>
                    <select className='W-[250px]'>
                        <option value="1">NEUROLOGIA</option>
                        <option value="2">GENERAL</option>
                        <option value="3">MATERNIDAD</option>
                    </select>   
                </div>
                <div>
                    <p>Médicos</p>
                    <select className='W-[250px]'>
                        <option value="1">ALICIA MENDOZA CARRILLO</option>
                        <option value="2">AUGUSTO FERNANDO ENCALADA</option>
                        <option value="3">JULIAN SIFUENTES BERNUY</option>
                    </select>   
                </div>
            </section>
            <section className='bg-white w-full h-[300px] rounded-md flex justify-center items-center gap-[20px]'>
                <div className='w-[400px] flex flex-col justify-center items-center'>
                    <h4>¿Cuando deseas Atenderte?</h4>
                    <div className='container-calendario'>
                    {Calendario.map((index)=>(
                           <div className='calendario border-[1px] border-[#bf0908]'>

                           </div> 
                    ))}
                    </div>
                </div>
                <div className='w-[3px] h-[250px] bg-cyan-400'>
                </div>
                <div className='w-[400px] flex flex-col justify-around items-center'>
                    <section className='w-full h-[100px]'>
                        <h4>¿A que hora deseas atenderte?</h4> 
                        <div className='flex gap-x-[100px] gap-y-[20px] flex-wrap justify-center'>
                        {Horas.map(()=>(
                            <div className='bg-[#464c58] w-[60px] h-[25px]'></div>
                        ))}
                        </div>
                    </section>
                    <section className='w-[90%] h-[100px] flex justify-end items-end'>
                         <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Siguiente</button>
                    </section>
                </div>
            </section>
        </form>
    </div>
  )
}
