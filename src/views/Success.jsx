import React from 'react'

import { CheckCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='h-[calc(100vh-80px)] bg-neutral-100 flex flex-col items-center justify-center'>
        <CheckCircleOutlined className='text-7xl pb-10 text-flora-base md:text-8xl' />
        <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>¡Pago realizado con éxito!</h1>
        <Link to='/productos' className='mt-4 transition-all duration-300 ease-in hover:text-flora-base'>Volver a productos</Link>
    </div>
  )
}

export default Success