import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  UserRound,
  ShoppingCart,
  Heart,
  Menu,
  X,
} from 'lucide-react'

const Navbaar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/product' },
    { name: 'Category', path: '/category' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'Cart', path: '/cart' },
    { name: 'Login', path: '/login' },
  ]

  return (
    <nav className="relative z-50 w-full bg-white border-b border-gray-100">

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto min-h-[76px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-950">
            <span className="text-violet-600">N</span>exrora
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          <Link to="/" className="text-violet-600 font-medium">
            Home
          </Link>

          <Link to="/product" className="text-gray-700 hover:text-violet-600 transition-colors">
            Products
          </Link>

        <Link to="/all-categories">Categories</Link>

        </div>

        {/* Search Bar */}
        <div className="hidden md:block relative flex-1 max-w-[280px]">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full bg-gray-100 py-2.5 pl-10 pr-4 text-sm outline-none border border-transparent focus:border-violet-300 focus:bg-white transition-colors"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="hidden sm:block text-gray-800 hover:text-violet-600 transition-colors"
          >
            <Heart size={22} />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative text-gray-800 hover:text-violet-600 transition-colors"
          >
            <ShoppingCart size={22} />

            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-violet-600 text-[10px] text-white">
              0
            </span>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            aria-label="Login"
            className="hidden sm:block text-gray-800 hover:text-violet-600 transition-colors"
          >
            <UserRound size={22} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-900"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full bg-gray-100 py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-violet-300"
          />
        </div>
      </div>

      {/* Background Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 top-0 bg-black/40 lg:hidden transition-opacity duration-300 ${
          menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[60] w-72 max-w-[85vw] bg-white shadow-2xl lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Menu Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">
            <span className="text-violet-600">N</span>exrora
          </h2>

          <button onClick={closeMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="mx-4 mt-3 border-t border-gray-100 px-2 py-5">
          <p className="text-sm text-gray-500">
            Shop Smart. Live Better.
          </p>
        </div>

      </div>
    </nav>
  )
}

export default Navbaar

