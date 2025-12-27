"use client";

import Image from "next/image";
import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { motion } from "framer-motion";
import React from "react";

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  return (
    <>
      <section
        className="relative py-16 bg-purple-100 overflow-hidden"
        id="products"
      >
        {/* Animated Pattern Background */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute inset-0 w-[200%] h-full animate-[slidePattern_200s_linear_infinite]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="diagonal-stripes"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Diagonal lines going down-right */}
                  <path
                    d="M0 40L40 0M-10 10L10 -10M30 50L50 30"
                    stroke="rgb(168, 85, 247)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                  />
                  {/* Diagonal lines going down-left (crossing) */}
                  <path
                    d="M0 0L40 40M-10 30L10 50M30 -10L50 10"
                    stroke="rgb(168, 85, 247)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              Our Collection
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-500">
              Handpicked items just for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 ">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex "
              >
                <ProductCard
                  product={product}
                  onImageClick={setSelectedProduct}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2 bg-gray-800 rounded-full bg-opacity-50"
              onClick={() => setSelectedProduct(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              className="object-contain rounded-lg shadow-2xl"
              sizes="100vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
