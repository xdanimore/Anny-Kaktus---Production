import React from 'react'
import Card from './Card'

const Productos = () => {
  return (
    <div className='h-screen'>
        <div className='p-5 max-w-[400px] h-auto mx-auto md:max-w-[720px] lg:max-w-[1366px]               border-2 border-flora-second'>
            <h1 className='text-2xl font-extrabold text-center'>&#127807; PRODUCTOS &#127807;</h1>
            <div>
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Productos