import type { Metadata } from "next"
import { testimonials } from "@/data/testimonials"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { Quote, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Storie studenti",
  description: "Storie reali di studenti Mentor che hanno cambiato carriera o trovato il primo lavoro tech nel Sud Italia.",
}

export default function TestimonializePage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="teal" className="mb-4">Storie reali</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-4">
              Cambiamenti concreti
            </h1>
            <p className="text-muted text-lg">
              Non slogan. Non foto stock. Studenti con nomi e cognomi che hanno
              costruito qualcosa di diverso per la loro vita — partendo da qui.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={(i % 2) * 0.1}>
                <div className="card-glass rounded-2xl p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-violet/40 mb-4 shrink-0" />

                  <p className="text-foreground/85 leading-relaxed text-base mb-6 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Outcome highlight */}
                  <div className="mb-6 p-3 rounded-xl bg-teal/8 border border-teal/20">
                    <p className="text-xs font-mono text-teal">{t.outcome}</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-heading font-semibold">{t.name}</div>
                      <div className="text-sm text-muted">{t.role}</div>
                      <div className="text-sm text-muted">{t.company}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 text-xs text-muted justify-end mb-1">
                        <MapPin className="w-3 h-3" />
                        {t.location}
                      </div>
                      <Badge variant="muted">{t.course}</Badge>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl mb-4">
              La prossima storia è la tua
            </h2>
            <p className="text-muted mb-8">
              Inizia con una call gratuita. Capiamo insieme quale percorso
              ti porta dove vuoi arrivare.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/iscrizioni#orientamento">
                <Button size="lg">Prenota call gratuita</Button>
              </Link>
              <Link href="/corsi">
                <Button size="lg" variant="secondary">Vedi i corsi</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
