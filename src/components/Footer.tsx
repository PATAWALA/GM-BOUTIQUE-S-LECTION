import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A]/15">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 border-l border-r border-[#1A1A1A]/15">
        {/* Colonne 1 */}
        <div className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#1A1A1A]/15">
          <div className="text-[12px] tracking-[0.28em] uppercase text-[#1A1A1A] mb-6">
            GM AGENCE
          </div>
          <p className="text-[12px] leading-relaxed text-[#1A1A1A]/60 max-w-xs">
            Event & Boutique. Sélection exigeante de pièces vestimentaires,
            accessoires et soins bio. Kinshasa — En ligne, partout.
          </p>
        </div>

        {/* Colonne 2 */}
        <div className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#1A1A1A]/15">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-6">
            Navigation
          </div>
          <ul className="space-y-3 text-[12px] text-[#1A1A1A]/80">
            <li>
              <a
                href="#catalogue"
                className="hover:text-[#1A1A1A] underline-offset-4 hover:underline"
              >
                Catalogue
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                className="hover:text-[#1A1A1A] underline-offset-4 hover:underline"
              >
                Gamme BIO
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                className="hover:text-[#1A1A1A] underline-offset-4 hover:underline"
              >
                Nouveautés
              </a>
            </li>
            <li>
              <a
                href="#catalogue"
                className="hover:text-[#1A1A1A] underline-offset-4 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="p-8 lg:p-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-6">
            Contact
          </div>
          <ul className="space-y-3 text-[12px] text-[#1A1A1A]/80">
            <li>Kinshasa, RDC</li>
            <li>contact@gmagence.com</li>
            <li>+243 900 000 000</li>
          </ul>

          <div className="flex items-center gap-5 mt-8">
            <a href="#" aria-label="Instagram" className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition">
              <Instagram size={16} strokeWidth={1.25} />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition">
              <Facebook size={16} strokeWidth={1.25} />
            </a>
            <a href="#" aria-label="Email" className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition">
              <Mail size={16} strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-[#1A1A1A]/15">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/50">
          <span>© {new Date().getFullYear()} GM Agence Event & Boutique</span>
          <span className="flex items-center gap-6">
            <a href="#" className="hover:text-[#1A1A1A]">Mentions légales</a>
            <a href="#" className="hover:text-[#1A1A1A]">Confidentialité</a>
          </span>
        </div>
      </div>
    </footer>
  );
}