
import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-pink-400">
              SinkCare
            </h2>

            <p className="text-gray-400 mt-2">
              Your beauty, our care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <span className="hover:text-pink-400 cursor-pointer">
                Home
              </span>

              <span className="hover:text-pink-400 cursor-pointer">
                Shop
              </span>

              <span className="hover:text-pink-400 cursor-pointer">
                Contact
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 cursor-pointer">
                <FaTelegramPlane />
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-5 text-center text-gray-500 text-sm">
          © 2026 SinkCare. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;

