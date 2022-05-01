import React, { useState, useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addDoc } from "firebase/firestore";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { productos } from "../firebase";

const Admin = () => {
  const id = useId();
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
  });

  const titleChange = (ev) => {
    setData({ ...data, title: ev.target.value });
  };

  const priceChange = (ev) => {
    setData({ ...data, price: ev.target.value });
  };

  const descChange = (ev) => {
    setData({ ...data, description: ev.target.value });
  };

  const createProduct = (e) => {
    e.preventDefault();
    if (
      data.title.length === 0 ||
      data.price.length === 0 ||
      data.description.length === 0 ||
      data.image === null
    ) {
      toast.error("¡Debes llenar todos los campos!");

      return false;
    } else {
      addDoc(productos, {
        title: data.title,
        price: data.price,
        description: data.description,
        createdAt: new Date(),
      })
        .then(() => {
          toast.success("Producto añadido correctamente");
        })
        .catch(() => {
          toast.error("Ocurrió un error...");
        });

      setData({
        title: "",
        price: "",
        description: "",
      });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Portal del Administrador</title>
      </Helmet>
      <div className="h-[65vh] w-screen grid place-content-center place-self-center">
        <Toaster />
        <form
          className="p-4 flex flex-col w-[350px] md:w-[540px] shadow-lg rounded-lg"
          onSubmit={createProduct}
        >
          <input
            type="text"
            autoComplete="off"
            id={id}
            placeholder="Título"
            onChange={titleChange}
            value={data.title}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="number"
            autoComplete="off"
            id={id}
            placeholder="Precio"
            onChange={priceChange}
            value={data.price}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <textarea
            placeholder="Descripción"
            autoComplete="off"
            id={id}
            maxLength="155"
            onChange={descChange}
            value={data.description}
            className="my-3 p-3 w-full rounded-md border-2 border-gray-200 outline-flora-base"
          />
          <input
            type="file"
            name="imagen"
            id={id}
            accept="image/*"
            className="w-2/4 rounded-md my-3 bg-flora-white cursor-pointer file:cursor-pointer file:transition-colors file:duration-300 file:bg-flora-base file:hover:bg-flora-hover file:border-none file:w-36 file:w-full file:p-4"
          />
          <button
            type="submit"
            className="bg-flora-second p-4 rounded-md font-semibold text-flora-white transition-all duration-300 hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default Admin;
