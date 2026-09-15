import React from "react";
import { FaShoppingCart, FaStar, FaEye } from "react-icons/fa";

function ProductCard({ product, onAddToCart, onViewDetails }) {

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        <img
          src={product.image?.[0]}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition duration-300"
        />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </span>
        )}

        {/* Category */}
        <span className="absolute top-3 right-3 bg-white text-pink-600 px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </span>
      </div>

      {/* Product Information */}
      <div className="p-4">

        <p className="text-sm text-pink-500 font-semibold">
          {product.brand}
        </p>

        <h2 className="text-lg font-bold text-gray-900 mt-1 line-clamp-2">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm text-gray-600">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">

          <span className="text-xl font-bold text-pink-600">
            ${product.price}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}

        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">

          <button
            onClick={() => onAddToCart && onAddToCart(product)}
            className="flex-1 flex items-center justify-center gap-2 bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition"
          >
            <FaShoppingCart />
            Add
          </button>

          <button
            onClick={() => onViewDetails && onViewDetails(product)}
            className="px-4 py-2 border border-pink-200 text-pink-600 rounded-xl hover:bg-pink-50 transition"
          >
            <FaEye />
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;