import React, { useState, useRef, useId } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import { WOMPI_PUBLIC_KEY } from "../api";
import { subTotal } from "./Cart";
import { formatPrice } from "../functions/formatPrice";
import { validateEmail } from "../functions/validateEmail";

const Checkout = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    city: "",
  });

  const checkout = useRef();

  const id = useId();

  const url = "https://checkout.wompi.co/p/";

  const wompiPay = () => {
    const wompiId = document.getElementById("wompiId");

    wompiId.submit();
    console.log("wompi joined");
  };

  const dataLogger = (e) => {
    e.preventDefault();

    if (
      data.address === "" ||
      data.city === "" ||
      data.state === "" ||
      data.phone === "" ||
      data.email === "" ||
      data.name === ""
    ) {
      toast.error("Por favor, llena todos los campos", {
        duration: 1250,
      });
    } else if (!validateEmail(data.email)) {
      toast.error("El email no es válido", {
        duration: 1250,
      });
    } else {
      wompiPay();
    }

    console.log(data);
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-neutral-100">
      <Toaster />
      <div className="flex flex-col items-center max-w-lg mx-auto">
        <motion.header
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.25,
            },
          }}
          className="py-4"
        >
          <h1 className="text-2xl font-semibold">Datos del comprador</h1>
        </motion.header>
        <motion.form
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.25,
            },
          }}
          ref={checkout}
          className="min-h-full flex flex-col justify-between w-[350px] md:w-[460px] lg:w-full"
          onSubmit={dataLogger}
        >
          <div className="bg-white mt-5 px-6 py-8 rounded-lg shadow-md">
            <label htmlFor="name">Nombres y Apellidos</label>
            <input
              type="name"
              htmlFor="name"
              name="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="contactinput"
              id={id + "email" + Date.now()}
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              htmlFor="email"
              name="email"
              className="contactinput"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              id={id + "email"}
            />
            <label htmlFor="phone">Teléfono</label>
            <input
              type="number"
              htmlFor="phone"
              name="phone"
              className="contactinput"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              id={id + "phone"}
            />
            <label htmlFor="address">Dirección de residencia</label>
            <input
              type="text"
              htmlFor="address"
              name="address"
              className="contactinput"
              onChange={(e) => setData({ ...data, address: e.target.value })}
              id={id + "address"}
            />
            <label htmlFor="state">Departamento</label>
            <input
              type="text"
              htmlFor="state"
              name="state"
              className="contactinput"
              onChange={(e) => setData({ ...data, state: e.target.value })}
              id={id + "state"}
            />
            <label htmlFor="email">Ciudad</label>
            <input
              type="text"
              htmlFor="city"
              name="city"
              className="contactinput"
              onChange={(e) => setData({ ...data, city: e.target.value })}
              id={id + "city"}
            />
            <p className="font-semibold">
              Valor a pagar: {formatPrice(subTotal)}
            </p>
            <button
              type="submit"
              className="bg-flora-base text-white font-medium mt-4 p-2 w-full rounded-md transition-all duration-300 hover:bg-green-600"
            >
              Ir a pagar
            </button>
          </div>
        </motion.form>
        <div className="hidden">
          <form action={url} method="GET" id="wompiId">
            <input type="hidden" name="public-key" value={WOMPI_PUBLIC_KEY} />
            <input type="hidden" name="currency" value="COP" />
            <input type="hidden" name="amount-in-cents" value={subTotal * 100} />
            <input type="hidden" name="reference" value={id + Date.now()} />
            <input
              type="hidden"
              name="redirect-url"
              value="http://localhost:3000/success"
            />
            <input
              type="hidden"
              name="shipping-address:address-line-1"
              value={data.address}
            />
            <input type="hidden" name="shipping-address:country" value="CO" />
            <input
              type="hidden"
              name="shipping-address:phone-number"
              value={data.phone}
            />
            <input
              type="hidden"
              name="shipping-address:city"
              value={data.city}
            />
            <input
              type="hidden"
              name="shipping-address:region"
              value={data.state}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
