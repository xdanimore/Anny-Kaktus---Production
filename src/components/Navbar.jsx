import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-20 flex justify-around items-center bg-flora-base text-flora-white">
      <motion.div animate={{
        y: [-100, 0],
        opacity: [0, 1],
      }}>
        <Link className="text-3xl font-bold" to={"/"}>
          Anny Kaktus
        </Link>
      </motion.div>

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

      <motion.div className="text-xl md:hidden z-10" onClick={handleClick}>
        {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
      </motion.div>

      <ul
        className={
          !isOpen
            ? "absolute top-[-100%] left-0 w-screen h-[50vh] bg-flora-base flex flex-col justify-center items-center rounded-bl-[32px] rounded-br-[40px] ease-in-out duration-500"
            : "absolute top-0 left-0 w-screen h-[50vh] bg-flora-base flex flex-col justify-center items-center rounded-bl-[32px] rounded-br-[40px] ease-in-out duration-500"
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
