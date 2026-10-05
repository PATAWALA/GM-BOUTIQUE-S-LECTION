const items = [
  "Sélection exclusive",
  "Homme",
  "Femme",
  "Gamme BIO",
  "Kinshasa",
  "Livraison 24–72 h",
  "Paiement sécurisé",
  "GM Agence",
];

export default function Marquee() {
  return (
    <div className="py-8 lg:py-10 border-y border-[#1A1A1A]/10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 px-10 font-serif text-[22px] lg:text-[28px] italic text-[#1A1A1A]/70"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8896A]" />
          </span>
        ))}
      </div>
    </div>
  );
}