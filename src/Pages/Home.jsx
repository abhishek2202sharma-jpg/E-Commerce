import React from "react";
import Left from "./left.jsx";
import Category from "./Category";
import Product from "./Product";
import Hero from "./Hero.jsx";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full mt-8 md:mt-0">
       <Hero/>

        <div className="absolute inset-0 flex items-center">
          <Left />
        </div>
      </div>

      {/* Categories Section */}
      <Category />

      {/* Products Section */}
      <Product />
    </>
  );
};

export default Home;




