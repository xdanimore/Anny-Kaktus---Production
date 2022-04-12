import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-green-500 py-5 px-48 flex justify-between items-center'>
        <Link to={'/'} className='text-4xl text-white px-8'>Anny Kaktus</Link>

        <ul className='text-white flex'>
            <li><Link className='px-8'>Inicio</Link></li>
            <li><Link className='px-8'>Productos</Link></li>
            <li><Link className='px-8'>Contacto</Link></li>
            <li><Link className='px-8'>Carrito</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar