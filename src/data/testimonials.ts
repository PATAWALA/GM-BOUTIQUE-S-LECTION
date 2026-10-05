export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    role: "Cliente fidèle — Kinshasa",
    quote:
      "Un service exceptionnel. La robe est d'une qualité rare, et la livraison a été ultra rapide. GM Boutique est devenu mon adresse de référence.",
    rating: 5,
  },
  {
    id: "t2",
    name: "David K.",
    role: "Entrepreneur",
    quote:
      "Mon costume sur mesure est parfait. Coupe impeccable, tissu sublime. On sent le vrai savoir-faire. Je recommande à 100%.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Aïcha B.",
    role: "Cliente BIO",
    quote:
      "La bouillie grossissante est un vrai trésor. Naturelle, efficace, goûteuse. Et le service WhatsApp rend tout si simple !",
    rating: 5,
  },
];