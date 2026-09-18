import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-pink-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold text-pink-600 text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-4 mb-8">
          We would love to hear from you!
        </p>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;