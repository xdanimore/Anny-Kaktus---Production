import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-20 flex justify-around items-center bg-flora-base text-flora-white">
      <motion.div
        animate={{
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            duration: 1.25,
          },
        }}
      >
        <Link className="text-3xl font-bold" to={"/"}>
          Anny Kaktus
        </Link>
      </motion.div>

      <ul className="hidden md:flex font-medium">
        <motion.li
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.25,
              duration: 1.5,
            },
          }}
          className="nav-link"
        >
          <Link to={"/"}>Inicio</Link>
        </motion.li>
        <motion.li
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.5,
              duration: 1.5,
            },
          }}
          className="nav-link"
        >
          <Link to={"/productos"}>Productos</Link>
        </motion.li>
        <motion.li
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 0.75,
              duration: 1.5,
            },
          }}
          className="nav-link"
        >
          <Link to={"/contacto"}>Contacto</Link>
        </motion.li>
        <motion.li
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              delay: 1.25,
              duration: 1.5,
            },
          }}
          className="nav-link"
        >
          <Link to={"/carrito"}>Ver carrito</Link>
        </motion.li>
      </ul>

      <motion.div
        className="text-xl md:hidden z-10"
        onClick={handleClick}
        animate={{
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            delay: 0.5,
            duration: 1.25,
          },
        }}
      >
        {isOpen ? (
          <CloseOutlined className="cursor-pointer" />
        ) : (
          <MenuOutlined className="cursor-pointer" />
        )}
      </motion.div>

      <ul
        className={
          !isOpen
            ? "absolute top-[-100%] left-0 w-screen h-[20vh] bg-flora-base flex flex-col justify-center items-center ease-in-out duration-1000"
            : "absolute top-[75px] left-0 w-screen h-[100vh] bg-flora-base shadow-sm flex flex-col justify-center items-center ease-in-out duration-1000"
        }
      >
        <li className="mobile">
          <Link to={"/"} onClick={handleClick}>
            Inicio
          </Link>
        </li>
        <li className="mobile">
          <Link to={"/productos"} onClick={handleClick}>
            Productos
          </Link>
        </li>
        <li className="mobile">
          <Link to={"/contacto"} onClick={handleClick}>
            Contacto
          </Link>
        </li>
        <li className="mobile">
          <Link to={"/carrito"} onClick={handleClick}>
            <ShoppingCartOutlined className="text-2xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
