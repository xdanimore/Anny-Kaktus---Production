import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Producto = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  /* useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productos);
      data.forEach((element) => {
        if (element.id === id) {
          console.log(element.doc.data());
        }
      });
      setLoading(false);
    };

    getProducts();
  }, []); */

  return (
    <div>
      <h1>lorem ipsum</h1>
    </div>
  );
};

export default Producto;
