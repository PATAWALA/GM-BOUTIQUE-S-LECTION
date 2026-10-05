import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 lg:pt-36 pb-12 lg:pb-20">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        {/* Bandeau meta */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-10 lg:mb-14 fade-up fade-up-1">
          <span className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#1A1A1A]/30" />
            Édition — Automne 2025
          </span>
          <span className="hidden md:block">Vol. 01 — Kinshasa · En ligne</span>
          <span className="hidden md:flex items-center gap-2">
            <Star size={11} fill="#1A1A1A" strokeWidth={0} />
            4.9 / 5 — 240+ clients
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Colonne texte */}
          <div className="lg:col-span-6 fade-up fade-up-2">
            <h1 className="font-serif text-[52px] sm:text-[76px] lg:text-[88px] xl:text-[100px] leading-[0.92] font-light tracking-[-0.03em] text-[#1A1A1A] text-balance">
              L&apos;Élégance
              <br />
              <span className="italic opacity-70">et</span> le soin{" "}
              <span className="italic text-[#A8896A]">redéfinis.</span>
            </h1>

            <p className="mt-8 max-w-lg text-[14px] leading-relaxed text-[#1A1A1A]/65">
              Une sélection exclusive de vêtements, d&apos;accessoires et de
              soins bio. Chaque pièce est choisie avec exigence — pour
              habiller l&apos;essentiel et révéler ce qui compte vraiment.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#catalogue"
                className="group inline-flex items-center gap-3 h-12 px-6 bg-[#1A1A1A] text-[#EFECE6] rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-[#A8896A] transition-all"
              >
                Explorer la sélection
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#catalogue"
                className="inline-flex items-center gap-3 h-12 px-6 rounded-full border border-[#1A1A1A]/20 text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-all"
              >
                Gamme BIO
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "500+", l: "Pièces sélectionnées" },
                { n: "24h", l: "Livraison Kinshasa" },
                { n: "100%", l: "Bio · Naturel" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-[26px] leading-none text-[#1A1A1A]">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 leading-tight">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne images */}
          <div className="lg:col-span-6 fade-up fade-up-3">
            <div className="grid grid-cols-12 gap-4 lg:gap-5">
              {/* Grande image — Femme */}
              <div className="col-span-8 relative aspect-[4/5] rounded-3xl overflow-hidden group bg-[#E6E1D8]">
                <Image
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=85&auto=format&fit=crop"
                  alt="Sélection femme"
                  fill
                  priority
                  sizes="(max-width: 1024px) 66vw, 33vw"
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-[#EFECE6]/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]">
                  Femme
                </div>
              </div>

              {/* Colonne droite — Homme + Bio */}
              <div className="col-span-4 flex flex-col gap-4 lg:gap-5">
                {/* Homme */}
                <div className="relative aspect-square rounded-3xl overflow-hidden group bg-[#E6E1D8]">
                  <Image
                    src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=85&auto=format&fit=crop"
                    alt="Sélection homme"
                    fill
                    priority
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#EFECE6]/90 backdrop-blur-sm rounded-full text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]">
                    Homme
                  </div>
                </div>

                {/* Bio */}
                <div className="relative aspect-square rounded-3xl overflow-hidden group bg-[#E6E1D8]">
                  <Image
                    src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=85&auto=format&fit=crop"
                    alt="Sélection bio"
                    fill
                    priority
                    sizes="(max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#EFECE6]/90 backdrop-blur-sm rounded-full text-[9px] uppercase tracking-[0.2em] text-[#1A1A1A]">
                    Bio
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50">
              <span>© GM Agence — Lookbook 01</span>
              <span className="flex items-center gap-2">
                <span className="w-8 h-px bg-[#1A1A1A]/30" />
                Fait avec soin
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}