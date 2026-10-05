import Image from "next/image";
import { Instagram } from "lucide-react";

const shots = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85&auto=format&fit=crop",
];

export default function InstagramFeed() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-5">
              <span className="w-8 h-px bg-[#1A1A1A]/30" />
              Instagram
            </div>
            <h2 className="font-serif text-[36px] lg:text-[52px] leading-[1] font-light tracking-[-0.02em] text-[#1A1A1A]">
              @gm.boutique
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-3 h-12 px-6 rounded-full border border-[#1A1A1A]/20 text-[11px] uppercase tracking-[0.2em] hover:border-[#1A1A1A] transition self-start lg:self-end"
          >
            <Instagram size={14} strokeWidth={1.5} />
            Suivre
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {shots.map((src, i) => (
            <a
              key={i}
              href="#"
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Instagram ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/30 transition-colors flex items-center justify-center">
                <Instagram
                  size={20}
                  strokeWidth={1.5}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}