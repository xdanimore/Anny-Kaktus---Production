import React, { useEffect } from "react";

import { useCartContext } from "../context/cartContext";

const initialState = {
  currentCart: JSON.parse(localStorage.getItem("cart")) || null,
};

const Cart = () => {
  const { cart } = useCartContext();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(price);
  };

  useEffect(() => {
    const lStorage = localStorage.getItem("cart");

    console.log(JSON.stringify(lStorage));
  }, [cart.currentCart]);
  return (
    <div className="min-h-screen h-full bg-neutral-100">
      <h1 className="text-2xl text-center font-semibold py-5">Tu carrito</h1>
      <div className="bg-white shadow-lg md:py-5 w-80 md:w-[720px] lg:w-[960px] mx-auto rounded-lg mb-10">
        {cart?.map((product) => (
          <ul
            key={product.id + Date.now()}
            className="py-5 md:py-1 max-w-xs mx-auto flex flex-col items-center md:flex-col md:justify-start"
          >
            <div className="border-2 max-w-[270px] md:max-w-xl md:bg-neutral-100 md:w-[576px] rounded-lg border-neutral-200 px-6 py-4 h-full md:flex md:justify-between md:items-center lg:items-center lg:h-full">
              <img
                className="w-52 rounded-lg lg:w-32 lg:h-[128px] object-cover"
                src={product.url}
                alt={product.title}
              />
              <div className="md:flex md:flex-col md:w-56 lg:justify-around lg:w-72">
                <p className="text-lg font-medium my-2 lg:font-bold lg:my-1">
                  {product.title}
                </p>
                
                <p className="text-md font-medium my-2">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Cart;
