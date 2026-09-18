
import React from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-pink-50 pt-24 pb-16">

      {/* ================= HERO ================= */}
      <section className="text-center px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
          Contact Us
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We would love to hear from you! If you have any questions about
          our Medicube skincare products, feel free to contact us.
        </p>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
              <FaPhone className="text-pink-500 text-xl" />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Phone
            </h3>

            <p className="text-gray-600 mt-2">
              +855 12 345 678
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Mon - Sat
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-pink-500 text-xl" />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Email
            </h3>

            <p className="text-gray-600 mt-2">
              support@sinkcare.com
            </p>

            <p className="text-gray-500 text-sm mt-1">
              We reply within 24 hours
            </p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-pink-500 text-xl" />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Location
            </h3>

            <p className="text-gray-600 mt-2">
              Phnom Penh, Cambodia
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Visit our store
            </p>
          </div>

          {/* Opening Hours */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
              <FaClock className="text-pink-500 text-xl" />
            </div>

            <h3 className="font-bold text-lg mt-4">
              Opening Hours
            </h3>

            <p className="text-gray-600 mt-2">
              8:00 AM - 8:00 PM
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Monday - Sunday
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Information */}
          <div className="bg-pink-500 text-white p-8 md:p-10 rounded-2xl shadow-md">

            <h2 className="text-3xl font-bold mb-4">
              Get In Touch
            </h2>

            <p className="text-pink-100 leading-relaxed mb-8">
              Have a question about our products, orders, or skincare
              recommendations? Our team is happy to help you find the
              right products for your skincare routine.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaPhone className="text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Call Us
                  </h4>
                  <p className="text-pink-100">
                    +855 12 345 678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Email Us
                  </h4>
                  <p className="text-pink-100">
                    support@sinkcare.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Visit Us
                  </h4>
                  <p className="text-pink-100">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-10">
              <h4 className="font-semibold mb-4">
                Follow Us
              </h4>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white text-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-100">
                  <FaFacebook />
                </div>

                <div className="w-10 h-10 bg-white text-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-100">
                  <FaInstagram />
                </div>
              </div>
            </div>

          </div>

          {/* Right Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md">

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mb-6">
              Fill out the form below and we will get back to you soon.
            </p>

            <form className="space-y-5">

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is your question?"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>

                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;

