'use client'
export const AgendaCard = () => {
  return (
    <article className='w-[500px] h-[170px] rounded-lg flex gap-[20px] flex-col bg-[#e2e2e2] justify-center items-center'>
    <div className='flex gap-[20px] justify-center items-center'>
        <figure className='w-[70px] h-[70px] bg-white'></figure>
        <p className='text-sm'> Doc O Dra: <br /> ALICIA MENDOZA CARRILLO <br /> Paciente <br /> ANGEL BELEN MONTESINOS ANYOSA</p>
    </div>
    <div className='w-[300px] flex justify-center'>
        <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Ver detalle</button>               
    </div>
</article>
  )
}
