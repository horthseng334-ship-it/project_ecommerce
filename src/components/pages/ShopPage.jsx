import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductData } from "../data/ProductData";
import ProductCard from "../product/ProductCard";

import {
  FaSearch,
  FaShoppingBag,
  FaTint,
  FaPumpSoap,
  FaSun,
} from "react-icons/fa";

import { FaCartShopping, FaDroplet } from "react-icons/fa6";
import { SiContensis } from "react-icons/si";

function ShopPage({ onAddToCart }) {
  const navigate = useNavigate();

  // Search
  const [search, setSearch] = useState("");

  // Category
  const [selectcategory, setselectcategory] = useState("");

  // Sort
  const [sortBy, setSortBy] = useState("featured");

  // Go to Product Detail
  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  // Filter + Search + Sort
  const filterproduct = ProductData
    .filter((item) => {
      const categoryMatch =
        selectcategory === "" ||
        item.category === selectcategory;

      const searchMatch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortBy === "low") {
        return a.price - b.price;
      }

      if (sortBy === "high") {
        return b.price - a.price;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  // Clear filters
  const clearFilter = () => {
    setSearch("");
    setselectcategory("");
    setSortBy("featured");
  };

  // Category button
  const CategoryButton = ({ category, icon, children }) => {
    const active = selectcategory === category;

    return (
      <button
        onClick={() => setselectcategory(category)}
        className={`
          flex items-center justify-center gap-2
          px-5 py-3 rounded-full 
          font-medium transition-all duration-300
          border
          ${
            active
              ? "bg-pink-500 text-white border-pink-500 shadow-lg shadow-pink-200 scale-105"
              : "bg-white text-gray-600 border-pink-100 hover:bg-pink-50 hover:text-pink-500 hover:border-pink-200 hover:-translate-y-1"
          }
        `}
      >
        {icon}
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-pink-100 from-pink-50/50 via-white to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-500 rounded-full text-sm font-semibold mb-4">
            <FaShoppingBag />
            MEDICUBE COLLECTION
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Shop Our{" "}
            <span className="text-pink-500">
              Skincare
            </span>
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Discover our collection of Medicube skincare products
            designed to help you achieve beautiful and healthy skin.
          </p>
        </div>

        {/* ================= SEARCH & SORT ================= */}
        <div className="bg-white border border-pink-100 rounded-3xl p-5 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">

            {/* Search */}
            <div className="flex-1">
              <p className="text-gray-900 font-semibold mb-2">
                Find Your Skincare
              </p>

              <div className="relative max-w-xl">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products, brand or category..."
                  className="
                    w-full
                    border border-pink-200
                    rounded-2xl
                    px-4 py-3
                    pl-12
                    bg-pink-50/50
                    text-gray-700
                    placeholder:text-gray-400
                    outline-none
                    focus:ring-2
                    focus:ring-pink-300
                    focus:border-pink-300
                    transition
                  "
                />

                <FaSearch
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-pink-400
                  "
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
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
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Sort */}
            <div className="w-full lg:w-56">
              <p className="text-gray-500 text-sm mb-2">
                Sort Products
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="
                  w-full
                  border border-pink-200
                  rounded-2xl
                  px-4 py-3
                  bg-white
                  text-gray-700
                  outline-none
                  focus:ring-2
                  focus:ring-pink-300
                  cursor-pointer
                "
              >
                <option value="featured">
                  Featured
                </option>

                <option value="low">
                  Price: Low to High
                </option>

                <option value="high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Highest Rating
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* ================= CATEGORY ================= */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Shop by Category
              </h2>

              <p className="text-sm text-gray-400">
                Find the right products for your skincare routine
              </p>
            </div>

            {(selectcategory || search) && (
              <button
                onClick={clearFilter}
                className="
                  text-sm
                  text-pink-500
                  hover:text-pink-700
                  font-medium
                "
              >
                Clear All
              </button>
            )}
          </div>

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-4
              lg:grid-cols-7
              gap-3
            "
          >
            <CategoryButton
              category=""
              icon={<FaCartShopping />}
            >
              All Products
            </CategoryButton>

            <CategoryButton
              category="Toner"
              icon={<FaTint />}
            >
              Toner
            </CategoryButton>

            <CategoryButton
              category="Foam"
              icon={<FaPumpSoap />}
            >
              Foam
            </CategoryButton>

            <CategoryButton
              category="Serum"
              icon={<FaDroplet />}
            >
              Serum
            </CategoryButton>

            <CategoryButton
              category="Mask"
              icon={<FaDroplet />}
            >
              Mask
            </CategoryButton>

            <CategoryButton
              category="Moisturizer"
              icon={<SiContensis />}
            >
              Moisturizer
            </CategoryButton>

            <CategoryButton
              category="Sunscreen"
              icon={<FaSun />}
            >
              Sunscreen
            </CategoryButton>
          </div>
        </div>

        {/* ================= ACTIVE FILTER ================= */}
        {(selectcategory || search) && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-gray-500">
              Active filters:
            </span>

            {search && (
              <span
                className="
                  px-4 py-2
                  bg-pink-100
                  text-pink-600
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                Search: "{search}"
              </span>
            )}

            {selectcategory && (
              <span
                className="
                  px-4 py-2
                  bg-pink-100
                  text-pink-600
                  rounded-full
                  text-sm
                  font-medium
                "
              >
                Category: {selectcategory}
              </span>
            )}
          </div>
        )}

        {/* ================= RESULT COUNT ================= */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Our Products
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              {filterproduct.length} product
              {filterproduct.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* ================= PRODUCT GRID ================= */}
        {filterproduct.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >
            {filterproduct.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                imageIndex={1}
                onAddToCart={onAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div
            className="
              bg-white
              rounded-3xl
              border
              border-pink-100
              p-12
              text-center
              shadow-sm
            "
          >
            <div
              className="
                w-20 h-20
                mx-auto
                mb-5
                rounded-full
                bg-pink-100
                flex
                items-center
                justify-center
              "
            >
              <FaSearch className="text-3xl text-pink-400" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2 mb-6">
              We couldn't find any products matching your search.
            </p>

            <button
              onClick={clearFilter}
              className="
                px-6
                py-3
                bg-pink-500
                text-white
                rounded-xl
                font-semibold
                hover:bg-pink-600
                hover:shadow-lg
                hover:shadow-pink-200
                transition
              "
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopPage;