import React, { useEffect } from "react";
import Card from "./Card";
import { db } from "../firebase";
import { collection, getDoc } from "firebase/firestore";

const Productos = () => {
  const colRef = db.collection("productos");

  const getProducts = () => {
    getDocs(colRef).then((res) => {
      console.log(res.doc.map((doc) => doc.data()));
    });
  };

  return (
    <div className="h-screen">
      <div className="p-5 flex flex-col justify-center max-w-[400px] h-auto mx-auto md:max-w-[720px] lg:max-w-[1440px]">
        <h1 className="text-2xl font-extrabold text-center mt-3 mb-8 md:my-7 lg:my-10 md:text-3xl lg:text-4xl">
          &#127807; PRODUCTOS &#127807;
        </h1>
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Planta"
            description="Lorem ipsum dor ammet dummy text for programmers and designers, used to test stuff and much more!"
            price="$47.900"
          />
        </div>
      </div>
    </div>
  );
};

export default Productos;
