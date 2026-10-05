import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-16 border-b border-[#1A1A1A]/15">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">
        {/* Texte */}
        <div className="flex flex-col justify-between p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/15">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#1A1A1A]/60">
            <span className="w-8 h-px bg-[#1A1A1A]/40" />
            Édition 2025 — Kinshasa / En ligne
          </div>

          <div className="py-12">
            <h1 className="text-[42px] sm:text-[58px] lg:text-[72px] leading-[0.95] font-light tracking-[-0.02em] text-[#1A1A1A]">
              L&apos;Élégance <span className="italic font-serif opacity-60">&</span>
              <br />
              Le Soin
              <br />
              Redéfinis.
            </h1>

            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-[#1A1A1A]/70">
              Sélection exclusive de vêtements, accessoires et soins bio.
              Chaque pièce est choisie avec exigence pour habiller
              l&apos;essentiel — et révéler ce qui compte.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="#catalogue"
                className="text-[11px] uppercase tracking-[0.28em] text-[#1A1A1A] underline underline-offset-4 decoration-[1px]"
              >
                Explorer la sélection
              </a>
              <a
                href="#catalogue"
                className="text-[11px] uppercase tracking-[0.28em] text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition"
              >
                → Gamme BIO
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50">
            <span>Homme · Femme · Bio</span>
            <span>01 / 03</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[88vh]">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=85&auto=format&fit=crop"
            alt="Sélection GM Boutique"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-white mix-blend-difference">
            <span>Lookbook 01</span>
            <span>GM Agence</span>
          </div>
        </div>
      </div>
    </section>
  );
}