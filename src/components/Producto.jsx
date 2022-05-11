import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { db } from "../firebase";
import { doc, collection, getDoc } from "firebase/firestore";
import { ShoppingCartOutlined } from "@ant-design/icons";
import SkeletonCard from "./SkeletonCard";

import { useCartContext } from "../context/cartContext";

const Producto = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useCartContext();

  const addToCart = () => {
    setCart([...cart, productInfo]);
    toast("¡Producto agregado!", {
      icon: "🛒",
      position: "top-right",
      duration: 1500,
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(price);
  };

  const getProduct = async (prodID) => {
    const colRef = collection(db, "productos");
    const docRef = doc(colRef, prodID);
    const snapDoc = await getDoc(docRef);
    const product = snapDoc.data();

    return product;
  };

  useEffect(() => {
    const getInfo = async () => {
      const prod = await getProduct(id);
      setProductInfo(prod);
      setLoading(false);
    };
    getInfo();
  }, [id]);

  return (
    <div className="h-screen bg-neutral-100">
      <Toaster />
      <div className="p-4 flex flex-col items-start bg-neutral-100 w-[350px] h-auto mx-auto md:justify-center md:content-center md:mx-auto md:w-[640px] md:h-auto md:py-10 lg:flex-row lg:justify-start lg:h-2/3 lg:items-start lg:w-[1366px] lg:p-10">
        <img
          className="w-full object-cover lg:w-[580px] lg:h-full rounded-xl"
          src={productInfo?.url}
          alt={productInfo?.title}
        />
        {loading && <SkeletonCard />}

        <div className="lg:flex lg:flex-col lg:w-[540px] lg:justify-between lg:ml-16 lg:h-full">
          <h1 className="text-3xl font-semibold my-4 lg:my-0">
            {productInfo?.title}
          </h1>
          <p className="text-md font-normal text-neutral-600">
            {productInfo?.description}
          </p>
          <p className="font-bold text-2xl my-4 lg:text-4xl">
            {formatPrice(productInfo?.price)}
          </p>
          {loading || (
            <div className="w-52">
              <button
                onClick={addToCart}
                className="bg-flora-second hover:bg-flora-secondhover transition-all duration-300 text-white flex text-md items-center justify-between font-semibold p-4 w-full rounded-lg"
              >
                <ShoppingCartOutlined className="text-xl" /> Añadir al carrito
              </button>
              <button className="bg-flora-black text-white mt-4 rounded-lg text-md font-semibold w-full p-4">
                Comprar ahora
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Producto;
