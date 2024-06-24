'use client'

export const Recuperar = () => {
  return (
    <article className='flex flex-col gap-[10px] w-[350px]'>
        <div>
            <h2 className='text-[23px] font-semibold w-full text-center'>RECUPERAR CONTRASEÑA</h2>
        </div>        
        <div>
            <p>1° Ingrese datos solicitados:</p>
            <form className='flex flex-col gap-[10px]'>           
                <div className='form-text'>
                    <p>Selecciona tu Documento*</p>
                    <select className='w-[250px]'>
                        <option value="1"> DNI </option>
                        <option value="2"> CE </option>
                    </select>
                </div>
                <div className='form-text'>
                    <p>Número de Documento*</p>
                    <input type="text" />
                </div>
                <div className='form-text'>
                    <p>Número de Documento*</p>
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
