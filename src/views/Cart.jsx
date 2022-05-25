import React, { useEffect, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { useCartContext } from "../context/cartContext";
import { formatPrice } from "../functions/formatPrice";
import { WOMPI_PUBLIC_KEY } from "../api";

const initialState = {
  currentCart: JSON.parse(localStorage.getItem("cart")) || null,
};

const Cart = () => {
  const id = useId();

  const { cart } = useCartContext();

  const navigate = useNavigate();

  const url = "https://checkout.wompi.co/p/";

  const wompiPay = () => {
    const wompiId = document.getElementById("wompiId");

    wompiId.submit();
    console.log("wompi joined");
  };

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
              key={product.id + id}
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
                      className="lg:px-2 px-3 text-md lg:text-lg flex items-center text-white font-medium bg-flora-second rounded-md transition-all duration-300 hover:bg-flora-secondhover"
                    >
                      <CloseOutlined />
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          ))}

          <div className="hidden">
            <form action={url} method="GET" id="wompiId">
              <input type="hidden" name="public-key" value={WOMPI_PUBLIC_KEY} />
              <input type="hidden" name="currency" value="COP" />
              <input type="hidden" name="amount-in-cents" value={1560000} />
              <input type="hidden" name="reference" value={id + Date.now()} />
              <input type="hidden" name="redirect-url" value="http://localhost:3000/success" />
              <input type="hidden" name="shipping-address:address-line-1" value="Calle 61 #18a 20" />
              <input type="hidden" name="shipping-address:country" value="CO" />
              <input type="hidden" name="shipping-address:phone-number" value="3014492053" />
              <input type="hidden" name="shipping-address:city" value="Barrancabermeja" />
              <input type="hidden" name="shipping-address:region" value="Caribe" />
            </form>
          </div>

          {cart?.length === 0 ? (
            <div className="flex justify-center p-4 md:pb-8">
              <h1 className="text-sm md:text-lg">Carrito vacío</h1>
            </div>
          ) : (
            <div className="flex flex-col max-w-full max-h-full bg-neutral-100 rounded-b-lg justify-center items-center py-4 mt-4">
              <h1 className="font-medium py-3 mb-3">Total a pagar: {}</h1>
              <button
                onClick={() => wompiPay()}
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
