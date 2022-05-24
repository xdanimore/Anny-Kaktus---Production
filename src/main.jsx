import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { CartContextProvider } from "./context/cartContext";
import { UserContextProvider } from "./context/userContext";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </UserContextProvider>
);
