import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
import { LeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { db, usuarios, carrito, getCartContent } from "../firebase";
import { doc, collection, getDoc, addDoc } from "firebase/firestore";
import SkeletonCard from "../components/SkeletonCard";

import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { formatPrice } from "../functions/formatPrice";

const getFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Producto = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useUserContext();
  const { cart, setCart } = useCartContext(getFromLocalStorage);

  let object = {
    buyer: localStorage.getItem("userEmail"),
    product: [productInfo],
  };

  const addToUserCart = async () => {
    if (user) {
      const content = await getCartContent();
      if (content) {
        
      } else {
        await addDoc(carrito, object);
      }
      console.log(object);
      console.log(content);
    }
  };

  const addToCart = async () => {
    if (user) {
      toast("¡Producto agregado!", {
        icon: "🛒",
        position: "top-right",
        duration: 1500,
      });

      setCart([...cart, productInfo]);
    } else {
      navigate("/sesion");
      toast("¡Debes iniciar sesión!", {
        icon: "🎈",
        position: "top-center",
        duration: 1500,
      });
    }
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
            className="w-full object-cover h-[400px] md:h-[540px] lg:w-[580px] lg:h-full rounded-xl"
            src={productInfo?.url}
            alt={productInfo?.title}
          />
          {loading && <SkeletonCard />}

          <div className="lg:flex lg:flex-col w-full lg:justify-between lg:ml-16 lg:h-full">
            <h1 className="text-3xl font-semibold my-4 lg:my-0">
              {productInfo?.title}
            </h1>

            <p className="text-md font-normal text-neutral-600">
              {productInfo?.description}
            </p>
            <p className="font-semibold text-2xl my-4 lg:text-4xl">
              {formatPrice(productInfo?.price)}
            </p>
            {loading || (
              <div className="w-full flex items-center justify-between">
                <button
                  onClick={addToUserCart}
                  className="bg-flora-second hover:bg-flora-secondhover flex items-center w-48 justify-between px-4 transition-all duration-300 text-white text-md font-semibold py-4 w-full rounded-lg"
                >
                  Añadir al carrito <ShoppingCartOutlined className="text-xl" />
                </button>
                <Link to="/productos">
                  <LeftOutlined className="text-xl bg-flora-base py-2 px-3 rounded-md text-white hover:bg-green-600 transition-all duration-300" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Producto;
