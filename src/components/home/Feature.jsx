import React from 'react'
import {
    FaTruck,
    FaAward,
    FaRotate,
    FaHeadset
} from 'react-icons/fa6'

function Feature() {
   const features = [
  {
    icon: <FaTruck />,
    title: "Free Delivery",
    description: "Free delivery on orders over $30",
  },
  {
    icon: <FaAward />,
    title: "Authentic Products",
    description: "100% genuine skincare products",
  },
  {
    icon: <FaRotate />,
    title: "Easy Returns",
    description: "Easy and simple return policy",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    description: "Friendly support whenever you need help",
  },
];

    return (
        <section className=" py-10">
            <div className="w-full mx-auto px-6">
                 {/* Main Title */}
            <h2 className="text-3xl font-bold text-center text-pink-800 mb-8">
                Feature Our Store
            </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl shadow-md 
                            hover:-translate-y-2 hover:shadow-xl 
                            transition-all bg-pink-200 text-red-400"
                        >

                            {/* Icon */}
                            <div className=" text-4xl mb-4 
                            group-hover:scale-110 transition duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 mt-2">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Feature