import { Link } from "react-router-dom";
import React from "react";

const Left = () => {
  return (
    <div className="w-full md:w-1/2 px-5 md:px-12 py-10 ">

      <p className="text-sm font-semibold tracking-widest text-violet-700 mb-4 ">
        WELCOME TO NEXRORA
      </p>

      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
        Shop Smart.
        <br />
        <span className="text-violet-700">Live Better.</span>
      </h1>

      <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-7 max-w-[45vw] md:max-w-md">
        Discover the latest gadgets and everyday essentials
        at amazing prices. Find your favourites with Nexrora.
      </p>

      <Link to="/product">
  <button className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform">
    Shop Now
  </button>
</Link>

    </div>
  );
};

export default Left;





