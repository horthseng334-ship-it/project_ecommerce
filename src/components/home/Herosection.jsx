
import React from 'react'
import { useNavigate } from 'react-router-dom'

function HeroSection() {

  const navigate = useNavigate()

  return (
    <section className="bg-pink-200 mt-2">

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Create two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left Side */}
          <div>

            <p className="text-red-500 font-semibold mb-3">
              WELCOME TO OUR STORE
            </p>

            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              BEAUTIFUL SKIN
              <span className="text-red-400 block">
                STARTS HERE
              </span>
            </h1>

            <p className="text-gray-600 mt-5 text-lg">
              Discover skincare products made to keep your skin
              fresh, healthy, and glowing for your skin.
            </p>

            {/* Shop button */}
            <button
              onClick={() => navigate('/shop')}
              className="mt-7 bg-pink-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              SHOP NOW
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src="https://i.pinimg.com/736x/cc/c7/0b/ccc70b255e2c0363425611da0a040baa.jpg"
              alt="Skincare products"
              className="w-full max-w-lg rounded-xl shadow-lg"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection;

