import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {

  return (
    <div className="h-96 w-80 rounded-xl shadow-md bg-white">
      <div>
        <img
          src={props.src}
          alt="Product"
          className="object-cover w-full h-[180px] rounded-t-xl"
        />
      </div>
      <div className="py-4 px-6 h-[200px] overflow-hidden flex flex-col justify-between">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-flora-black text-sm">
          {props.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <h1 className="font-bold text-xl">{props.price}</h1>
          <Link
            className="bg-flora-second py-1 px-4 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-flora-secondhover"
            to={`/productos/${props.to}`}
          >
            Ver más
          </Link>
          {/* <button onClick={handleNav(props.to)}>
            Ver más
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
