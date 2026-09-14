
import React from "react";

import HeroSection from "../home/Herosection";
import Feature from "../home/Feature";
import Category from "../home/Category";
import Product from "../home/Product";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Category />
      <Product/>
    </div>
  );
}

export default HomePage;

