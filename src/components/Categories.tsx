import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const cats = [
  {
    name: "Homme",
    count: "120 pièces",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&q=85&auto=format&fit=crop",
  },
  {
    name: "Femme",
    count: "180 pièces",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000&q=85&auto=format&fit=crop",
  },
  {
    name: "Gamme BIO",
    count: "40 produits",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1000&q=85&auto=format&fit=crop",
  },
];

export default function Categories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-5">
              <span className="w-8 h-px bg-[#1A1A1A]/30" />
              Catégories
            </div>
            <h2 className="font-serif text-[36px] lg:text-[52px] leading-[1] font-light tracking-[-0.02em] text-[#1A1A1A]">
              Trois univers,
              <br />
              <span className="italic opacity-70">une seule exigence.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-[#1A1A1A]/60">
            Du vestiaire masculin aux soins bio, chaque catégorie répond à un
            même niveau d&apos;exigence et de raffinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cats.map((c) => (
            <a
              key={c.name}
              href="#catalogue"
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] block bg-[#E6E1D8]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-white/70 mb-2">
                    {c.count}
                  </div>
                  <div className="font-serif text-[32px] lg:text-[40px] leading-none text-white italic">
                    {c.name}
                  </div>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#1A1A1A] transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}