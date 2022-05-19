import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

const initialState = {
  currentCart: JSON.parse(localStorage.getItem("cart")) || null,
};

const Cart = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  const removeItem = () => {
    localStorage.clear();
  };

  const isAuthenticated = () => {
    const { user } = useUserContext();
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(price);
  };

  useEffect(() => {
    const lStorage = localStorage.getItem("cart");
  }, [cart.currentCart]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Carrito</title>
      </Helmet>
      <div className="min-h-screen h-full bg-neutral-100">
        <h1 className="text-2xl text-center font-semibold py-5">Tu carrito</h1>
        <div className="bg-white shadow-lg md:pt-5 w-80 md:w-[720px] lg:w-[960px] mx-auto rounded-lg mb-10">
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

                  <div className="flex justify-between">
                    <p className="text-md font-medium my-2">
                      {formatPrice(product.price)}
                    </p>
                    <button
                      onClick={() => removeItem}
                      className="px-3 flex items-center text-white font-medium bg-flora-second rounded-xl transition-all duration-300 hover:bg-flora-secondhover"
                    >
                      <CloseOutlined />
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          ))}

          {cart?.length === 0 ? (
            <div className="flex justify-center p-4 md:pb-8">
              <h1 className="text-sm md:text-lg">Carrito vacío</h1>
            </div>
          ) : (
            <div className="flex flex-col max-w-full max-h-full bg-neutral-100 rounded-b-lg justify-center items-center py-4 mt-4">
              <h1>Total a pagar: {}</h1>
              <button
                onClick={() => navigate("/carrito/checkout")}
                className="bg-flora-base text-white font-medium flex items-center mb-5 justify-between w-36 px-5 py-2 rounded-md transition-all duration-300 ease-in hover:bg-green-600"
              >
                Ir a pagar <ShoppingCartOutlined className="text-xl" />
              </button>
              <Link
                to="/productos"
                className="bg-flora-base text-white font-medium flex items-center justify-between w-46 px-5 py-2 rounded-md transition-all duration-300 ease-in hover:bg-green-600"
              >
                Volver a catálogo
              </Link>
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Cart;
