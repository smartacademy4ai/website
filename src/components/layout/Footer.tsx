import Link from "next/link"
import { Zap, ExternalLink } from "lucide-react"

const footerLinks = {
  Formazione: [
    { href: "/corsi", label: "Tutti i corsi" },
    { href: "/corsi?level=zero-to-hero", label: "Zero to Hero" },
    { href: "/corsi?level=professional", label: "Professional" },
    { href: "/eventi", label: "Workshop & eventi" },
  ],
  Azienda: [
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/docenti", label: "Il team" },
    { href: "/testimonianze", label: "Storie studenti" },
    { href: "/carriera", label: "Sbocchi professionali" },
  ],
  Supporto: [
    { href: "/iscrizioni", label: "Richiedi info" },
    { href: "/faq", label: "FAQ" },
    { href: "/iscrizioni#orientamento", label: "Call orientamento" },
  ],
}

const socials = [
  { label: "Instagram", href: "#", abbr: "IG" },
  { label: "LinkedIn", href: "#", abbr: "LI" },
  { label: "YouTube", href: "#", abbr: "YT" },
  { label: "GitHub", href: "#", abbr: "GH" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-violet-teal flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">Mentor</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Creiamo i nuovi lavori del futuro nel Sud Italia. Laboratori
              pratici in Python, AI e Robotica.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, abbr }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center text-muted hover:text-foreground hover:bg-violet/10 hover:text-violet transition-colors text-[10px] font-mono font-bold"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Mentor. Tutti i diritti riservati. Sud Italia.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/termini" className="text-xs text-muted hover:text-foreground transition-colors">
              Termini
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
