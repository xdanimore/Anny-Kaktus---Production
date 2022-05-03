import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Card from "./Card";
import SkeletonCard from "./SkeletonCard";
import { productos } from "../firebase";

const Productos = () => {
  const { id } = useParams();
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
      <div className="h-[120vh] bg-flora-black">
        <div className="p-5 flex flex-col justify-center max-w-[400px] h-auto mx-auto md:max-w-[720px] lg:max-w-[1440px]">
          <h1 className="text-2xl font-extrabold text-center mt-3 mb-8 md:my-7 lg:mb-10 lg:mt-3 md:text-3xl lg:text-4xl">
            &#127807; PRODUCTOS &#127807;
          </h1>
          {loading && (
            <div className="grid grid-cols-1 gap-10 place-content-center mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-32">
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
                  src={val.url}
                  title={val.title}
                  description={val.description}
                  price={`$${val.price}`}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Productos;
