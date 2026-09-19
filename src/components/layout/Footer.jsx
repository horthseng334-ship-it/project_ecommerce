
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-pink-400 text-white mt-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10">

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Skincare
            </h2>

            <p className="mt-3 leading-6 max-w-md">
              Your beauty, our care. Discover quality skincare products
              for healthy and beautiful skin.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-5">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800
                flex items-center justify-center
                hover:bg-pink-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800
                flex items-center justify-center
                hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800
                flex items-center justify-center
                hover:bg-pink-600 transition"
              >
                <FaTelegramPlane />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="hover:text-red-600 transition"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="hover:text-red-600 transition"
              >
                Shop
              </Link>

              <Link
                to="/about"
                className="hover:text-red-600 transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="hover:text-red-600 transition"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Location
            </h3>

            <div className="flex items-start gap-3">

              <FaMapMarkerAlt className="text-white text-xl mt-1 flex-shrink-0" />

              <div>
                <p className="font-medium">
                  SinkCare Store
                </p>

                <p className="mt-1">
                  Phnom Penh, Cambodia
                </p>

                <p className="mt-1">
                  Open Daily: 8:00 AM - 8:00 PM
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/50 mt-10 pt-5 text-center text-sm">
          © 2026 SinkCare. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;

