import React from 'react'

export const Registro = () => {
  return (
    <form className='flex flex-col gap-[10px] w-[850px] p-[10px]'>
        <div>
            <h2 className='text-[23px] font-semibold w-full'>REGISTRO DE PACIENTE</h2>
        </div>
        <form>
            <p>1° Verificar la existencia de paciente registrando: </p>
            <div className='grid-form-4'>
                <section>
                        <p>Tipo de Documento</p>
                        <select className='w-[200px]'>
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
                    <button className='bg-[#bf0908] text-white hover:bg-white hover:text-black'>Verificar</button>
                </div>
            </div>

        </form>

        <form>
            <p>2° Ingresar datos personales </p>
            <div className='flex flex-col w-full gap-y-[10px]'>
                <div className='grid-form-datos'>
                        <section className=''>
                                <p>Número de Celular</p>
                                <input type="text" className='w-[80%]' />
                        </section>      

                        <section className=''>
                                <p>Ingrese su Correo</p>
                                <input type="text" className='w-[80%]' />
                        </section>
                </div>

                <div className='grid-form-4'>
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
                </div>

                <div className='grid-form-2'>
                        <section className=''>
                                <p>Dirección</p>
                                <input type="text" className='w-full'/>
                        </section>
                        <section className=''>
                        <button className='bg-[#bf0908] text-white hover:bg-white hover:text-black'>Verificar</button>
                        </section>
                </div>
            </div>
        </form>
        <form>
                <p>3° Ingresar contraseña y registrar:</p>
                <div className='flex flex-col w-full gap-y-[10px]'>
                        <div className='grid-form-datos'>
                                <section>
                                        <p>Ingresa tu contraseña*</p>
                                        <input type="text" className='w-[80%]'/>
                                </section> 
                                <section>
                                        <p>Ingresa tu contraseña nuevamente*</p>
                                        <input type="text" className='w-[80%]'/>
                                </section> 
                        </div>
                        <div className='grid-form-2'>
                        <section>
                                <input type="checkbox" />
                                <small>He leído <a href="#">Términos y condiciones</a></small>
                        </section>
                        <section className='w-full'>
                                <button className='bg-[#bf0908] text-white hover:bg-white hover:text-black'>Verificar</button>
                        </section>
                </div>
                </div>

        </form>
    </form>
  )
}
