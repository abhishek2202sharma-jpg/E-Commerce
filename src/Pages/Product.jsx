import React from 'react'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    category: 'Electronics',
    price: 2499,
    oldPrice: 3499,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Accessories',
    price: 1999,
    oldPrice: 2999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    badge: 'Popular',
  },
  {
    id: 3,
    name: 'Wireless Camera',
    category: 'Electronics',
    price: 4999,
    oldPrice: 5999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
    badge: 'Trending',
  },
  {
    id: 4,
    name: 'Premium Sneakers',
    category: 'Fashion',
    price: 2999,
    oldPrice: 3999,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    badge: 'New',
  },
  {
    id: 5,
    name: 'Wireless Keyboard',
    category: 'Electronics',
    price: 1499,
    oldPrice: 1999,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600',
    badge: 'Hot Deal',
  },
  {
    id: 6,
    name: 'Classic Backpack',
    category: 'Fashion',
    price: 1799,
    oldPrice: 2499,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
    badge: 'Trending',
  },
  {
    id: 7,
    name: 'IPhone 14 Smartphone',
    category: 'Electronics',
    price: 45000,
    oldPrice: 60000,
    rating: 4.9,
   image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
    badge: 'Top Rated',
  },
  {
    id: 8,
    name: 'Stylish Sunglasses',
    category: 'Accessories',
    price: 999,
    oldPrice: 1499,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600',
    badge: 'New Arrival',
  },
]


const Product = () => {
  return (
    <section
      id="product"
      className="w-full scroll-mt-20 px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">

          <p className="mb-5">
            <span className="rounded-2xl bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Our Products
            </span>
          </p>

          <h2 className="py-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured <span className="text-purple-700">Products</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Discover our handpicked selection of top-notch products,
            curated to meet your needs and elevate your lifestyle.
          </p>

        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-50">

                <img 
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                />

                {/* Badge */}
                <span className="absolute left-3 top-3 rounded-full bg-purple-700 px-3 py-1 text-xs font-semibold text-white">
                  {product.badge}
                </span>

                {/* Wishlist */}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow transition hover:bg-purple-700 hover:text-white"
                >
                  <Heart size={18} />
                </button>

              </div>

              {/* Product Details */}
              <div className="p-5">

                <p className="mb-2 text-sm text-gray-500">
                  {product.category}
                </p>

                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-1">
                  <Star
                    size={17}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-semibold">
                    {product.rating}
                  </span>

                  <span className="text-sm text-gray-400">
                    (Customer rating)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xl font-bold text-purple-700">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-700 py-3 font-semibold text-white transition hover:bg-purple-800 active:scale-95"
                >
                  <ShoppingCart size={19} />
                  Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* View All Button */}
     <div className="mt-10 text-center">
  <Link
    to="/products"
    className="inline-block rounded-xl border-2 border-purple-700 px-8 py-3 font-semibold text-purple-700 transition hover:bg-purple-700 hover:text-white"
  >
    View All Products →
  </Link>
</div>

      </div>
    </section>
  )
}

export default Product

