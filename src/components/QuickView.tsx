"use client";

import Image from "next/image";
import { X, Plus, Star, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function QuickView({ product, onClose }: Props) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) setQty(1);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  const open = Boolean(product);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-[#1A1A1A]/50 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[520px] z-[70] bg-[#EFECE6] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {product && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#1A1A1A]/10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/60">
                Aperçu produit
              </span>
              <button
                onClick={onClose}
                aria-label="Fermer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/5 transition"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* Image */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="520px"
                  className="object-cover"
                />
                {product.tag && (
                  <div className="absolute top-5 left-5 px-3 py-1.5 bg-[#EFECE6]/95 backdrop-blur-sm rounded-full text-[9px] uppercase tracking-[0.2em]">
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Infos */}
              <div className="p-6 lg:p-8 space-y-6">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50">
                  <span className="w-6 h-px bg-[#1A1A1A]/30" />
                  {product.category}
                </div>

                <h3 className="font-serif text-[28px] leading-[1.1] font-light text-[#1A1A1A]">
                  {product.name}
                </h3>

                {product.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="#1A1A1A" strokeWidth={0} />
                      ))}
                    </div>
                    <span className="text-[11px] tabular-nums text-[#1A1A1A]/50">
                      {product.rating.toFixed(1)} — Excellent
                    </span>
                  </div>
                )}

                <div className="font-serif text-[32px] leading-none text-[#1A1A1A]">
                  {product.price}
                  <span className="text-[18px] opacity-40">,00 $</span>
                </div>

                <div className="h-px bg-[#1A1A1A]/10" />

                <p className="text-[13.5px] leading-relaxed text-[#1A1A1A]/70">
                  {product.description}
                </p>

                {/* Fiche */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl border border-[#1A1A1A]/10 bg-[#E6E1D8]/40">
                    <div className="text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/50 mb-2">
                      Livraison
                    </div>
                    <div className="text-[12px] text-[#1A1A1A]">
                      Kinshasa 24–72 h
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl border border-[#1A1A1A]/10 bg-[#E6E1D8]/40">
                    <div className="text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/50 mb-2">
                      Qualité
                    </div>
                    <div className="text-[12px] text-[#1A1A1A]">
                      Sélection GM
                    </div>
                  </div>
                </div>

                {/* Quantité */}
                <div className="flex items-center justify-between p-2 rounded-full border border-[#1A1A1A]/15">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/5"
                    aria-label="Diminuer"
                  >
                    <Minus size={13} strokeWidth={1.5} />
                  </button>
                  <span className="text-[13px] tabular-nums">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/5"
                    aria-label="Augmenter"
                  >
                    <Plus size={13} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#1A1A1A]/10 p-6 bg-[#EFECE6]">
              <button
                onClick={() => {
                  for (let i = 0; i < qty; i++) addItem(product);
                  onClose();
                }}
                className="w-full h-14 rounded-full bg-[#1A1A1A] text-[#EFECE6] text-[11px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#A8896A] transition-colors"
              >
                <Plus size={15} strokeWidth={1.5} />
                Ajouter à la sélection — {qty * product.price},00 $
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}