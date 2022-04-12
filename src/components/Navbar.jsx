import React from 'react'
import { Link } from 'react-router-dom'
import {MenuAlt3Icon} from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <nav className='bg-green-500 h-20 px-8 flex justify-between items-center lg:px-24'>
        <a className='text-3xl text-white font-bold cursor-pointer lg:text-4xl'>Anny Kaktus</a>

        <ul className='text-white font-medium hidden md:flex'>
            <li><a className='px-8 cursor-pointer'>Inicio</a></li>
            <li><a className='px-8 cursor-pointer'>Productos</a></li>
            <li><a className='px-8 cursor-pointer'>Contacto</a></li>
            <li><a className='px-8 cursor-pointer'>Carrito</a></li>
        </ul>

        <div className='lg:hidden'>
            <MenuAlt3Icon />
        </div>
    </nav>
  )
}

export default Navbar