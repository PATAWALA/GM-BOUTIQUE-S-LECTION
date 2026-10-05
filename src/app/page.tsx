import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MonoblockCatalog from "@/components/MonoblockCatalog";
import WhatsAppCheckout from "@/components/WhatsAppCheckout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <main className="relative min-h-screen">
        <HeroSection />
        <MonoblockCatalog />

        {/* Bandeau signature */}
        <section className="border-b border-[#1A1A1A]/15">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/50 mb-5">
                01 — Sélection
              </div>
              <p className="text-[13px] leading-relaxed text-[#1A1A1A]/75">
                Chaque pièce est validée à la main. Ni lot, ni série :
                uniquement ce que nous porterions nous-mêmes.
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/50 mb-5">
                02 — Bio
              </div>
              <p className="text-[13px] leading-relaxed text-[#1A1A1A]/75">
                Notre gamme bien-être est 100% naturelle. Formules
                traditionnelles, matières premières traçables.
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/50 mb-5">
                03 — Direct
              </div>
              <p className="text-[13px] leading-relaxed text-[#1A1A1A]/75">
                Commande finalisée sur WhatsApp en un clic. Livraison
                Kinshasa sous 24–72 h, expédition internationale sur demande.
              </p>
            </div>
          </div>
        </section>

        <Footer />

        {/* Barre latérale décorative panier */}
        <WhatsAppCheckout />

        {/* Dégradé vertical subtil — bord droit de la page */}
        <div
          aria-hidden
          className="pointer-events-none fixed top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#1A1A1A]/10 to-transparent z-30"
        />
      </main>
    </CartProvider>
  );
}