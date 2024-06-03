import React from 'react'

export const Header = () => {
  return (
    <header className='w-full h-[100px] bg-[#bf0908] px-[20px] flex gap-[10px] items-center text-white'>
        <img src="" alt="Logo" className='w-[100px]'/>
        <article className='flex h-full items-center gap-[10px]'>
            <div className='text-[30px]'>
                |
            </div>
            <div>
                <h1>Hospital Nacional <br /> Cayetano Heredia</h1>
            </div>
        </article>
    </header>
  )
}
