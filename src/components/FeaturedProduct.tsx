import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function FeaturedProduct() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="rounded-[32px] lg:rounded-[40px] border border-[#1A1A1A]/10 bg-[#E6E1D8]/40 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-square lg:aspect-auto lg:min-h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=85&auto=format&fit=crop"
                alt="Robe d'exception"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-[#EFECE6] rounded-full text-[10px] uppercase tracking-[0.2em]">
                Édition limitée
              </div>
            </div>

            {/* Texte */}
            <div className="lg:col-span-6 p-8 lg:p-14 xl:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-6">
                <span className="w-8 h-px bg-[#1A1A1A]/30" />
                Pièce du moment
              </div>

              <h2 className="font-serif text-[38px] lg:text-[56px] leading-[1] font-light tracking-[-0.02em] text-[#1A1A1A] mb-6">
                Robe d&apos;Exception
                <br />
                <span className="italic opacity-70">Soie & Satin.</span>
              </h2>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill="#1A1A1A"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-[#1A1A1A]/50 tabular-nums">
                  5.0 — 42 avis
                </span>
              </div>

              <p className="text-[14px] leading-relaxed text-[#1A1A1A]/65 mb-8 max-w-md">
                Robe longue en soie sauvage, drapé main, dos ouvert subtil.
                Pièce unique façonnée pour les grandes occasions. Livrée avec
                pochon de protection en coton bio.
              </p>

              <div className="flex items-baseline gap-4 mb-10">
                <span className="font-serif text-[40px] leading-none text-[#1A1A1A]">
                  350
                  <span className="text-[20px] opacity-40">,00 $</span>
                </span>
                <span className="text-[13px] text-[#1A1A1A]/40 line-through">
                  420,00 $
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#1A1A1A] text-[#EFECE6] text-[10px] uppercase tracking-[0.15em]">
                  -16%
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#catalogue"
                  className="group inline-flex items-center gap-3 h-12 px-6 bg-[#1A1A1A] text-[#EFECE6] rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-[#2a2a2a] transition-all"
                >
                  Découvrir la pièce
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#catalogue"
                  className="inline-flex items-center h-12 px-6 rounded-full border border-[#1A1A1A]/20 text-[11px] uppercase tracking-[0.2em] hover:border-[#1A1A1A] transition"
                >
                  Voir la collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}