import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Producto = () => {
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
    <div>
      <h1>lorem {title}</h1>
    </div>
  );
};

export default Producto;
