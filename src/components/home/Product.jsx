
import React from "react";

import { ProductData } from "../data/ProductData";
import ProductCard from "../product/ProductCard";

function Product() {

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const handleViewDetails = (product) => {
    console.log("View details:", product);
  };

  return (
    <section className="py-10 px-4 ">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold  fs-4 text-pink-800">
             Products list
          </h2>

          <p className="text-gray-500 mt-2">
            Discover our best skincare products
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {ProductData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Product;

