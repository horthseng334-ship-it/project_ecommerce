
import React from 'react'
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {

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

          <Link
            to="/"
            className="hover:text-red-600"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="hover:text-red-600"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="hover:text-red-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-red-600"
          >
            Contact
          </Link>

        </div>

        {/* Icons */}
        <div className="flex gap-5 text-white">

          <Link to="/search">
            <FaSearch className="cursor-pointer hover:text-red-600" />
          </Link>

          <Link to="/cart">
            <FaShoppingCart className="cursor-pointer hover:text-red-600" />
          </Link>

          <Link to="/login">
            <FaUser className="cursor-pointer hover:text-red-600" />
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar

