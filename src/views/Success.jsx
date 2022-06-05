import React, { useState, useEffect, useRef } from "react";
import { deleteDoc, getDocs, doc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { db, carrito } from "../firebase";
import { EMAILJS_PUBLIC_KEY } from "../api";
import { formatPrice } from "../functions/formatPrice";

const Success = () => {
  const [product, setProduct] = useState({
    products: "",
    total: "",
    id: "",
  });

  const [load, setLoad] = useState(false);

  const form = useRef();

  const userEmail = localStorage.getItem("userEmail");
  const referenceId = localStorage.getItem("referenceId");

  useEffect(() => {
    const removeCart = async () => {
      await deleteDoc(doc(db, "carrito", referenceId));
      localStorage.removeItem("referenceId");
      localStorage.removeItem("subTotal");
    };

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

        const invoiceProds = [];

        prodsArr[0].product.forEach((prod) => {
          invoiceProds.push(prod.title);
        });
        setProduct({
          products: invoiceProds.toString(),
          total: formatPrice(subTotal),
          id: localStorage.getItem("referenceId"),
        });
        setLoad(true);

        console.log(invoiceProds.toString());

        console.log(prodsArr);
      }
    };

    if (!load) {
      getCartProducts();
    } else {
      emailjs
        .sendForm(
          "service_uml50j3",
          "template_8z5qgtx",
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
      removeCart();
    }
  }, [load, referenceId]);

  return (
    load && (
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
          <input type="hidden" name="Productos" value={product?.products} />
          <input type="hidden" name="Total" value={product?.total} />
          <input type="hidden" name="Id" value={product?.id} />
          <input type="hidden" name="Fecha" value={new Date()} />
        </form>
      </div>
    )
  );
};

export default Success;
