'use client'
export const Agenda2 = () => {
  return (
    <div className='flex flex-col w-[380px] p-[15px] h-[450px] justify-center items-center border-[2px] border-black rounded-md gap-[30px]'>
        <p className='text-base'>Agenda Tu cita | Confirma los datos de tu cita</p>
        <section className='flex gap-[20px]'>
            <figure className='w-[70px] h-[70px] bg-white'></figure>
            <p className='text-xs'>Doc O Dra: <br /> ALICIA MENDOZA CARRILLO <br /> Paciente: <br />ANGEL BELEN MONTESINO ANYOSA</p>
        </section>
        <section className='flex flex-col gap-[10px]'>
            <div className='flex gap-[20px]'>
                <figure className='w-[30px] h-[30px] bg-white'></figure>
                <p>Jueves 15 de Junio de 2023</p>
            </div>
            <div className='flex gap-[20px]'>
                <figure className='w-[30px] h-[30px] bg-white'></figure>
                <p>Jueves 15 de Junio de 2023</p>
            </div>
        </section>
        <section className='h-[70px]'>
            <h4>Consultorio N° 305</h4>
            <p className='text-xs'>* Recuerde presentarse al hospital al menos 30 minutos antes de tu cita. De lo contrario su cita será cancelada.</p>
        </section>
        <section className=' flex  justify-between w-full gap-[50px]'>
        <button className='bg-white text-[#bf0908] w-[50%] hover:bg-white hover:text-black'>Cancelar</button>
        <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Confirmar</button>
        </section>
    </div>
  )
}
