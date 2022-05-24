import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Checkout = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Checkout</title>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="flex flex-col justify-center items-center bg-red-400 h-[calc(100vh-80px)]">
        <div className="bg-red-600 p-5">
          <h1 className="text-xl font-bold">Checkout</h1>
        </div>
        <div>
          <div className="bg-red-600 p-5">
            <h2>Total a pagar: xxx</h2>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Checkout;
