import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {

  return (
    <div className="h-96 w-80 rounded-xl shadow-md bg-white">
      <div>
        <img
          src={props.src}
          alt="Product"
          className="object-cover w-full h-44 rounded-t-xl"
        />
      </div>
      <div className="py-4 px-6 h-[200px] overflow-hidden flex flex-col justify-between">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-neutral-500 text-sm">
          {props.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <h1 className="font-bold text-xl">{props.price}</h1>
          <a
            className="bg-flora-second cursor-pointer py-1 px-4 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-flora-secondhover"
            href={props.image}
            target="_blank"
          >
            Ver imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
