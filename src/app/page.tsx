import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import FeaturedProduct from "@/components/FeaturedProduct";
import Catalog from "@/components/Catalog";
import Manifesto from "@/components/Manifesto";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <Marquee />
        <Categories />
        <FeaturedProduct />
        <Catalog />
        <Manifesto />
        <Testimonials />
        <InstagramFeed />
        <Newsletter />
        <Footer />
        <CartDrawer />
      </main>
    </>
  );
}