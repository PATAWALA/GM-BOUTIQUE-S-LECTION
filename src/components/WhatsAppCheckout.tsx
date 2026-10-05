"use client";

import { useState } from "react";
import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppCheckout() {
  const { items, total, count, updateQuantity, removeItem, clearCart } =
    useCart();
  const [open, setOpen] = useState(false);

  const checkoutUrl = buildWhatsAppLink(items, total);

  return (
    <>
      {/* Floating bar */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 border border-[#1A1A1A] bg-[#EFECE6] px-6 py-4 flex items-center gap-4 shadow-none transition-all duration-300 ${
          count > 0
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        }`}
        aria-label="Ouvrir la sélection"
      >
        <ShoppingBag size={15} strokeWidth={1.25} />
        <span className="text-[11px] uppercase tracking-[0.28em]">
          Ma sélection
        </span>
        <span className="text-[11px] tabular-nums opacity-60">
          {String(count).padStart(2, "0")} · {total} $
        </span>
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-[#1A1A1A]/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panier latéral */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] z-[70] bg-[#EFECE6] border-l border-[#1A1A1A]/20 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#1A1A1A]/15">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/60">
            Ma sélection — {String(count).padStart(2, "0")}
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition"
          >
            <X size={18} strokeWidth={1.25} />
          </button>
        </div>

        {/* Liste */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-8 gap-6">
              <ShoppingBag
                size={28}
                strokeWidth={1}
                className="text-[#1A1A1A]/30"
              />
              <p className="text-[12px] uppercase tracking-[0.28em] text-[#1A1A1A]/50">
                Votre sélection est vide
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-[11px] uppercase tracking-[0.25em] underline underline-offset-4"
              >
                Parcourir le catalogue
              </button>
            </div>
          ) : (
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-5 p-6 border-b border-[#1A1A1A]/15"
                >
                  <div className="w-20 h-24 shrink-0 border border-[#1A1A1A]/15 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 mb-2">
                        {item.category}
                      </div>
                      <div className="text-[13px] text-[#1A1A1A] leading-snug truncate">
                        {item.name}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#1A1A1A]/20">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2.5 py-1.5 text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                          aria-label="Diminuer"
                        >
                          <Minus size={11} strokeWidth={1.25} />
                        </button>
                        <span className="px-3 text-[11px] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2.5 py-1.5 text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                          aria-label="Augmenter"
                        >
                          <Plus size={11} strokeWidth={1.25} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-[12px] tabular-nums text-[#1A1A1A]">
                          {item.quantity * item.price} $
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition"
                          aria-label="Retirer"
                        >
                          <Trash2 size={13} strokeWidth={1.25} />
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
          <div className="border-t border-[#1A1A1A]/15 p-6 space-y-6">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#1A1A1A]/60">
              <span>Sous-total</span>
              <span className="tabular-nums text-[#1A1A1A]">
                {total} $
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/40">
              <span>Livraison</span>
              <span>Calculée sur WhatsApp</span>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-[#1A1A1A] py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-[#1A1A1A] hover:text-[#EFECE6] transition"
            >
              Finaliser la commande sur WhatsApp
            </a>

            <button
              onClick={clearCart}
              className="w-full text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/50 hover:text-[#1A1A1A] underline underline-offset-4 transition"
            >
              Vider la sélection
            </button>
          </div>
        )}
      </aside>
    </>
  );
}