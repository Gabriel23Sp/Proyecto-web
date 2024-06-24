'use client'

export const Recuperar2 = () => {
    const cuadros:string[]= [
        '-','-','-','-'
    ]
  return (
    <article className='flex flex-col gap-[10px] w-[350px]'>
        <div>
            <h2 className='text-[23px] font-semibold w-full text-center'>RECUPERAR CONTRASEÑA</h2>
        </div>        
        <div>
            <p>2° Envío de códigos de confirmación:</p>
            <div className='flex flex-col gap-[20px]'>
                <p>*Te hemos enviado un código a tu correo <br /> Por favor ingresalo aquí</p>
                <div className='flex w-full justify-around'>
                    {cuadros.map((item,index)=>(
                        <div key={index} className='text-gray-600 w-[50px] h-[50px] bg-white flex justify-center items-center text-5xl'>{item}</div>
                    ))}
                </div>
                <p className='2xl'> Tiempo restante 2:30</p>
                <div className='flex flex-col gap-[10px]'>
                    <p>¿No te ha llegado el correo?</p>
                    <a href="#">Olvidaste tu contraseña</a>
                </div>
                <div className='flex gap-x-[15px] w-full justify-center'>
                    <button className='bg-[#bf0908] text-white w-[50%] hover:bg-white hover:text-black'>Siguiente</button>
                </div>
            </div>
        </div>
    </article>
  )
}
