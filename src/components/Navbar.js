import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden md:block bg-purple-900 shadow-md fixed w-full z-100 top-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
            >
              Al-Kiswah
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-purple-200 text-lg font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              href="#new-arrivals"
              className="text-white hover:text-purple-200 text-lg font-medium transition duration-300"
            >
              New Arrivals
            </Link>
            <Link
              href="#about-us"
              className="text-white hover:text-purple-200 text-lg font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="#products"
              className="text-white hover:text-purple-200 text-lg font-medium transition duration-300"
            >
              Collection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
