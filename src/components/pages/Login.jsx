
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaHeart,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // after login
    alert("Login successful!");

    // Go to Homepage after login
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center px-4 py-24">
      <div
        className="
          w-full
          max-w-md
          bg-pink-100
          rounded-3xl
          shadow-xl
          shadow-pink-50
          p-6 sm:p-8
        "
      >
        {/* ================= LOGO ================= */}
        <div className="text-center mb-8">
          <div
            className="
              w-16 h-16
              mx-auto
              rounded-full
              bg-pink-100
              text-pink-500
              flex
              items-center
              justify-center
              text-2xl
              mb-4
            "
          >
            <FaHeart />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Sign in to continue your skincare journey
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <FaEnvelope
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-pink-400
                "
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="
                  w-full
                  border border-pink-100
                  rounded-xl
                  py-3
                  pl-11
                  pr-4
                  bg-pink-50/30
                  outline-none
                  text-gray-700
                  focus:ring-2
                  focus:ring-pink-300
                  focus:border-pink-300
                  transition
                "
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <FaLock
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-pink-400
                "
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="
                  w-full
                  border border-pink-100
                  rounded-xl
                  py-3
                  pl-11
                  pr-12
                  bg-pink-50/30
                  outline-none
                  text-gray-700
                  focus:ring-2
                  focus:ring-pink-300
                  focus:border-pink-300
                  transition
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-pink-500
                  transition
                "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4 accent-pink-500"
              />

              Remember me
            </label>

            <button
              type="button"
              className="
                text-pink-500
                font-medium
                hover:text-pink-700
              "
              onClick={() =>
                alert("Password reset feature coming soon.")
              }
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="
              w-full
              py-3
              bg-pink-500
              text-white
              rounded-xl
              font-semibold
              hover:bg-pink-600
              hover:shadow-lg
              hover:shadow-pink-200
              transition-all
              duration-300
            "
          >
            Login
          </button>
        </form>

        {/* ================= REGISTER ================= */}
        <div
          className="
            text-center
            mt-7
            pt-6
            border-t
            border-gray-100
          "
        >
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                text-pink-500
                font-semibold
                hover:text-pink-700
              "
            >
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;

