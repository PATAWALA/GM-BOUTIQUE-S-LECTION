"use client";

import Image from "next/image";
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CartDrawer() {
  const {
    items,
    total,
    count,
    updateQuantity,
    removeItem,
    clearCart,
    isOpen,
    closeCart,
  } = useCart();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const checkoutUrl = buildWhatsAppLink(items, total);

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[80] bg-[#1A1A1A]/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[520px] z-[90] bg-[#EFECE6] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#1A1A1A]/10">
          <div className="flex items-center gap-3">
            <ShoppingBag size={16} strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/70">
              Ma sélection — {String(count).padStart(2, "0")}
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Fermer"
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/5 transition"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Liste */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#E6E1D8] flex items-center justify-center">
                <ShoppingBag
                  size={22}
                  strokeWidth={1.25}
                  className="text-[#1A1A1A]/40"
                />
              </div>
              <div>
                <p className="font-serif text-[20px] text-[#1A1A1A] mb-2">
                  Votre sélection est vide
                </p>
                <p className="text-[12px] text-[#1A1A1A]/50">
                  Ajoutez vos premières pièces favorites.
                </p>
              </div>
              <button
                onClick={closeCart}
                className="inline-flex items-center gap-3 h-11 px-6 rounded-full bg-[#1A1A1A] text-[#EFECE6] text-[11px] uppercase tracking-[0.2em] hover:bg-[#A8896A] transition"
              >
                Parcourir le catalogue
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 p-3 rounded-3xl border border-[#1A1A1A]/10 bg-[#E6E1D8]/30"
                >
                  <div className="relative w-20 h-24 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0 py-1">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 mb-1.5">
                        {item.category}
                      </div>
                      <div className="font-serif text-[15px] text-[#1A1A1A] leading-snug truncate">
                        {item.name}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center rounded-full border border-[#1A1A1A]/15 bg-[#EFECE6]">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/5"
                          aria-label="Diminuer"
                        >
                          <Minus size={11} strokeWidth={1.5} />
                        </button>
                        <span className="px-3 text-[11px] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/5"
                          aria-label="Augmenter"
                        >
                          <Plus size={11} strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-serif text-[15px] tabular-nums text-[#1A1A1A]">
                          {item.quantity * item.price}
                          <span className="text-[11px] opacity-40"> $</span>
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#1A1A1A]/5 text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                          aria-label="Retirer"
                        >
                          <Trash2 size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#1A1A1A]/10 p-6 bg-[#EFECE6] space-y-5">
            <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.24em] text-[#1A1A1A]/60">
              <span>Sous-total</span>
              <span className="font-serif text-[20px] tabular-nums text-[#1A1A1A] normal-case tracking-normal">
                {total}
                <span className="text-[13px] opacity-40"> ,00 $</span>
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-[#1A1A1A]/40">
              <span>Livraison</span>
              <span>Calculée sur WhatsApp</span>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full h-14 rounded-full bg-[#1A1A1A] text-[#EFECE6] text-[11px] uppercase tracking-[0.25em] hover:bg-[#A8896A] transition-colors"
            >
              Finaliser sur WhatsApp
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <button
              onClick={clearCart}
              className="w-full text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition"
            >
              Vider la sélection
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

