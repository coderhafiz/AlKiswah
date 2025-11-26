"use client";

import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { motion } from "framer-motion";

export default function ProductGrid() {
  return (
    <>
      <section className="py-16 bg-purple-100" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
