export default function Manifesto() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-6">
              <span className="w-8 h-px bg-[#1A1A1A]/30" />
              Manifeste
            </div>
            <h2 className="font-serif text-[40px] lg:text-[64px] leading-[0.98] font-light tracking-[-0.02em] text-[#1A1A1A] text-balance">
              Le luxe, c&apos;est la{" "}
              <span className="italic text-[#A8896A]">justesse.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#1A1A1A]/10">
            <p className="text-[16px] lg:text-[18px] leading-relaxed text-[#1A1A1A]/70 mb-10 max-w-xl">
              Chez GM Boutique, nous croyons qu&apos;une sélection juste vaut
              mieux qu&apos;un catalogue infini. Chaque pièce que nous
              proposons a été pensée, touchée, validée à la main — pour sa
              matière, sa coupe, son histoire.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  t: "Sélection",
                  d: "Ni lot, ni série — uniquement l'essentiel, choisi un par un.",
                },
                {
                  n: "02",
                  t: "Bio & Naturel",
                  d: "Formules 100% naturelles, matières premières traçables.",
                },
                {
                  n: "03",
                  t: "Direct",
                  d: "Commande WhatsApp en un clic. Livraison rapide et soignée.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="p-6 rounded-3xl bg-[#E6E1D8]/50 border border-[#1A1A1A]/10"
                >
                  <div className="text-[10px] tabular-nums tracking-[0.3em] text-[#A8896A] mb-6">
                    {item.n}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.24em] text-[#1A1A1A] mb-3">
                    {item.t}
                  </div>
                  <p className="text-[12.5px] leading-relaxed text-[#1A1A1A]/60">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}