import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-20 flex justify-around items-center bg-flora-base text-flora-white">
      <Link className="text-3xl font-bold" to={"/"}>
        Anny Kaktus
      </Link>

      <ul className="hidden md:flex font-medium">
        <li className="nav-link">
          <Link to={"/"}>Inicio</Link>
        </li>
        <li className="nav-link">
          <Link to={"/productos"}>Productos</Link>
        </li>
        <li className="nav-link">
          <Link to={"/contacto"}>Contacto</Link>
        </li>
        <li className="nav-link">
          <Link to={"/carrito"}>Carrito</Link>
        </li>
      </ul>

      <div className="text-xl md:hidden z-10" onClick={handleClick}>
        {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
      </div>

      <ul
        className={
          !isOpen
            ? "hidden"
            : "absolute top-0 left-0 w-[75vw] h-screen bg-flora-base flex flex-col justify-center items-center"
        }
      >
        <li className="mobile">
          <Link to={"/"}>Inicio</Link>
        </li>
        <li className="mobile">
          <Link to={"/productos"}>Productos</Link>
        </li>
        <li className="mobile">
          <Link to={"/contacto"}>Contacto</Link>
        </li>
        <li className="mobile">
          <Link to={"/carrito"}>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
