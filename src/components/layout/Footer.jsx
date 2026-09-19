
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-pink-400 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              SinkCare
            </h2>

            <p className="text-white mt-3 leading-6">
              Your beauty, our care. Discover quality skincare products
              for healthy and beautiful skin.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-5">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition"
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

            <div className="flex flex-col gap-3 text-white">

              <a
                href="/"
                className="hover:text-red-600 transition"
              >
                Home
              </a>

              <a
                href="/shop"
                className="hover:text-red-600 transition"
              >
                Shop
              </a>

              <a
                href="/about"
                className="hover:text-red-600 transition"
              >
                About Us
              </a>

              <a
                href="/contact"
                className="hover:text-red-600 transition"
              >
                Contact
              </a>

            </div>
          </div>


          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Location
            </h3>

            <div className="flex items-start gap-3 text-white">

              <FaMapMarkerAlt className="text-pink-400 text-xl mt-1" />

              <div>
                <p className="text-white font-medium">
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
        <div className="border-t border-white mt-10 pt-5 text-center text-white text-sm">

          © 2026 Skincare. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;

