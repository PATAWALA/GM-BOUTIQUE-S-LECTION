export type Category = "Homme" | "Femme" | "Gamme BIO";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // en USD
  image: string;
  description: string;
}

export const products: Product[] = [
  // ---------- HOMME ----------
  {
    id: "h-001",
    name: "Costume Sur Mesure Signature",
    category: "Homme",
    price: 480,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80&auto=format&fit=crop",
    description:
      "Costume trois pièces taillé à la main, laine italienne Super 130's. Coupe droite, épaules structurées, finitions invisibles. Livré avec housse GM Agence.",
  },
  {
    id: "h-002",
    name: "Montre de Luxe Automatique",
    category: "Homme",
    price: 920,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
    description:
      "Mouvement automatique suisse, boîtier acier 40 mm, bracelet cuir pleine fleur. Étanche 50 m. Un classique intemporel pour l'homme exigeant.",
  },
  {
    id: "h-003",
    name: "Chaussures en Cuir Oxford",
    category: "Homme",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&q=80&auto=format&fit=crop",
    description:
      "Oxford en cuir de veau véritable, cousu Blake, semelle gomme antidérapante. Patine à la main, doublure cuir. Confort immédiat.",
  },

  // ---------- FEMME ----------
  {
    id: "f-001",
    name: "Robe d'Exception Soie & Satin",
    category: "Femme",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80&auto=format&fit=crop",
    description:
      "Robe longue en soie sauvage, drapé main, dos ouvert subtil. Pièce unique façonnée pour les grandes occasions. Livrée avec pochon de protection.",
  },
  {
    id: "f-002",
    name: "Sac à Main Structuré Cuir",
    category: "Femme",
    price: 410,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
    description:
      "Sac à main en cuir grainé, structure architecturale, fermoir laiton doré. Bandoulière amovible. Intérieur suédine et poches organisatrices.",
  },
  {
    id: "f-003",
    name: "Ensemble Chic Tailleur",
    category: "Femme",
    price: 295,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
    description:
      "Ensemble veste + pantalon taille haute, tissu crêpe fluide. Lignes nettes, tombé impeccable. Idéal bureau et soirée.",
  },

  // ---------- GAMME BIO ----------
  {
    id: "b-001",
    name: "Bouillie Grossissante BIO — 100% Naturelle",
    category: "Gamme BIO",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1517093602195-b40af9688b46?w=1200&q=80&auto=format&fit=crop",
    description:
      "Formule traditionnelle enrichie : millet, arachide, soja, miel pur. Sans additifs, sans conservateurs. Prise de poids saine et progressive. Pot de 1 kg — préparation 5 min.",
  },
  {
    id: "b-002",
    name: "Soin Éclat Bio Visage & Corps",
    category: "Gamme BIO",
    price: 38,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80&auto=format&fit=crop",
    description:
      "Huile précieuse karité brut + baobab + vitamine E. Nourrit, unifie et illumine. Certifié bio, pressée à froid, sans parfum de synthèse.",
  },
];

export const categories: ("Tout" | Category)[] = [
  "Tout",
  "Homme",
  "Femme",
  "Gamme BIO",
];