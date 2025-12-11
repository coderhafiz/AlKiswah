"use client";

import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { motion } from "framer-motion";

export default function ProductGrid() {
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
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
