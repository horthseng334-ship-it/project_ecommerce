import React from "react";
import { FaShoppingCart, FaStar, FaEye } from "react-icons/fa";

function ProductCard({ product, onAddToCart, onViewDetails }) {
  // Calculate discount
  const discount = product.originalPrice
    ? Math.round(
      ((product.originalPrice - product.price) /
        product.originalPrice) *
      100
    )
    : 0;

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-pink-500 px-3 py-1 text-sm font-bold text-white">
            -{discount}%
          </span>
        )}
        {/* View Details */}
        <button onClick={() => onViewDetails?.(product)} className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white
  text-gray-700 px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300
  flex items-center gap-1 text-xs hover:bg-pink-500 hover:text-white" > <FaEye /> View </button>

      </div>

      {/* Product Information */}
      <div className="p-5">

        {/* Brand */}
        <p className="text-sm font-medium text-pink-500">
          {product.brand}
        </p>

        {/* Name */}
        <h2 className="mt-1 text-lg font-bold text-gray-800">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="text-sm text-gray-600">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl font-bold text-pink-600">
            ${product.price}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 px-4 py-3 font-semibold text-white transition hover:bg-pink-600"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;