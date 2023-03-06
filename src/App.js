import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./components/Registro";

import Home from "./views/Home";
import IniciarSesion from "./views/IniciarSesion";
import PageNotFound from "./views/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cl/login" element={<IniciarSesion />} />
          <Route path="/cl/registro" element={<Registro />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
