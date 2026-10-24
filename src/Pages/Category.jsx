import React from "react";

const Category = () => {
  const categories = [
    {
      name: "Mobiles",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Laptops",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
    
      className="w-full bg-gray-50 px-5 py-12 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Categories
          </h2>

          <p className="mt-2 text-gray-500">
            Discover products across our popular categories.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-36 overflow-hidden sm:h-44">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="text-center text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;