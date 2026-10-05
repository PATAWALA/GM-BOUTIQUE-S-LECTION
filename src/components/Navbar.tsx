"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const scrollToCatalog = (cat?: string) => {
    setOpen(false);
    const el = document.getElementById("catalogue");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (cat) {
      window.dispatchEvent(
        new CustomEvent("gm:setCategory", { detail: cat })
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EFECE6]/95 backdrop-blur-sm border-b border-[#1A1A1A]/15">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[13px] tracking-[0.28em] font-medium text-[#1A1A1A] uppercase"
        >
          GM BOUTIQUE <span className="opacity-40">&</span> SÉLECTION
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollToCatalog(cat)}
              className="text-[11px] uppercase tracking-[0.22em] text-[#1A1A1A]/70 hover:text-[#1A1A1A] underline underline-offset-4 decoration-transparent hover:decoration-[#1A1A1A] transition"
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Right — Cart + mobile toggle */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToCatalog()}
            className="relative flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#1A1A1A]"
            aria-label="Voir la sélection"
          >
            <ShoppingBag size={16} strokeWidth={1.25} />
            <span className="tabular-nums">{String(count).padStart(2, "0")}</span>
          </button>

          <button
            className="lg:hidden text-[#1A1A1A]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} strokeWidth={1.25} /> : <Menu size={18} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#1A1A1A]/15">
          <div className="flex flex-col px-6 py-6 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToCatalog(cat)}
                className="text-left text-[12px] uppercase tracking-[0.22em] text-[#1A1A1A]/80 hover:text-[#1A1A1A] underline underline-offset-4 decoration-transparent hover:decoration-[#1A1A1A] transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}