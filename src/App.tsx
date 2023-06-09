import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Portfolio from "./pages/Portfolio";
import Affiliator from "./pages/Affiliator";
import Contact from "./pages/Contact";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/affiliator" element={<Affiliator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
