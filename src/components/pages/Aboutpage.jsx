
import React from "react";

import {
  FaHeart,
  FaLeaf,
  FaAward,
  FaTruck,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen  from-pink-50/50 via-white to-white pt-24 pb-16 bg-pink-200">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 ">
      <h2 className="font-bold text-center text-4xl
            md:text-5xl
            
            text-gray-900">ABOUT 
             <span className="text-pink-500">
              {" "}OUR   </span> STORE</h2>

        <div className="
          
          from-pink-100
          via-white
          
          rounded-3xl
          p-8 md:p-14
          text-center
          border border-pink-100
          
          bg-pink-300
          mt-4
          shadow-lg
        ">

          <div className="
            inline-flex
            items-center
            
            fs-5
            
            text-pink-600
            
            mb-5
          ">
            <FaHeart className=" text-5xl
            mx-auto
            mb-2"  />
            
          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
          ">
            Beautiful Skin
            <span className="text-pink-500">
              {" "}Starts Here
            </span>
          </h1>

          <p className="
            max-w-2xl
            mx-auto
            mt-5
            text-gray-500
            leading-7
            
          ">
            Welcome to our skincare store. We are passionate about
            helping you discover quality skincare products that make
            you feel confident and beautiful every day.
          </p>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
        ">

          {/* Image */}
          <div className="relative">

            <img
              src="https://i.pinimg.com/736x/df/20/86/df20869dad4950330bd6b9fb6a3f470a.jpg"
              alt="Skincare products"
              className="
                w-full
                ,h-[420px]
                object-cover
                rounded-3xl
                shadow-lg
              "
            />
          </div>


          {/* Text */}
          <div>

            <p className="
              text-pink-500
              font-semibold
              uppercase
              tracking-wider
              text-sm
              
            ">
              Who We Are
            </p>

            <h2 className="
              text-3xl
              md:text-4xl
              font-bold
              text-gray-900
              mt-2
              
            ">
              Your Skincare,
              <span className="text-pink-500">
                {" "}Our Passion
              </span>
            </h2>

            <p className="
              text-gray-500
              leading-7
              mt-5
            ">
              Our store is dedicated to bringing you carefully
              selected skincare products from Medicube. We believe
              skincare should be simple, effective, and enjoyable.
            </p>

            <p className="
              text-gray-500
              leading-7
              mt-4
            ">
              Whether you are looking for toner, serum,
              moisturizer, sunscreen, or masks, we want to help
              you find products that fit your skincare routine.
            </p>


            {/* Mission */}
            <div className="
              flex
              items-start
              gap-4
              mt-6
              p-5
              bg-pink-50
              rounded-2xl
              border border-pink-100
            ">

              <div className="
                w-12 h-12
                rounded-full
                bg-pink-200
                text-pink-500
                flex
                items-center
                justify-center
                
              ">
                <FaLeaf />
              </div>

              <div>
                <h3 className="
                  font-bold
                  text-gray-900
                ">
                  Our Mission
                </h3>

                <p className="
                  text-sm
                  text-gray-500
                  mt-1
                ">
                  To make quality skincare easy to discover,
                  simple to understand, and enjoyable to use.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

<section
  className="
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    mb-16
  "
>
  <div className="text-center mb-10">
    <p
      className="
        text-pink-500
        font-semibold
        uppercase
        tracking-wider
        text-sm
      "
    >
      Skincare Problems
    </p>

<h2
  className="
    text-3xl
    md:text-4xl
    font-bold
    text-gray-900
    mt-2
  "
>
  Why need 
  <span className="text-pink-500">
    {" "}Our product
  </span>
</h2>

<p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-7">
  Everyone has different skin concerns. Discover skincare
  products that can become part of your daily routine and
  help you take better care of your skin.
</p>


  </div>

  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-5
    "
  >
    {/* Acne & Breakouts */}
    <div
      className="
        bg-white
        border border-pink-100
        rounded-3xl
        p-6
        text-center
        hover:-translate-y-2
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-14 h-14
          mx-auto
          rounded-full
          bg-pink-100
          text-pink-500
          flex
          items-center
          justify-center
          text-xl
        "
      >
        <FaHeart />
      </div>


  <h3 className="font-bold text-gray-900 mt-4">
    Acne & Breakouts
  </h3>

  <p className="text-sm text-gray-500 mt-2 leading-6">
    Struggling with breakouts or uneven-looking skin?
    Build a simple skincare routine that works for your needs.
  </p>
</div>

{/* Large Pores */}
<div
  className="
    bg-white
    border border-pink-100
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-lg
    transition-all
    duration-300
  "
>
  <div
    className="
      w-14 h-14
      mx-auto
      rounded-full
      bg-pink-100
      text-pink-500
      flex
      items-center
      justify-center
      text-xl
    "
  >
    <FaLeaf />
  </div>

  <h3 className="font-bold text-gray-900 mt-4">
    Large Pores
  </h3>

  <p className="text-sm text-gray-500 mt-2 leading-6">
    If visible pores are one of your concerns, choose
    products designed to support a smoother-looking complexion.
  </p>
</div>

{/* Dull Skin */}
<div
  className="
    bg-white
    border border-pink-100
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-lg
    transition-all
    duration-300
  "
>
  <div
    className="
      w-14 h-14
      mx-auto
      rounded-full
      bg-pink-100
      text-pink-500
      flex
      items-center
      justify-center
      text-xl
    "
  >
    <FaAward />
  </div>

  <h3 className="font-bold text-gray-900 mt-4">
    Dull & Tired Skin
  </h3>

  <p className="text-sm text-gray-500 mt-2 leading-6">
    Skin looking dull or tired? Add suitable skincare
    products to your routine for a fresh and healthy-looking glow.
  </p>
</div>

{/* Dry Skin */}
<div
  className="
    bg-white
    border border-pink-100
    rounded-3xl
    p-6
    text-center
    hover:-translate-y-2
    hover:shadow-lg
    transition-all
    duration-300
  "
>
  <div
    className="
      w-14 h-14
      mx-auto
      rounded-full
      bg-pink-100
      text-pink-500
      flex
      items-center
      justify-center
      text-xl
    "
  >
    <FaShieldAlt />
  </div>

  <h3 className="font-bold text-gray-900 mt-4">
    Dry & Dehydrated Skin
  </h3>

  <p className="text-sm text-gray-500 mt-2 leading-6">
    Dry skin can feel uncomfortable. Find hydrating products
    that help support soft and moisturized-looking skin.
  </p>
</div>


  </div>
</section>



      {/* ================= FINAL CTA ================= */}
      <section className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
      ">

        <div className="
          bg-pink-400
          rounded-3xl
          p-8 md:p-12
          text-center
          text-white
          shadow-lg
          
        ">

          <FaHeart className="
            text-3xl
            mx-auto
            mb-4
          " />

          <h2 className="
            text-3xl
            font-bold
          ">
            Take care Your Skin Every Day
          </h2>

          <p className="
            text-pink-100
            mt-3
            max-w-xl
            mx-auto
          ">
            Explore our Medicube collection and find
            skincare products made for your routine.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;

