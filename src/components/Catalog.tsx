"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Plus, Star, ArrowUpRight } from "lucide-react";
import { products, categories, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import QuickView from "./QuickView";

type Filter = (typeof categories)[number];

export default function Catalog() {
  const [filter, setFilter] = useState<Filter>("Tout");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Filter;
      if (categories.includes(detail)) setFilter(detail);
    };
    window.addEventListener("gm:setCategory", handler);
    return () => window.removeEventListener("gm:setCategory", handler);
  }, []);

  const visible = useMemo(
    () =>
      filter === "Tout"
        ? products
        : products.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="catalogue" className="scroll-mt-24 py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* En-tête */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-5">
              <span className="w-8 h-px bg-[#1A1A1A]/30" />
              Le Catalogue — Vol. 01
            </div>
            <h2 className="font-serif text-[36px] lg:text-[56px] leading-[1] font-light tracking-[-0.02em] text-[#1A1A1A]">
              Pièces sélectionnées,
              <br />
              <span className="italic opacity-70">une à une.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50">
              {String(visible.length).padStart(2, "0")} pièces
            </div>
            <nav className="flex flex-wrap items-center gap-2 p-1.5 bg-[#E6E1D8]/60 rounded-full border border-[#1A1A1A]/10">
              {categories.map((cat) => {
                const active = cat === filter;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 text-[11px] uppercase tracking-[0.18em] rounded-full transition-all whitespace-nowrap ${
                      active
                        ? "bg-[#1A1A1A] text-[#EFECE6]"
                        : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {visible.map((product) => (
            <article
              key={product.id}
              className="group bg-[#EFECE6] border border-[#1A1A1A]/10 rounded-3xl overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(26,26,26,0.25)] transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <button
                onClick={() => setQuickView(product)}
                className="relative aspect-[4/5] overflow-hidden w-full"
                aria-label={`Voir ${product.name}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                {product.tag && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#EFECE6]/95 backdrop-blur-sm rounded-full text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]">
                    {product.tag}
                  </div>
                )}

                {/* Hover action */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <div className="px-3 py-2 bg-[#EFECE6]/95 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center gap-2">
                    Aperçu rapide
                    <ArrowUpRight size={11} strokeWidth={1.5} />
                  </div>
                </div>
              </button>

              {/* Infos */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 mb-2.5">
                    {product.category}
                  </div>
                  <h3 className="font-serif text-[17px] leading-[1.2] text-[#1A1A1A] font-normal">
                    {product.name}
                  </h3>

                  {product.rating && (
                    <div className="flex items-center gap-1.5 mt-3">
                      <Star
                        size={11}
                        fill="#1A1A1A"
                        strokeWidth={0}
                      />
                      <span className="text-[10px] tabular-nums text-[#1A1A1A]/50">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]/8">
                  <span className="font-serif text-[18px] text-[#1A1A1A] tabular-nums">
                    {product.price}
                    <span className="text-[13px] opacity-40">,00 $</span>
                  </span>

                  <button
                    onClick={() => addItem(product)}
                    className="w-9 h-9 rounded-full bg-[#1A1A1A] text-[#EFECE6] flex items-center justify-center hover:bg-[#A8896A] transition-colors"
                    aria-label={`Ajouter ${product.name}`}
                  >
                    <Plus size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <QuickView product={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
}