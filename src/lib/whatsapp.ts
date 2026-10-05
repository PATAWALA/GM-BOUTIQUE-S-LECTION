import type { CartItem } from "@/context/CartContext";

export const WHATSAPP_NUMBER = "243900000000";

export function buildWhatsAppLink(items: CartItem[], total: number): string {
  if (items.length === 0) {
    const msg = encodeURIComponent(
      "Bonjour GM Boutique, je souhaite passer une commande."
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  }

  const lines: string[] = [];
  lines.push("*🖤 Nouvelle commande — GM BOUTIQUE & SÉLECTION*");
  lines.push("");
  items.forEach((item, idx) => {
    lines.push(
      `${idx + 1}. ${item.name}\n   Qté: ${item.quantity} × ${item.price}$ = ${item.quantity * item.price}$`
    );
  });
  lines.push("");
  lines.push(`*TOTAL : ${total} $*`);
  lines.push("");
  lines.push("Merci de me confirmer la disponibilité et la livraison.");

  const msg = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}