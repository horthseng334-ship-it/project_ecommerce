
import React from "react";
import { Routes, Route } from "react-router-dom";

import Mainlayout from "./components/layout/Mainlayout";

import Homepage from "./components/pages/Homepage";
import Shoppage from "./components/pages/Shoppage";
import Productdetail from "./components/product/ProductDetail";
import Aboutpage from "./components/pages/Aboutpage";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import CartPage from "./components/pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>

        {/* Home */}
        <Route index element={<Homepage />} />

        {/* Shop */}
        <Route path="shop" element={<Shoppage />} />

        {/* Product Detail */}
        <Route path="product/:id" element={<Productdetail />} />

        {/* About */}
        <Route path="about" element={<Aboutpage />} />

        {/* Contact */}
        <Route path="contact" element={<Contact />} />

        {/* Login */}
        <Route path="login" element={<Login />} />

        {/* Cart */}
        <Route path="cart" element={<CartPage />} />

      </Route>
    </Routes>
  );
}

export default App;

