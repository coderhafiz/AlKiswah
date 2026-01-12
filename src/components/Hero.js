"use client";

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 80 }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  ]);

  const heroImages = [
    "/hero_carousel/IMG-20251204-WA0051.jpg",
    "/hero_carousel/IMG-20251204-WA0055.jpg",
    "/hero_carousel/IMG-20251204-WA0070.jpg",
    "/hero_carousel/IMG-20251204-WA0091.jpg",
    "/hero_carousel/IMG-20251204-WA0097.jpg",
    "/hero_carousel/IMG-20251204-WA0121.jpg",
  ];

  return (
    <div className="relative bg-gray-900 min-h-[90vh] h-auto flex items-center justify-center overflow-hidden py-20">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((src, index) => (
            <div className="relative w-full h-full flex-[0_0_100%]" key={index}>
              <Image
                src={src}
                alt={`Hero Slide ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover opacity-40"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="md:hidden mb-8">
          <h1
            className="text-4xl font-bold text-purple-600 text-shadow-md text-shadow-black"
            // style={{ WebkitTextStroke: "1px white" }}
          >
            Al-Kiswah
          </h1>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6">
          Elevate Your Style
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Discover the latest trends in fashion. Premium quality material for
          every occasion.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="#products"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-purple-600 hover:bg-purple-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl lg:text-2xl transition duration-300 transform hover:scale-105"
          >
            Browse Our Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>

          <Link
            href="https://wa.link/1qfd9o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl lg:text-2xl transition duration-300 transform hover:scale-105"
          >
            Shop on WhatsApp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
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
    </div>
  );
}
