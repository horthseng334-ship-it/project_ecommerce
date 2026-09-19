
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-pink-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl sm:text-2xl text-white font-medium"
          >
            SkincareStore
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-white font-semibold">
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>

            <Link to="/shop" className="hover:text-red-600 transition">
              Shop
            </Link>

            <Link to="/about" className="hover:text-red-600 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-red-600 transition">
              Contact
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5 text-white">

            {/* Search */}
            <Link to="/search">
              <FaSearch className="text-xl cursor-pointer hover:text-red-600 transition" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative"
            >
              <FaShoppingCart className="text-xl cursor-pointer hover:text-red-600 transition" />

              {cartCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link to="/login">
              <FaUser className="text-xl cursor-pointer hover:text-red-600 transition" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-pink-300">

            {/* Links */}
            <div className="flex flex-col gap-4 text-white font-semibold">

              <Link
                to="/"
                onClick={closeMenu}
                className="hover:text-red-600 transition"
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={closeMenu}
                className="hover:text-red-600 transition"
              >
                Shop
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="hover:text-red-600 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="hover:text-red-600 transition"
              >
                Contact
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center gap-6 pt-2">

                {/* Search */}
                <Link to="/search" onClick={closeMenu}>
                  <FaSearch className="text-xl hover:text-red-600 transition" />
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  onClick={closeMenu}
                  className="relative"
                >
                  <FaShoppingCart className="text-xl hover:text-red-600 transition" />

                  {cartCount > 0 && (
                    <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* User */}
                <Link to="/login" onClick={closeMenu}>
                  <FaUser className="text-xl hover:text-red-600 transition" />
                </Link>

              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;


