import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Card = (props) => {
  const addToCart = () => {
    toast("Producto agregado al carrito");
  };

  return (
    <div className="h-96 w-80 rounded-xl shadow-md bg-white">
      <Toaster />
      <div>
        <a href={props.image} target="_blank">
          <img
            src={props.src}
            alt="Product"
            className="object-cover w-full h-[182px] rounded-t-xl"
          />
        </a>
      </div>
      <div className="py-3 px-6 h-[200px] overflow-hidden flex flex-col justify-between">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-neutral-500 text-sm">{props.description}</p>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">{props.price}</h1>
          <div className="flex flex-col text-center">
            <button
              className="bg-flora-second block cursor-pointer py-2 px-5 rounded-md text-flora-white font-semibold transition-colors duration-300 hover:bg-flora-secondhover"
              href={props.image}
              onClick={addToCart}
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
