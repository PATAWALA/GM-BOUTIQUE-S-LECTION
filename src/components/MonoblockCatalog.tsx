"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Plus, ArrowUpRight } from "lucide-react";
import { products, categories, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import QuickView from "./QuickView";

type Filter = (typeof categories)[number];

export default function MonoblockCatalog() {
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
    <section id="catalogue" className="scroll-mt-16">
      {/* En-tête éditorial */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 lg:py-24 border-b border-[#1A1A1A]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/60 mb-6">
              <span className="w-10 h-px bg-[#1A1A1A]/40" />
              Le Catalogue — Vol. 01
            </div>
            <h2 className="font-serif text-[40px] lg:text-[68px] leading-[0.92] font-light tracking-[-0.02em] text-[#1A1A1A]">
              Pièces sélectionnées,
              <br />
              <span className="italic opacity-60">une à une.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l border-[#1A1A1A]/15">
            <div className="flex items-baseline justify-between mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50">
                Filtres
              </span>
              <span className="text-[10px] tabular-nums uppercase tracking-[0.3em] text-[#1A1A1A]/50">
                {String(visible.length).padStart(2, "0")} pièces
              </span>
            </div>
            <nav className="flex flex-wrap items-center gap-6 lg:gap-8">
              {categories.map((cat) => {
                const active = cat === filter;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`relative text-[11px] uppercase tracking-[0.24em] pb-2 transition ${
                      active
                        ? "text-[#1A1A1A] underline underline-offset-[6px] decoration-[1px]"
                        : "text-[#1A1A1A]/45 hover:text-[#1A1A1A]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Grille */}
      <div className="max-w-[1600px] mx-auto border-l border-[#1A1A1A]/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#1A1A1A]/15">
          {visible.map((product, idx) => (
            <article
              key={product.id}
              className="group relative border-r border-b border-[#1A1A1A]/15 flex flex-col bg-[#EFECE6]"
            >
              {/* Index */}
              <div className="absolute top-5 left-5 z-20 text-[10px] tabular-nums tracking-[0.3em] text-white mix-blend-difference">
                {String(idx + 1).padStart(2, "0")}
              </div>

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
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />

                {/* Gradient hover */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white">
                    Aperçu rapide
                  </span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.25}
                    className="text-white"
                  />
                </div>
              </button>

              {/* Infos */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6 border-t border-[#1A1A1A]/15">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.32em] text-[#1A1A1A]/45 mb-3">
                    {product.category}
                  </div>
                  <h3 className="font-serif text-[19px] leading-[1.15] text-[#1A1A1A] font-normal">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-end justify-between gap-4 pt-2">
                  <span className="text-[13px] tabular-nums text-[#1A1A1A] tracking-wide">
                    {product.price},00 $
                  </span>

                  <button
                    onClick={() => addItem(product)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition"
                    aria-label={`Ajouter ${product.name}`}
                  >
                    <Plus size={12} strokeWidth={1.25} />
                    Ajouter
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