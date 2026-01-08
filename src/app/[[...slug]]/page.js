import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";
import NewArrivals from "../../components/NewArrivals";
import AboutUs from "../../components/AboutUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <NewArrivals />
      <ProductGrid />
      <AboutUs />
      <Footer />
    </main>
  );
}
