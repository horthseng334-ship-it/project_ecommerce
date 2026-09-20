import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Homepage from "./components/pages/Homepage";
import ShopPage from "./components/pages/ShopPage";
import ProductDetail from "./components/product/ProductDetail";
import AboutPage from "./components/pages/Aboutpage";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import CartPage from "./components/pages/CartPage";

function App() {
  return (
    <Routes>

      {/* Login is the first page */}
      <Route path="/" element={<Login />} />

      {/* Website after login */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>

    </Routes>
  );
}

export default App;