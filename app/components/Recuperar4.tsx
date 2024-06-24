'use client'

export const Recuperar4 = () => {
  return (
    <article className='flex flex-col gap-[10px] w-[350px]'>
        <div>
            <h2 className='text-[23px] font-semibold w-full text-center'>RECUPERAR CONTRASEÑA</h2>
        </div>
        <div className='w-full h-[120px] flex gap-[20px] justify-center items-center'>
            <figure className='w-[120px] h-[120px] bg-white'>

            </figure>
            <p>
                ¡Muchas Gracias! <br />
                Su registro se ha <br />
                completado con <br />
                éxito
            </p>
            
        </div>
        <div className='flex gap-x-[15px] w-full justify-center'>
            <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Siguiente</button>
        </div>
    </article>
  )
}
