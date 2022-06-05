import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { UserContextProvider } from "./context/userContext";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
      <App />
  </UserContextProvider>
);
