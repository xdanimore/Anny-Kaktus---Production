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
      <div className="h-[calc(100vh - 55vh)] flex flex-col items-center justify-center">
        <h1>¡Decoración y detalles para alegrar el alma!</h1>
        <Link to={'/productos'}>Comprar</Link>
      </div>
    </div>
  );
};

export default Landing;
