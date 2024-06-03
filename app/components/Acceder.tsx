import React from 'react'

export const Acceder = () => {
  return (
    <article className=' h-[600px] w-full flex justify-around items-center'>
        <figure className='bg-black w-[400px] h-[400px]'>
            <img src="" alt="Aqui va la imagen" />
        </figure>
        <form className=' text-black flex flex-col gap-y-[10px] w-[400px] text-xl'>
            <h2 className='text-4xl text-center font-semibold'>Acceder</h2>
            <p>Acceder aqui si tienes una cuenta:</p>

            <div className='form-text'>
                <p>Selecciona tu Documento*</p>
                <select className='w-[250px]'>
                    <option value="1"> DNI </option>
                    <option value="2"> CE </option>
                </select>
            </div>
            <div className='form-text'>
                <p>Número de Documento</p>
                <input type="text" />
            </div>
            <div className='form-text'>
                <p>Número de Documento</p>
                <input type="text" />
            </div>
            <a href="#">Olvidaste tu contraseña</a>
            <div className='flex gap-x-[15px] w-full justify-between'>
                <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Inicia Sesión</button>
                <button className='bg-white w-[50%]  hover:text-[#bf0908]'>Registrate</button>
            </div>
        </form>
    </article>
  )
}