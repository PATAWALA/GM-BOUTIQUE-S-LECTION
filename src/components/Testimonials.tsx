import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#E6E1D8]/40">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-5">
              <span className="w-8 h-px bg-[#1A1A1A]/30" />
              Ils nous font confiance
            </div>
            <h2 className="font-serif text-[36px] lg:text-[52px] leading-[1] font-light tracking-[-0.02em] text-[#1A1A1A]">
              Des mots qui{" "}
              <span className="italic opacity-70">comptent.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#1A1A1A" strokeWidth={0} />
              ))}
            </div>
            <span className="text-[11px] tabular-nums text-[#1A1A1A]/60">
              4.9 / 5 — 240+ clients satisfaits
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="p-7 lg:p-9 rounded-3xl bg-[#EFECE6] border border-[#1A1A1A]/10 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex items-center gap-0.5 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#A8896A" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-serif text-[18px] lg:text-[19px] leading-[1.5] text-[#1A1A1A] italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 pt-6 border-t border-[#1A1A1A]/10">
                <div className="text-[12px] text-[#1A1A1A] font-medium">
                  {t.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 mt-1">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}