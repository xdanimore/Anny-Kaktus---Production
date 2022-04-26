import React, { useState } from "react";
import { Link } from "react-router-dom";
import {RiCloseLine, RiMenu3Fill} from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-around items-center px-4 bg-flora-base text-flora-mwhite">
      <Link className="text-2xl font-bold" to={'/'}>Anny Kaktus</Link>

      <div>
        <ul>
          <li><Link to={'/'}>Inicio</Link></li>
          <li><Link to={'/'}>Productos</Link></li>
          <li><Link to={'/'}>Contacto</Link></li>
          <li><Link to={'/'}>Carrito</Link></li>
        </ul>
      </div>

      <div>
        <RiMenu3Fill />
      </div>
    </nav>
  )
};
export default Navbar;
