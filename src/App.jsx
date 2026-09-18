import React from "react";
import { Routes, Route } from "react-router-dom";

import Mainlayout from "./components/layout/Mainlayout";
import Homepage from "./components/pages/Homepage";
import Shoppage from "./components/pages/Shoppage";
import Productdetail from "./components/product/ProductDetail";
import Aboutpage from "./components/pages/Aboutpage";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shoppage />} />
        <Route path="product/:id" element={<Productdetail />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />

      </Route>
    </Routes>
  );
}

export default App;