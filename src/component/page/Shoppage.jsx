import React, { useState } from "react";
import { ProductData } from "../data/ProductData";
import ProductCard from "../product/ProductCard";

import { SiContensis } from "react-icons/si";
import { FaPumpSoap, FaTint } from "react-icons/fa";
import { FaCartShopping, FaDroplet } from "react-icons/fa6";
import { SunDimIcon } from "lucide-react";

function Shoppage() {
  const [selectbrand, setselectbrand] = useState("");
  const [selectcategory, setselectcategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // Filter Products
  const filterproduct = ProductData.filter((item) => {
    const Brand =
      selectbrand === "" || item.brand === selectbrand;

    const Category =
      selectcategory === "" || item.category === selectcategory;

    return Brand && Category;
  });

  // Clear all filters
  const clearFilter = () => {
    setselectbrand("");
    setselectcategory("");
    setPriceRange("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-3 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Store
          </p>

          <h1 className="text-4xl font-bold text-pink-600 mt-2">
            Shop Our Products
          </h1>

          <p className="text-gray-500 mt-2">
            Discover quality skincare and products at the best prices.
          </p>
        </div>

        {/* TOP BAR */}
        <div className="bg-white border border-pink-200 rounded-2xl p-2 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <div>
              <p className="text-gray-500 text-sm">
                Search Product
              </p>
            </div>

            <select
              className="border border-gray-200 rounded-xl px-4 py-2.5 bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>

          </div>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5 mb-7 p-6">

          {/* All Product */}
          <button
            onClick={() => setselectcategory("")}
            className="shadow-sm text-center p-2 rounded-4xl cursor-pointer
            hover:bg-pink-400 hover:text-white hover:shadow-lg
            hover:-translate-y-1 transition-all duration-300
            flex items-center justify-center gap-2"
          >
            <FaCartShopping />
            All Product
          </button>

          {/* Toner */}
          <button
            onClick={() => setselectcategory("Toner")}
            className="shadow-sm text-center p-2 rounded-4xl cursor-pointer
            hover:bg-pink-400 hover:text-white hover:shadow-lg
            hover:-translate-y-1 transition-all duration-300
            flex items-center justify-center gap-2"
          >
            <FaTint />
            Toner
          </button>

          {/* Foam */}
          <button
            onClick={() => setselectcategory("Foam")}
            className="shadow-sm text-center p-2 rounded-4xl cursor-pointer
            hover:bg-pink-400 hover:text-white hover:shadow-lg
            hover:-translate-y-1 transition-all duration-300
            flex items-center justify-center gap-2"
          >
            <FaPumpSoap />
            Foam
          </button>

          {/* Serum */}
          <button
            onClick={() => setselectcategory("Serum")}
            className="shadow-sm text-center p-2 rounded-4xl cursor-pointer
            hover:bg-pink-400 hover:text-white hover:shadow-lg
            hover:-translate-y-1 transition-all duration-300
            flex items-center justify-center gap-2"
          >
            <FaDroplet />
            Serum
          </button>

          {/* Mask */}
          <button
            onClick={() => setselectcategory("Mask")}
            className="shadow-sm text-center p-2 rounded-4xl cursor-pointer
            hover:bg-pink-400 hover:text-white hover:shadow-lg
            hover:-translate-y-1 transition-all duration-300
            flex items-center justify-center gap-2"
          >
            <FaDroplet />
            Mask
          </button>

          {/* Moisturizer */}
          <button
            onClick={() => setselectcategory("Moisturizer")}
            className="shadow-sm text-center p-2 rounded-4xl cursor-pointer
            hover:bg-pink-400 hover:text-white hover:shadow-lg
            hover:-translate-y-1 transition-all duration-300
            flex items-center justify-center gap-2"
          >
            <SiContensis />
            Moisturizer
          </button>

          {/* Sunscreen */}
          <button
            onClick={() => setselectcategory("Sunscreen")}
            className="shadow-sm text-center p-2 rounded-4xl cursor-pointer
            hover:bg-pink-400 hover:text-white hover:shadow-lg
            hover:-translate-y-1 transition-all duration-300
            flex items-center justify-center gap-2"
          >
            <SunDimIcon />
            Sunscreen
          </button>

        </div>

        {/* ACTIVE FILTERS */}
        {(selectbrand || selectcategory || priceRange) && (
          <div className="flex flex-wrap gap-2 mb-5">

            {selectcategory && (
              <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm">
                Category: {selectcategory}
              </span>
            )}

            {selectbrand && (
              <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm">
                Brand: {selectbrand}
              </span>
            )}

            {priceRange && (
              <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm">
                Price: {priceRange}
              </span>
            )}

          </div>
        )}

        {/* PRODUCT GRID */}
        {filterproduct.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {filterproduct.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}

          </div>
        ) : (

          /* EMPTY STATE */
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">

            <div className="text-6xl mb-4">
              🛍
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2 mb-6">
              Try changing your filters to find more products.
            </p>

            <button
              onClick={clearFilter}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Shoppage;