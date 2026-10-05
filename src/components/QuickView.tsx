"use client";

import Image from "next/image";
import { X, Plus } from "lucide-react";
import { useEffect } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function QuickView({ product, onClose }: Props) {
  const { addItem } = useCart();

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
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-[#1A1A1A]/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Tiroir droit */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] z-[70] bg-[#EFECE6] border-l border-[#1A1A1A]/20 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {product && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#1A1A1A]/15">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/60">
                Aperçu produit
              </span>
              <button
                onClick={onClose}
                aria-label="Fermer"
                className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition"
              >
                <X size={18} strokeWidth={1.25} />
              </button>
            </div>

            {/* Scroll */}
            <div className="flex-1 overflow-y-auto">
              <div className="relative aspect-[4/5] w-full border-b border-[#1A1A1A]/15">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="480px"
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50">
                  {product.category}
                </div>
                <h3 className="text-[22px] leading-tight font-light text-[#1A1A1A]">
                  {product.name}
                </h3>
                <div className="text-[16px] tabular-nums text-[#1A1A1A]">
                  {product.price} $
                </div>

                <div className="h-px bg-[#1A1A1A]/15" />

                <p className="text-[13px] leading-relaxed text-[#1A1A1A]/70">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-0 border border-[#1A1A1A]/15">
                  <div className="p-4 border-r border-[#1A1A1A]/15">
                    <div className="text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/50 mb-2">
                      Livraison
                    </div>
                    <div className="text-[12px] text-[#1A1A1A]">
                      Kinshasa 24–72 h
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/50 mb-2">
                      Qualité
                    </div>
                    <div className="text-[12px] text-[#1A1A1A]">
                      Sélection GM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer action */}
            <div className="border-t border-[#1A1A1A]/15 p-6">
              <button
                onClick={() => {
                  addItem(product);
                  onClose();
                }}
                className="w-full border border-[#1A1A1A] text-[#1A1A1A] py-4 text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#1A1A1A] hover:text-[#EFECE6] transition"
              >
                <Plus size={14} strokeWidth={1.25} />
                Ajouter à la sélection
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}