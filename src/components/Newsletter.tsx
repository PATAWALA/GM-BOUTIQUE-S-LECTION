"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="rounded-[32px] lg:rounded-[40px] border border-[#1A1A1A]/10 bg-[#1A1A1A] text-[#EFECE6] p-10 lg:p-20 overflow-hidden relative">
          {/* Decor */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#A8896A]/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#A8896A]/10 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#EFECE6]/50 mb-5">
                <span className="w-8 h-px bg-[#EFECE6]/30" />
                Newsletter
              </div>
              <h2 className="font-serif text-[36px] lg:text-[52px] leading-[1] font-light tracking-[-0.02em]">
                Rejoignez le{" "}
                <span className="italic text-[#A8896A]">cercle.</span>
              </h2>
              <p className="mt-5 text-[13.5px] leading-relaxed text-[#EFECE6]/60 max-w-md">
                Recevez en avant-première nos nouvelles pièces, éditions
                limitées et offres exclusives. Pas de spam — promis.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={submit}
                className="flex flex-col sm:flex-row gap-3 p-2 rounded-full border border-[#EFECE6]/20 bg-[#EFECE6]/5 backdrop-blur-sm"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 bg-transparent px-6 py-3.5 text-[13px] text-[#EFECE6] placeholder:text-[#EFECE6]/40 outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#EFECE6] text-[#1A1A1A] text-[11px] uppercase tracking-[0.2em] hover:bg-[#A8896A] hover:text-[#EFECE6] transition-colors whitespace-nowrap"
                >
                  {sent ? "Merci !" : "S'inscrire"}
                  <ArrowRight
                    size={13}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[#EFECE6]/40">
                En vous inscrivant, vous acceptez notre politique de
                confidentialité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}