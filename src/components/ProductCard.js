import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-900 transition-shadow duration-300 flex flex-col ">
      <div className="relative h-64 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm md:text-base text-gray-500 mb-1">
              {product.category}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {product.name}
            </h3>
          </div>
          <p className="text-lg md:text-xl font-bold text-gray-900">
            ₦{product.price.toFixed(2)}
          </p>
        </div>
        <Link
          href={
            "https://wa.me/2347078746028?text=" +
            encodeURIComponent(
              `Hi, Al-Kiswah! I'm interested in ${
                product.name
              } for ₦${product.price.toFixed(2)}\n\nProduct Image: ${
                product.image
              }`
            )
          }
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded mt-4 md:mt-6 text-base md:text-lg transition duration-300 flex items-center justify-center gap-2"
        >
          Buy Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
