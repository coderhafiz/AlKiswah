"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

export default function NewArrivals() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const newArrivals = products.filter((product) => product.newArrival);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (newArrivals.length === 0) return null;

  return (
    <>
      <section className="py-12 bg-purple-50 " id="new-arrivals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4 md:mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              New Arrivals
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-500">
              Fresh styles just for you.
            </p>
          </div>
          <div className="relative group">
            <div className="overflow-hidden py-4 md:py-16 px-3" ref={emblaRef}>
              <div className="flex">
                {newArrivals.map((product) => (
                  <div
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                    key={product.id}
                  >
                    <ProductCard
                      product={product}
                      onImageClick={setSelectedProduct}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 md:hidden hover:bg-white"
              onClick={scrollPrev}
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 md:hidden hover:bg-white"
              onClick={scrollNext}
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
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
