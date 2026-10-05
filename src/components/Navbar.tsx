"use client";

import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCatalog = (cat?: string) => {
    setOpen(false);
    const el = document.getElementById("catalogue");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (cat) {
      window.dispatchEvent(new CustomEvent("gm:setCategory", { detail: cat }));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div
            className={`flex items-center justify-between gap-6 px-5 lg:px-8 h-14 rounded-full border transition-all duration-500 ${
              scrolled
                ? "bg-[#EFECE6]/85 backdrop-blur-xl border-[#1A1A1A]/10 shadow-[0_10px_40px_-20px_rgba(26,26,26,0.25)]"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-[15px] tracking-wide text-[#1A1A1A] italic whitespace-nowrap"
            >
              GM Boutique <span className="not-italic opacity-40">&</span>{" "}
              <span className="not-italic uppercase tracking-[0.15em] text-[12px]">
                Sélection
              </span>
            </button>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCatalog(cat)}
                  className="px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#1A1A1A]/70 hover:text-[#1A1A1A] rounded-full hover:bg-[#1A1A1A]/5 transition"
                >
                  {cat}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                aria-label="Recherche"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full hover:bg-[#1A1A1A]/5 transition text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
              >
                <Search size={16} strokeWidth={1.5} />
              </button>

              <button
                onClick={openCart}
                className="relative flex items-center gap-2 h-9 px-4 rounded-full border border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition text-[11px] uppercase tracking-[0.18em]"
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                <span className="tabular-nums">
                  {String(count).padStart(2, "0")}
                </span>
              </button>

              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#1A1A1A]/5 transition"
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
              >
                {open ? (
                  <X size={18} strokeWidth={1.5} />
                ) : (
                  <Menu size={18} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 lg:hidden transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="pt-24 px-4">
          <div className="bg-[#EFECE6] border border-[#1A1A1A]/10 rounded-3xl p-6 shadow-[0_20px_60px_-30px_rgba(26,26,26,0.4)]">
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCatalog(cat)}
                  className="text-left px-4 py-3 rounded-2xl text-[13px] uppercase tracking-[0.18em] text-[#1A1A1A]/80 hover:bg-[#1A1A1A]/5 hover:text-[#1A1A1A] transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}