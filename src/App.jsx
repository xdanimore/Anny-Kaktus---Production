import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Landing from "./components/Landing";
import Productos from "./components/Productos";
import Producto from "./components/Producto";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/kelly" element={<Admin />} />
        <Route index element={<Landing />} />
        <Route path="/productos" element={<Productos />}>
          <Route path="/productos/:id" element={<Producto />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
