import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Landing from "./components/Landing";
import Productos from "./components/Productos";
import Producto from "./components/Producto";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

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
