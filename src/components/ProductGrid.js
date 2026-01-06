"use client";

import Image from "next/image";
import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { motion } from "framer-motion";
import React, { useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ProductGrid() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Carousel for the modal
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Group products by name with custom normalization
  const groupedProducts = useMemo(() => {
    const groups = {};
    products.forEach((product) => {
      let groupName = product.name;

      // Normalize names for grouping
      if (product.name.includes("Silver Dust")) {
        groupName = "Silver Dust";
      } else if (product.name.includes("TH Wool")) {
        groupName = "TH Wool";
      } else if (product.name.includes("7 Star")) {
        groupName = "7 Star";
      }

      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(product);
    });
    return Object.values(groups);
  }, []);

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
            {groupedProducts.map((group) => {
              const product = group[0]; // Display the first product of the group
              return (
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
                    onImageClick={() => setSelectedGroup(group)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Screen Image Carousel Modal */}
      {selectedGroup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={() => setSelectedGroup(null)}
        >
          <div
            className="relative w-full max-w-4xl h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content area
          >
            {/* Close Button - Outside the carousel but clear */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-[60] p-2 bg-gray-800 rounded-full bg-opacity-50"
              onClick={() => setSelectedGroup(null)}
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

            {/* Carousel Content */}
            <div className="overflow-hidden w-full h-[80vh]" ref={emblaRef}>
              <div className="flex h-full">
                {selectedGroup.map((item, index) => (
                  <div
                    className="flex-[0_0_100%] h-full relative"
                    key={item.id || index}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain rounded-lg"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        priority={index === 0}
                      />
                    </div>
                    {/* Caption if needed */}
                    {item.colors && (
                      <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 p-2">
                        {item.colors}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons (Only if more than 1 image) */}
            {selectedGroup.length > 1 && (
              <>
                <button
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors z-[60]"
                  onClick={scrollPrev}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors z-[60]"
                  onClick={scrollNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
          {/* Background overlay click handler is on the parent div */}
        </div>
      )}
    </>
  );
}
