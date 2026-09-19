import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaCheck,
  FaMinus,
  FaPlus,
  FaHeart,
} from "react-icons/fa";


import { ProductData } from "../data/ProductData";
import { useCart } from "../context/CartContext";

function Productdetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const product = ProductData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <h2 className="text-2xl font-bold text-red-500">
          Product not found
        </h2>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : 0;

 const handleAddToCart = () => {
  for (let i = 0; i < quantity; i++) {
    addToCart(product);
  }
};

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ================= MAIN PRODUCT ================= */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ================= IMAGE ================= */}
            <div>
              <div className="relative bg-pink-50 rounded-2xl overflow-hidden">
                <img
                  src={product.image?.[0]}
                  alt={product.name}
                  className="w-full ,h-[500px] object-cover"
                />

                {discount > 0 && (
                  <span className="absolute top-5 left-5 bg-pink-500 text-white px-4 py-2 rounded-full font-bold">
                    -{discount}%
                  </span>
                )}

                <button
                  onClick={() => setLiked(!liked)}
                  className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center"
                >
                  <FaHeart
                    className={
                      liked
                        ? "text-pink-500"
                        : "text-gray-300"
                    }
                  />
                </button>
              </div>

              {/* Small information below image */}
              <div className="grid grid-cols-3 gap-3 mt-4">

                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <FaTruck className="mx-auto text-pink-500 text-xl mb-2" />
                  <p className="text-sm font-semibold">
                    Free Delivery
                  </p>
                </div>

                <div className="bg-pink-50 rounded-xl p-4 text-center">
                  <FaUndo className="mx-auto text-pink-500 text-xl mb-2" />
                  <p className="text-sm font-semibold">
                    Easy Return
                  </p>
                </div>

                <div className="bg-pink-50 rounded-xl p-4 text-center">
                 <FaUndo className="mx-auto text-pink-500 text-xl mb-2" />
                  <p className="text-sm font-semibold">
                    Secure Payment
                  </p>
                </div>

              </div>
            </div>

            {/* ================= PRODUCT INFO ================= */}
            <div>

              {/* Brand */}
              <p className="text-pink-500 font-bold uppercase tracking-wide">
                {product.brand}
              </p>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex text-yellow-400 gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <span className="font-semibold text-gray-700">
                  {product.rating}
                </span>

                <span className="text-gray-400">
                  Customer Rating
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mt-6">
                <span className="text-4xl font-bold text-pink-600">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}

                {discount > 0 && (
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-bold">
                    Save {discount}%
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="mt-5">
                <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>

              {/* Description */}
              <div className="mt-7">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  About This Product
                </h2>

                <p className="text-gray-600 leading-7">
                  {product.description}
                </p>
              </div>

              {/* Quantity */}
              <div className="mt-7">
                <p className="font-semibold text-gray-900 mb-3">
                  Quantity
                </p>

                <div className="flex items-center border border-pink-200 rounded-xl w-fit overflow-hidden">

                  <button
                    onClick={decreaseQuantity}
                    className="w-11 h-11 flex items-center justify-center hover:bg-pink-50"
                  >
                    <FaMinus />
                  </button>

                  <span className="w-12 text-center font-bold">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    className="w-11 h-11 flex items-center justify-center hover:bg-pink-50"
                  >
                    <FaPlus />
                  </button>

                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* ================= PRODUCT DETAILS ================= */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8 mt-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-pink-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                Skin Type
              </p>
              <p className="font-bold mt-1">
                {product.specifications?.skinType}
              </p>
            </div>

            <div className="bg-pink-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                Volume
              </p>
              <p className="font-bold mt-1">
                {product.specifications?.volume}
              </p>
            </div>

            <div className="bg-pink-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                Texture
              </p>
              <p className="font-bold mt-1">
                {product.specifications?.texture}
              </p>
            </div>

            <div className="bg-pink-50 p-5 rounded-2xl">
              <p className="text-gray-500 text-sm">
                Suitable For
              </p>
              <p className="font-bold mt-1">
                {product.specifications?.suitableFor}
              </p>
            </div>

          </div>
        </div>

        {/* ================= BENEFITS ================= */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8 mt-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Benefits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
                <FaCheck className="text-pink-500" />
              </div>
              <span className="text-gray-700">
                Helps improve skin appearance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
                <FaCheck className="text-pink-500" />
              </div>
              <span className="text-gray-700">
                Supports healthy-looking skin
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
                <FaCheck className="text-pink-500" />
              </div>
              <span className="text-gray-700">
                Easy to add to your daily routine
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
                <FaCheck className="text-pink-500" />
              </div>
              <span className="text-gray-700">
                Suitable for regular skincare use
              </span>
            </div>

          </div>
        </div>

        {/* ================= HOW TO USE ================= */}
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8 mt-8">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Use
          </h2>

          <div className="space-y-4">

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                1
              </span>

              <p className="text-gray-600">
                Clean your face before applying the product.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                2
              </span>

              <p className="text-gray-600">
                Apply an appropriate amount to your skin.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                3
              </span>

              <p className="text-gray-600">
                Gently spread and absorb the product into your skin.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Productdetail;