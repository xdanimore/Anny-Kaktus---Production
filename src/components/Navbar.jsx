import React from 'react'
import { Link } from 'react-router-dom'
import {MenuAlt3Icon} from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <nav className='bg-green-500 h-20 px-8 flex justify-between items-center lg:px-24'>
        <Link to={'/'} className="text-2xl font-extrabold text-white">Anny Kaktus</Link>
    </nav>
  )
}

export default Navbar