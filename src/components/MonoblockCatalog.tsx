"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
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
      {/* En-tête + filtres */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-14 border-b border-[#1A1A1A]/15">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/60 mb-5">
              <span className="w-8 h-px bg-[#1A1A1A]/40" />
              Le Catalogue
            </div>
            <h2 className="text-[28px] lg:text-[36px] font-light tracking-[-0.01em] text-[#1A1A1A]">
              Pièces sélectionnées, une à une.
            </h2>
          </div>

          {/* Filtres texte soulignés */}
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
                      : "text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Grille monobloc — bords fins, zéro carte détachée */}
      <div className="max-w-[1600px] mx-auto border-l border-[#1A1A1A]/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#1A1A1A]/15">
          {visible.map((product) => (
            <article
              key={product.id}
              className="group border-r border-b border-[#1A1A1A]/15 flex flex-col"
            >
              {/* Image brute */}
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
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </button>

              {/* Infos */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 mb-3">
                    {product.category}
                  </div>
                  <h3 className="text-[14px] leading-snug text-[#1A1A1A] font-normal">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <span className="text-[13px] tabular-nums text-[#1A1A1A]">
                    {product.price} $
                  </span>

                  <button
                    onClick={() => addItem(product)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition"
                    aria-label={`Ajouter ${product.name}`}
                  >
                    <Plus size={13} strokeWidth={1.25} />
                    Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <QuickView
        product={quickView}
        onClose={() => setQuickView(null)}
      />
    </section>
  );
}