import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Al-Kiswah</h3>
            <p className="text-gray-400 text-white md:text-lg">
              Quality | Affordable | Trusted
            </p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white md:text-lg">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#new-arrivals"
                  className="text-gray-400 hover:text-white transition"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-gray-400 hover:text-white transition"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="#about-us"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Contact</h4>

            <p className="text-gray-400 mb-2 text-base md:text-lg">
              <Link
                href="https://www.instagram.com/alkiswahclothings?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white transition"
              >
                Instagram: @alkiswahclothings
              </Link>
            </p>
            <p className="text-gray-400 text-base md:text-lg mb-2">
              <Link
                href="https://wa.link/1qfd9o"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp: 07078746028
              </Link>
            </p>
            <p className="text-gray-400 text-base md:text-lg mb-2">
              <Link
                href="alkiswahclothings@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Email: alkiswahclothings@gmail.com
              </Link>
            </p>
            <p className="text-gray-400 text-base md:text-lg mb-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61574947510905"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Facebook: Alkiswahclothings
              </Link>
            </p>
            <p className="text-gray-400 mb-2 text-base md:text-lg mt-5 ">
              <Link
                href="https://maps.app.goo.gl/C6MR8ZJzLukWpmiY6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 mb-2 text-base md:text-lg mt-5 hover:text-white transition"
              >
                N0.5, Aromokeye Pharmacy Shopping Complex, Opposite A-division,
                Ilorin, Kwara State
              </Link>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Al-Kiswah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
