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
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <Marquee />
        <div className="reveal">
          <Categories />
        </div>
        <div className="reveal">
          <FeaturedProduct />
        </div>
        <div className="reveal">
          <Catalog />
        </div>
        <div className="reveal">
          <Manifesto />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <InstagramFeed />
        </div>
        <div className="reveal">
          <Newsletter />
        </div>
        <Footer />
        <CartDrawer />
        <ScrollReveal />
      </main>
    </>
  );
}