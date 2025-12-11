import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="hidden md:block bg-purple-900 shadow-md fixed w-full z-100 top-0 overflow-hidden">
      {/* Animated Pattern Background */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute inset-0 w-[200%] h-full animate-[slidePattern_200s_linear_infinite]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="navbar-stripes"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 40L40 0M-10 10L10 -10M30 50L50 30"
                  stroke="rgb(168, 85, 247)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M0 0L40 40M-10 30L10 50M30 -10L50 10"
                  stroke="rgb(168, 85, 247)"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#navbar-stripes)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
