import React from "react";

import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cart } = useCartContext();
  return (
    <div className="h-screen bg-neutral-100">
      <h1>Cart</h1>
      {cart?.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
};

export default Cart;
