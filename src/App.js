import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import IniciarSesion from "./views/IniciarSesion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cl" element={<Home />} />
          <Route path="/cl/login" element={<IniciarSesion />} />
        </Routes>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
