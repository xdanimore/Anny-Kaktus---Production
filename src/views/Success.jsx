import React, { useState, useEffect, useRef } from "react";
import { getDocs } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { db, carrito } from "../firebase";
import { EMAILJS_PUBLIC_KEY } from "../api";

const Success = () => {
  const [product, setProduct] = useState([]);

  const form = useRef();

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const getCartProducts = async () => {
      let subTotal = 0;
      let prodsArr = [];
      let array = [];

      const data = await getDocs(carrito);

      if (userEmail && data) {
        data.forEach((product) => {
          if (product.data().buyer === userEmail) {
            prodsArr.push({
              product: product.data().product,
              id: product.id,
            });
            array.push(product.data().product);
          }
        });
        array[0].forEach((product) => {
          subTotal += product.price;
        });

        setProduct(prodsArr);
        emailjs
          .sendForm(
            "service_uml50j3",
            "template_9mymhop",
            form.current,
            EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        console.log(prodsArr);
      }
    };

    getCartProducts();
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] bg-neutral-100 flex flex-col items-center justify-center">
      <CheckCircleOutlined className="text-7xl pb-10 text-flora-base md:text-8xl" />
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        ¡Pago realizado con éxito!
      </h1>
      <Link
        to="/productos"
        className="mt-4 transition-all duration-300 ease-in hover:text-flora-base"
      >
        Volver a productos
      </Link>

      <form ref={form}>
        <input type="hidden" name="" value={product[0]} />
      </form>
    </div>
  );
};

export default Success;
