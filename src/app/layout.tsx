import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GM BOUTIQUE & SÉLECTION — Élégance & Soin",
  description:
    "Sélection exclusive de vêtements, accessoires et soins bio. Homme · Femme · Gamme BIO. Kinshasa / En ligne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#EFECE6] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}