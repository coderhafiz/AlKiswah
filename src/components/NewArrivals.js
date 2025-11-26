"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "./ProductCard";
import products from "../data/products.json";

export default function NewArrivals() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const newArrivals = products.filter((product) => product.newArrival);

  if (newArrivals.length === 0) return null;

  return (
    <section className="py-12 bg-purple-50 " id="new-arrivals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-8 text-center">
          New Arrivals
        </h2>
        <div className="overflow-hidden py-16 px-3" ref={emblaRef}>
          <div className="flex">
            {newArrivals.map((product) => (
              <div
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
