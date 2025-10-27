
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home";
import Formulario from "./Formulario";
import Dados from "./Dados";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/dados" element={<Dados />} />
      </Routes>
    </BrowserRouter>
  );
}
