import React from "react";
import { Link } from "react-router-dom";

import Planta from "../assets/Planta-Proyecto.png";

const Landing = () => {
  return (
    <div>
      <div className="h-[55vh] md:h-[65vh] bg-flora-base rounded-bl-[40px] rounded-br-[40px] lg:rounded-br-none lg:rounded-bl-none flex flex-col items-center justify-evenly lg:flex-row lg:items-center lg:justify-evenly">
        <img
          src={Planta}
          alt="Planta"
          className="w-[440px] ml-7 md:w-[600px] lg:w-[700px] lg:ml-0"
        />
        <h1 className="font-extrabold text-flora-white text-[27px] md:text-[46px]">
          PLANTAS DECORATIVAS
        </h1>
      </div>
      <div className="h-auto flex flex-col items-center justify-center text-center">
        <div className="py-6 px-8">
          <h1 className="font-bold text-2xl mb-4 md:text-3xl lg:text-4xl">¡Decoración y detalles para alegrar el alma!</h1>
          <Link className="hover:text-flora-second duration-300 transition-all ease-in-out font-medium text-flora-black" to={"/productos"}>Comprar</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
