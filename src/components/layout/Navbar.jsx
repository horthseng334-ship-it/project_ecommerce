import React from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context-CarContext.jsx";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-pink-400 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl text-white font-medium"
        >
          SinkcareStore
        </Link>

        {/* Menu */}
        <div className="flex gap-8 text-white font-semibold">
          <Link to="/" className="hover:text-red-600">
            Home
          </Link>

          <Link to="/shop" className="hover:text-red-600">
            Shop
          </Link>

          <Link to="/about" className="hover:text-red-600">
            About
          </Link>

          <Link to="/contact" className="hover:text-red-600">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex gap-5 text-white">

          {/* Search */}
          <Link to="/search">
            <FaSearch className="text-xl cursor-pointer hover:text-red-600" />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <FaShoppingCart className="text-xl cursor-pointer hover:text-red-600" />

            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          <Link to="/login">
            <FaUser className="text-xl cursor-pointer hover:text-red-600" />
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;