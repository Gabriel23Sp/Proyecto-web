import React from 'react'

export const Recuperar3 = () => {
  return (
    <article className='flex flex-col gap-[10px] w-[350px]'>
        <div>
            <h2 className='text-[23px] font-semibold w-full text-center'>RECUPERAR CONTRASEÑA</h2>
        </div>        
        <div>
            <p>3° Ingresa tu contraseña:</p>
            <form className='flex flex-col gap-[10px]'>           
                <div className='form-text'>
                    <p>Ingrese su contraseña*</p>
                    <input type="text" />
                </div>
                <div className='form-text'>
                    <p>Ingrese su contraseña nuevamente*</p>
                    <input type="text" />
                </div>
                <div className='flex gap-x-[15px] w-full justify-center'>
                    <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Siguiente</button>
                </div>
            </form>
        </div>
    </article>
  )
}
