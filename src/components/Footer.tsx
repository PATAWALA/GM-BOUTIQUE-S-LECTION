import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-16 lg:pt-20 pb-8">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="rounded-[32px] lg:rounded-[40px] border border-[#1A1A1A]/10 bg-[#E6E1D8]/40 p-10 lg:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <div className="font-serif text-[22px] italic text-[#1A1A1A] mb-5">
                GM Boutique <span className="not-italic opacity-40">&</span>{" "}
                Sélection
              </div>
              <p className="text-[13px] leading-relaxed text-[#1A1A1A]/60 max-w-sm mb-8">
                Event &amp; Boutique. Une sélection exigeante de pièces
                vestimentaires, accessoires et soins bio. Kinshasa — En ligne,
                partout.
              </p>
              <div className="flex items-center gap-2">
                {[
                  { Icon: FaInstagram, href: "#", label: "Instagram" },
                  { Icon: FaFacebookF, href: "#", label: "Facebook" },
                  {
                    Icon: FaWhatsapp,
                    href: "https://wa.me/243900000000",
                    label: "WhatsApp",
                  },
                  { Icon: FaTiktok, href: "#", label: "TikTok" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[#1A1A1A]/15 hover:bg-[#1A1A1A] hover:text-[#EFECE6] hover:border-[#1A1A1A] transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-5">
                Boutique
              </div>
              <ul className="space-y-3 text-[13px] text-[#1A1A1A]/70">
                {["Tout", "Homme", "Femme", "Gamme BIO"].map((item) => (
                  <li key={item}>
                    <a
                      href="#catalogue"
                      className="hover:text-[#1A1A1A] transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div className="lg:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-5">
                Aide
              </div>
              <ul className="space-y-3 text-[13px] text-[#1A1A1A]/70">
                {[
                  "Livraison",
                  "Retours",
                  "Guide des tailles",
                  "FAQ",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#1A1A1A] transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/50 mb-5">
                Contact
              </div>
              <ul className="space-y-4 text-[13px] text-[#1A1A1A]/70">
                <li className="flex items-start gap-3">
                  <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span>Kinshasa, RDC</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span>+243 900 000 000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  <span>contact@gmagence.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/50 px-2">
          <span>
            © {new Date().getFullYear()} GM Agence Event &amp; Boutique
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#1A1A1A]">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[#1A1A1A]">
              Confidentialité
            </a>
            <a href="#" className="hover:text-[#1A1A1A]">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}