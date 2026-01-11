"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function ProductCard({ product, onImageClick }) {
  const [origin, setOrigin] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-900 transition-shadow duration-300 flex flex-col h-full w-full ${
        isMobile && isInView ? "shadow-2xl shadow-purple-900" : ""
      }`}
    >
      <div
        className="relative h-64 w-full cursor-pointer"
        onClick={() => onImageClick && onImageClick(product)}
      >
        <span
          className={`absolute top-2 right-2 px-3 py-1 text-xs font-bold uppercase rounded-full shadow-md z-10 ${
            product.available
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {product.available ? "In Stock" : "Out of Stock"}
        </span>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex flex-col items-start mb-2 flex-1 w-full">
          <div>
            <p className="text-sm md:text-base text-gray-500 mb-1">
              {product.category}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {product.name}
            </h3>
            {product.colors ? (
              <p className="text-sm text-gray-600 mt-1">
                Colors: {product.colors}
              </p>
            ) : (
              <Link
                href={`https://wa.me/2347078746028?text=${encodeURIComponent(
                  `Hi, Al-Kiswah! Please what colors are available for ${product.name}?\n\nProduct Image: ${origin}${product.image}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 underline mt-1 block"
              >
                Request for Colors
              </Link>
            )}
          </div>
          {product.price > 0 ? (
            <p className="text-lg md:text-xl font-bold text-gray-900 mt-auto pt-4">
              ₦{product.price.toLocaleString()}{" "}
              {product.priceUnit && (
                <span className="text-sm font-normal text-gray-500">
                  {product.priceUnit}
                </span>
              )}
            </p>
          ) : (
            <Link
              href={`https://wa.me/2347078746028?text=${encodeURIComponent(
                `Hi, Al-Kiswah! Please can I get the price for ${product.name}?\n\nProduct Image: ${origin}${product.image}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-bold text-purple-600 underline mt-auto pt-4"
            >
              Request Price
            </Link>
          )}
        </div>
        <Link
          href={
            "https://wa.me/2347078746028?text=" +
            encodeURIComponent(
              `Hi, Al-Kiswah! I'm interested in ${product.name}${
                product.price > 0
                  ? ` for ₦${product.price.toLocaleString()}`
                  : ""
              }.\n\nProduct Image: ${origin}${product.image}`
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
