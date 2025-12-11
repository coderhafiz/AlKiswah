export default function AboutUs() {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 w-full">
            <img
              src="/IMG-20251204-WA0113.jpg"
              alt="About Al-Kiswah"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-6">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-6">
              At Al-Kiswah, we blend elegance, culture, and craftsmanship to
              create timeless fashion. Our mission is to offer premium-quality
              wear that reflects both modern sophistication and rich tradition.
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-6">
              From Senator wears, Kampala, Irish wears, Guinea materials, and
              Ankara, to finely curated wristwatches and cufflinks, every item
              is selected and crafted with exceptional attention to detail. We
              ensure you look refined, confident, and stylish—no matter the
              occasion.
            </p>
            <p className="text-lg md:text-xl text-gray-900">
              At Al-Kiswah, your elegance is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
