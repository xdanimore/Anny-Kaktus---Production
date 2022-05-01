import React, { useState, useEffect, Suspense } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { productos } from "../firebase";
import { getDocs } from "firebase/firestore";
import { Spinner } from "reactstrap";
import { motion } from "framer-motion";
import SkeletonCard from "./SkeletonCard";

const Cards = React.lazy(() => import("./Card"));

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
    <div className="h-auto">
      <div className="p-5 flex flex-col justify-center max-w-[400px] h-auto mx-auto md:max-w-[720px] lg:max-w-[1440px]">
        <h1 className="text-2xl font-extrabold text-center mt-3 mb-8 md:my-7 lg:my-10 md:text-3xl lg:text-4xl">
          &#127807; PRODUCTOS &#127807;
        </h1>
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
          className="grid grid-cols-1 gap-10 place-content-center mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-32"
        >
          <Suspense fallback={<h1>Loading...</h1>}>
            {product.map((val, id) => {
              return (
                <Cards
                  key={id}
                  title={val.title}
                  description={val.description}
                  price={`$${val.price}`}
                />
              );
            })}
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
};

export default Productos;
