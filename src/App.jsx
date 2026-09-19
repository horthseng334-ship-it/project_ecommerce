import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Homepage from "./components/pages/Homepage";
import ShopPage from "./components/pages/ShopPage";
import ProductDetail from "./components/product/ProductDetail";
import Aboutpage from "./components/pages/Aboutpage";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import CartPage from "./components/pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        {/* Home */}
        <Route index element={<Homepage />} />

        {/* Shop */}
        <Route path="shop" element={<ShopPage />} />

        {/* Product Detail */}
        <Route path="product/:id" element={<ProductDetail />} />

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