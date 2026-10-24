import { Link } from "react-router-dom";

const categories = [
  {
    name: "Mobiles",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    name: "Laptops",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    name: "Keyboards",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  },
  {
    name: "Smart Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    name: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    name: "Speakers",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
  },
  {
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
  },
  {
    name: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
  },
  {
    name: "Monitors",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
  },
  {
    name: "Printers",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500",
  },
  {
    name: "Televisions",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
  },
  {
    name: "Storage Devices",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
  },
  {
    name: "Microphones",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500",
  },
  {
    name: "Projectors",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500",
  },
  {
    name: "Power Banks",
    image: "https://images.unsplash.com/photo-1609592806596-b43bada0f2c6?w=500",
  },
  {
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500",
  },
  {
    name: "Office Essentials",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500",
  },
  {
    name: "Computer Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
  },
  {
    name: "Gaming Accessories",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500",
  },
];

const AllCategories = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore All Categories
          </h1>

          <p className="mt-3 text-gray-500">
            Discover products for every part of your life.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-36 overflow-hidden sm:h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4 text-center">
                <h2 className="font-semibold text-gray-800 group-hover:text-violet-700">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllCategories;