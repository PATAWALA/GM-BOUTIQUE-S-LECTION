export type Category = "Homme" | "Femme" | "Gamme BIO";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  tag?: string;
  rating?: number;
}

export const products: Product[] = [
  {
    id: "h-001",
    name: "Costume Sur Mesure Signature",
    category: "Homme",
    price: 480,
    tag: "Best-seller",
    rating: 4.9,
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
    tag: "Icône",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
    description:
      "Mouvement automatique suisse, boîtier acier 40 mm, bracelet cuir pleine fleur. Étanche 50 m. Un classique intemporel.",
  },
  {
    id: "h-003",
    name: "Chaussures en Cuir Oxford",
    category: "Homme",
    price: 240,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&q=80&auto=format&fit=crop",
    description:
      "Oxford en cuir de veau véritable, cousu Blake, semelle gomme antidérapante. Patine à la main, doublure cuir.",
  },
  {
    id: "h-004",
    name: "Manteau Cachemire Long",
    category: "Homme",
    price: 640,
    tag: "Nouveau",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&q=80&auto=format&fit=crop",
    description:
      "Manteau long en cachemire 100%, col tailleur, doublure soie. Tombé impeccable pour les grandes occasions hivernales.",
  },
  {
    id: "f-001",
    name: "Robe d'Exception Soie & Satin",
    category: "Femme",
    price: 350,
    tag: "Édition limitée",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80&auto=format&fit=crop",
    description:
      "Robe longue en soie sauvage, drapé main, dos ouvert subtil. Pièce unique façonnée pour les grandes occasions.",
  },
  {
    id: "f-002",
    name: "Sac à Main Structuré Cuir",
    category: "Femme",
    price: 410,
    tag: "Best-seller",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80&auto=format&fit=crop",
    description:
      "Sac à main en cuir grainé, structure architecturale, fermoir laiton doré. Bandoulière amovible, intérieur suédine.",
  },
  {
    id: "f-003",
    name: "Ensemble Chic Tailleur",
    category: "Femme",
    price: 295,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80&auto=format&fit=crop",
    description:
      "Ensemble veste + pantalon taille haute, tissu crêpe fluide. Lignes nettes, tombé impeccable. Bureau et soirée.",
  },
  {
    id: "f-004",
    name: "Manteau Laine Oversize",
    category: "Femme",
    price: 380,
    tag: "Nouveau",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80&auto=format&fit=crop",
    description:
      "Manteau oversize en laine mélangée, ceinture à nouer, poches passepoilées. Chaleur, allure, élégance.",
  },
  {
    id: "b-001",
    name: "Bouillie Grossissante BIO — 100% Naturelle",
    category: "Gamme BIO",
    price: 45,
    tag: "Best-seller",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1517093602195-b40af9688b46?w=1200&q=80&auto=format&fit=crop",
    description:
      "Formule traditionnelle enrichie : millet, arachide, soja, miel pur. Sans additifs. Prise de poids saine. Pot 1 kg.",
  },
  {
    id: "b-002",
    name: "Soin Éclat Bio Visage & Corps",
    category: "Gamme BIO",
    price: 38,
    tag: "Bio",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80&auto=format&fit=crop",
    description:
      "Huile précieuse karité brut + baobab + vitamine E. Nourrit, unifie et illumine. Certifiée bio, pressée à froid.",
  },
  {
    id: "b-003",
    name: "Savon Noir Artisanal",
    category: "Gamme BIO",
    price: 22,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=1200&q=80&auto=format&fit=crop",
    description:
      "Savon noir africain traditionnel, purifiant et exfoliant. Fabriqué à la main, 100% naturel, sans parfum de synthèse.",
  },
  {
    id: "b-004",
    name: "Coffret Bien-être Complet",
    category: "Gamme BIO",
    price: 89,
    tag: "Coffret",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=80&auto=format&fit=crop",
    description:
      "Coffret cadeau : bouillie BIO 500g + huile précieuse 100ml + savon noir. Idéal pour offrir ou se faire plaisir.",
  },
];

export const categories: ("Tout" | Category)[] = [
  "Tout",
  "Homme",
  "Femme",
  "Gamme BIO",
];