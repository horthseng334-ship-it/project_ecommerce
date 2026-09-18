import React from "react";
import { FaShoppingCart, FaStar, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group">
      {/* Product Image */}
      <div
        className="relative cursor-pointer overflow-hidden"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
            -{discount}%
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4">
        <p className="text-sm text-pink-500">
          {product.category}
        </p>

        <h2 className="font-bold text-lg mt-1">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mt-2">
          <FaStar />
          <span>{product.rating}</span>
        </div>

        {/* Price */}
        <div className="mt-2">
          <span className="text-xl font-bold text-pink-600">
            ${product.price}
          </span>

          {product.originalPrice && (
            <span className="ml-2 line-through text-gray-400">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <FaShoppingCart />
            Add to Cart
          </button>

          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="px-4 border border-pink-500 text-pink-500 hover:bg-pink-50 rounded-lg"
          >
            <FaEye />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;