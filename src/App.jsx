import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Landing from "./components/Landing";
import Productos from "./components/Productos";
import Producto from "./components/Producto";
import NotFound from "./components/NotFound";

import { AuthContext, AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequiredAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <RequiredAuth>
                <Admin />
              </RequiredAuth>
            }
          />
          <Route index element={<Landing />} />
          <Route path="/productos" element={<Productos />}>
            <Route path="/productos/:id" element={<Producto />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
