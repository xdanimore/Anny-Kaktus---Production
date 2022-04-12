import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export default App;
