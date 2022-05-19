import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

import { db } from "../firebase";
import { doc, collection, getDoc } from "firebase/firestore";
import SkeletonCard from "./SkeletonCard";

import { useCartContext } from "../context/cartContext";
import { formatPrice } from "../functions/formatPrice";
import { ShoppingCartOutlined } from "@ant-design/icons";

const getFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Producto = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useCartContext(getFromLocalStorage);

  const addToCart = () => {
    setCart([...cart, productInfo]);
    toast("¡Producto agregado!", {
      icon: "🛒",
      position: "top-right",
      duration: 1500,
    });
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
  }, [id, cart]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`Producto: ${productInfo?.title}`}</title>
      </Helmet>
      <div className="h-[calc(100vh-80px)] bg-neutral-100">
        <Toaster />
        <div className="p-4 flex flex-col items-start bg-neutral-100 w-[350px] h-auto mx-auto md:justify-center md:content-center md:mx-auto md:w-[640px] md:h-auto md:py-10 lg:flex-row lg:justify-start lg:h-2/3 lg:items-start lg:w-[1366px] lg:p-10">
          <img
            className="w-full object-fill lg:w-[580px] lg:h-full rounded-xl"
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
              <div className="w-48">
                <button
                  onClick={addToCart}
                  className="bg-flora-second hover:bg-flora-secondhover flex items-center justify-between px-4 transition-all duration-300 text-white text-md font-semibold py-4 w-full rounded-lg"
                >
                  Añadir al carrito <ShoppingCartOutlined className="text-xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Producto;
