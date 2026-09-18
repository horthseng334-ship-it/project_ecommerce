import React from "react";

const categories = [
  {
    title: "Dark Spots",
    description: "Brightens dark spots and helps improve uneven skin tone.",
    image:
      "https://i.pinimg.com/736x/df/d1/2f/dfd12f53f76b856890818a3db2f8a365.jpg",
    category: "TXA",
  },
  {
    title: "Dull & Uneven Skin",
    description: "Improves skin texture, boosts glow, and evens skin tone.",
    image:
      "https://i.pinimg.com/1200x/0b/4b/92/0b4b924aee579d079e07edc9f7ff81c4.jpg",
      
    category: "PDRN",
  },
  {
    title: "Dry Skin",
    description: "Provides deep hydration and helps give skin a healthy glow.",
    image:
      "https://i.pinimg.com/736x/86/b3/9d/86b39d25ff6f1a00b96b2d8639defb39.jpg",
    category: "Hyaluronic",
  },
  {
    title: "Dull Skin",
    description: "Brightens dull skin and helps improve a glowing complexion.",
    image:
      "https://i.pinimg.com/736x/86/b3/9d/86b39d25ff6f1a00b96b2d8639defb39.jpg",
    category: "Vitamin C",
  },
];

function Category() {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center  mb-2 text-pink-700">
          Best recommend for your skin
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Find the right skincare for your skin concern
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md
                         hover:shadow-xl transition duration-300
                         cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 text-center">

                <span className="text-sm text-pink-500 font-semibold">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Category;