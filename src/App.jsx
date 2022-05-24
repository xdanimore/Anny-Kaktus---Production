import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Auth from "./views/Auth";
import Forgot from "./views/Forgot";
import Landing from "./views/Landing";
import Productos from "./views/Productos";
import Producto from "./views/Producto";
import Contacto from "./views/Contacto";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import NotFound from "./views/NotFound";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useUserContext } from "./context/userContext";

const App = () => {
  const { user, setUser } = useUserContext();

  onAuthStateChanged(auth, (fireUser) => {
    fireUser ? setUser(fireUser) : setUser(null);
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/sesion" element={<Auth />} />
        <Route path="/sesion/recuperar" element={<Forgot />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/carrito/checkout" element={<Checkout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
