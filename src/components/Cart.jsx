import React, { useEffect } from "react";

import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart } = useCartContext();

  useEffect(() => {
    localStorage.getItem("cart");
  })
  return (
    <div className="h-screen bg-neutral-100">
      <h1>Cart</h1>
      {cart?.map((product) => (
        <ul key={product.id + Date.now()}>
          <div>
            <img className="w-40" src={product.url} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.description}</p>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
