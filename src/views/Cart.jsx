import { useState, useEffect, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { formatPrice } from "../functions/formatPrice";
import { carrito, db } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);
  const [subTotal, setSubTotal] = useState(0);

  const id = useId();

  const redirect = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const removeItem = async (cartItem) => {
    const cartRef = doc(db, "carrito", product[0].id); // Referencia al documento del carrito

    await updateDoc(cartRef, {
      product: arrayRemove(cartItem), // Eliminando el producto del carrito acorde al index que se le pase
    });

    toast("Producto eliminado del carrito", {
      icon: "😮‍💨",
      duration: 1250,
    });

    setLoad(true);
  };

  useEffect(() => {
    const getCartProducts = async () => {
      let subTotal = 0;
      let prodsArr = [];
      let array = [];

      if (load) {
        setLoad(false);
      }

      const data = await getDocs(carrito);

      if (userEmail && data) {
        data.forEach((product) => {
          if (product.data().buyer === userEmail) {
            prodsArr.push({
              product: product.data().product,
              id: product.id, // Se asignan los valores de cada producto del carrito para cada comprador en el local storage del navegador
            });
            array.push(product.data().product);
          }
        });

        if (array[0].length > 0) {
          array[0].forEach((product) => {
            subTotal += product.price; // Se suma el subtotal por cada producto añadido
          });
        }

        if (prodsArr[0].product.length === 0) {
          await deleteDoc(doc(db, "carrito", prodsArr[0].id));
          localStorage.removeItem("referenceId"); // Si no hay productos en el carrito, se elimina el documento del carrito y se actualiza la página
          window.location.reload();
        } else {
          setProduct(prodsArr); // Si hay productos en el carrito, se agregan al documento en la base de datos
          setSubTotal(subTotal);
          localStorage.setItem("referenceId", prodsArr[0].id);
        }
      }
    };

    getCartProducts();
  }, [load]);

  const setToLocalStorage = () => {
    localStorage.setItem("subTotal", subTotal);
    redirect("/carrito/checkout");
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Carrito</title>
      </Helmet>
      <Toaster />
      <div className="min-h-screen h-full bg-neutral-100">
        <h1 className="text-2xl text-center font-semibold py-5">Tu carrito</h1>
        <div className="bg-white shadow-lg md:pt-5 w-80 md:w-[720px] lg:w-[960px] mx-auto rounded-lg mb-10">
          {product.length > 0 &&
            product[0]["product"].map((productItem) => (
              <ul
                key={product[0]["id"] + id + productItem.title}
                className="py-5 md:py-1 max-w-xs mx-auto flex flex-col items-center md:flex-col md:justify-start"
              >
                <div className="border-2 max-w-[270px] md:max-w-xl md:bg-neutral-100 md:w-[576px] rounded-lg border-neutral-200 px-6 py-4 h-full md:flex md:justify-between md:items-center lg:items-center lg:h-full">
                  <img
                    className="w-52 rounded-lg lg:w-32 lg:h-[128px] object-cover"
                    src={productItem.url}
                    alt={productItem.title}
                  />
                  <div className="md:flex md:flex-col md:w-56 lg:justify-around lg:w-72">
                    <p className="text-lg font-medium my-2 lg:font-bold lg:my-1">
                      {productItem.title}
                    </p>

                    <div className="flex justify-between">
                      <p className="text-md font-medium my-2">
                        {formatPrice(productItem.price)}
                      </p>
                      <button
                        onClick={() => removeItem(productItem)}
                        className="lg:px-2 px-3 text-md lg:text-lg flex items-center text-white font-medium bg-flora-second rounded-md transition-all duration-300 hover:bg-flora-secondhover"
                      >
                        <CloseOutlined />
                      </button>
                    </div>
                  </div>
                </div>
              </ul>
            ))}
          {/* Si no hay productos en el carrito, mostrará que el carrito está vacío, de lo contrario, mostrará cada tarjeta y su total a pagar */}
          {product.length === 0 ? (
            <div className="flex justify-center p-4 md:pb-8">
              <h1 className="text-sm md:text-lg">Carrito vacío</h1>
            </div>
          ) : (
            <div className="flex flex-col max-w-full max-h-full bg-neutral-100 rounded-b-lg justify-center items-center py-4 mt-4">
              <h1 className="font-medium py-3 mb-3">
                Total a pagar: {formatPrice(subTotal)} COP
              </h1>
              <button
                onClick={() => setToLocalStorage()}
                className="bg-flora-base text-white font-medium flex items-center mb-5 justify-between w-36 px-5 py-2 rounded-md transition-all duration-300 ease-in hover:bg-green-600"
              >
                Ir a pagar <ShoppingCartOutlined className="text-xl" />
              </button>
              <Link
                to="/productos"
                className="bg-flora-base text-white font-medium flex items-center justify-between w-46 px-5 py-2 rounded-md transition-all duration-300 ease-in hover:bg-green-600"
              >
                Volver a catálogo
              </Link>
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Cart;
