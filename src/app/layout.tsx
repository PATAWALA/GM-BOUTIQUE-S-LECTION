import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GM Boutique & Sélection — L'Élégance et le Soin",
  description:
    "Sélection exclusive de vêtements, accessoires et soins bio. Homme · Femme · Gamme BIO. Kinshasa / En ligne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#EFECE6] text-[#1A1A1A] antialiased font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}