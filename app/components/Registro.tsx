import React from 'react'

export const Registro = () => {
  return (
    <form className='flex flex-col gap-[10px] w-[800px]'>
        <div>
            <h2 className='text-[23px] font-semibold w-full'>REGISTRO DE PACIENTE</h2>
        </div>
        <form>
            <p>1° Verificar la existencia de paciente registrando: </p>
            <div className='flex justify-between my-[10px]'>
                <section>
                        <p>Tipo de Documento</p>
                        <select className='w-[150px]'>
                            <option value="1"> DNI </option>
                            <option value="2"> CE </option>
                        </select>
                </section>      

                <section>
                        <p>Número de documento</p>
                        <input type="text" />
                </section>

                <section>
                        <p>Fecha de nacimiento</p>
                        <input type="text" />
                </section>

                <div className='w-full'>
                    <button className='bg-[#bf0908] text-white hover:bg-white hover:text-black'>Siguiente</button>
                </div>
            </div>

        </form>

        <form>
            <p>2° Ingresar datos personales </p>
            <div className='flex flex-wrap my-[10px] gap-x-[20px] gap-y-[10px]'>
                <section className='w-[300px]'>
                        <p>Número de Celular</p>
                        <input type="text" className='w-[300px]' />
                </section>      

                <section className='w-[300px]'>
                        <p>Ingrese su Correo</p>
                        <input type="text" className='w-[300px]' />
                </section>

                <section>
                        <p>Departamento</p>
                        <input type="text" />
                </section>

                <section>
                        <p>Provincia</p>
                        <input type="text" />
                </section>

                <section>
                        <p>Distrito</p>
                        <input type="text" />
                </section>

                <section className='w-[70%]'>
                        <p>Dirección</p>
                        <input type="text" className='w-[700px]' />
                </section>
            </div>
        </form>
    </form>
  )
}
