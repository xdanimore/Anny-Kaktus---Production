import React, { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import { productos } from "../firebase";

import { formatPrice } from "../functions/formatPrice";

const Productos = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productos);
      setProduct(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Productos</title>
      </Helmet>
      <div className="bg-neutral-100">
        <header>
          <h1 className="text-3xl font-semibold text-center py-8 md:py-7 lg:py-10 md:text-4xl text-black">
            Productos
          </h1>
        </header>
        <div className="h-full">
          <div className="px-5 pb-20 py-3 flex flex-col justify-center max-w-[400px] h-auto mx-auto md:max-w-[720px] lg:max-w-[1440px]">
            {loading && (
              <div className="grid grid-cols-1 gap-10 place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-32">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            )}

            <motion.div
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 2,
                },
              }}
              className="grid grid-cols-1 gap-10 place-content-center mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-32 lg:gap-y-10"
            >
              {product.map((val, id) => {
                return (
                  <Card
                    key={id}
                    image={val.url}
                    alt={val.title}
                    title={val.title}
                    description={val.description}
                    price={formatPrice(val.price)}
                    to={val.id}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Productos;
