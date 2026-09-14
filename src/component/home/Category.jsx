
import React from "react";

import {
  FaCartShopping,
  FaPumpSoap,
  FaDroplet,
  FaSun,
  FaSpa,
} from "react-icons/fa6";

function Category() {
  const categories = [
    {
      name: "All Products",
      icon: <FaCartShopping />,
    },
    {
      name: "Cleanser",
      icon: <FaPumpSoap />,
    },
    {
      name: "Toner",
      icon: <FaDroplet />,
    },
    {
      name: "Sunscreen",
      icon: <FaSun />,
    },
    {
      name: "Skincare",
      icon: <FaSpa />,
    },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-2">
            Find the right skincare products for your skin
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                group
                cursor-pointer
                bg-gray-50
                rounded-2xl
                p-6
                text-center
                shadow-sm
                border
                border-gray-100
                transition-all
                duration-300
                hover:bg-pink-400
                hover:text-white
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              <div
                className="
                  text-4xl
                  text-pink-400
                  flex
                  justify-center
                  mb-4
                  group-hover:text-white
                "
              >
                {category.icon}
              </div>

              <h3 className="font-semibold text-gray-700 group-hover:text-white">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Category;

