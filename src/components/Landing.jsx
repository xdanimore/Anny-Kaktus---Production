import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Planta from "../assets/Planta-Proyecto.png";

const Landing = () => {
  return (
    <motion.div>
      <div className="h-[55vh] md:h-[65vh] bg-flora-base rounded-bl-[40px] rounded-br-[40px] lg:rounded-b-[64px] flex flex-col items-center justify-evenly lg:flex-row lg:items-center lg:justify-evenly">
        <motion.img
          src={Planta}
          alt="Planta"
          className="w-[440px] ml-7 md:w-[600px] lg:w-[700px] lg:ml-0"
          animate={{
            x: [-100, 0],
            opacity: [0, 1],
            transition: {
              duration: 1.25,
            },
          }}
        />
        <motion.h1
          className="font-extrabold text-flora-white text-[27px] md:text-[46px]"
          animate={{
            x: [100, 0],
            opacity: [0, 1],
            transition: {
              duration: 1.5,
            },
          }}
        >
          PLANTAS DECORATIVAS
        </motion.h1>
      </div>
      <div className="h-auto flex flex-col items-center justify-center text-center">
        <motion.div
          className="py-6 px-8"
          animate={{
            y: [100, 0],
            opacity: [0, 1],
            transition: {
              duration: 1.25,
              delay: 1,
            },
          }}
        >
          <h1 className="font-extrabold text-2xl mb-4 md:text-3xl lg:text-5xl">
            ¡Decoración y detalles para alegrar el alma!
          </h1>
          <Link
            className="hover:text-flora-second duration-300 transition-all ease-in-out font-medium text-flora-black"
            to={"/productos"}
          >
            Comprar
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
