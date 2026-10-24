import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  Camera,
  MessageCircle,
  Play,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Newsletter */}
      <div className="border-b border-gray-800 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stay Updated with{' '}
              <span className="text-purple-400">Nexrora</span>
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Subscribe to get updates about our latest products and offers.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md overflow-hidden rounded-xl bg-white p-1"
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="min-w-0 flex-1 px-3 py-3 text-sm text-gray-900 outline-none sm:w-64"
            />

            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-purple-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>
          </form>

        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">

        {/* Brand */}
        <div>
          <Link to="/" className="mb-5 flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-700 text-white">
              <ShoppingBag size={23} />
            </div>

            <span className="text-2xl font-bold text-white">
              Nex<span className="text-purple-400">rora</span>
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-gray-400">
            Shop smart. Live better. Discover quality products and
            make your everyday shopping experience better with Nexrora.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-700 hover:text-white"
            >
              <Globe size={18} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-700 hover:text-white"
            >
              <Camera size={18} />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-700 hover:text-white"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-700 hover:text-white"
            >
              <Play size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <a href="/category" className="transition hover:text-purple-400">
                Categories
              </a>
            </li>
            <li>
              <a href="/product" className="transition hover:text-purple-400">
                Products
              </a>
            </li>
            <li>
              <Link to="/wishlist" className="transition hover:text-purple-400">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="transition hover:text-purple-400">
                My Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Categories</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="/#category" className="transition hover:text-purple-400">
                Electronics
              </a>
            </li>
            <li>
              <a href="/#category" className="transition hover:text-purple-400">
                Fashion
              </a>
            </li>
            <li>
              <a href="/#category" className="transition hover:text-purple-400">
                Accessories
              </a>
            </li>
            <li>
              <a href="/#product" className="transition hover:text-purple-400">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="/#product" className="transition hover:text-purple-400">
                New Arrivals
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">Contact Us</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail size={19} className="mt-0.5 shrink-0 text-purple-400" />
              <span>support@nexrora.com</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone size={19} className="mt-0.5 shrink-0 text-purple-400" />
              <span>+91 XXXXX XXXXX</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={19} className="mt-0.5 shrink-0 text-purple-400" />
              <span>India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Nexrora. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/privacy" className="transition hover:text-purple-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-purple-400">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer

