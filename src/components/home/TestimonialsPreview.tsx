import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { testimonials } from "@/data/testimonials"

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
              Storie reali, cambiamenti reali
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Studenti che hanno cambiato carriera o trovato il primo lavoro tech nel Sud Italia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <div className="card-glass rounded-2xl p-6 h-full flex flex-col">
                <Quote className="w-6 h-6 text-violet/50 mb-4 shrink-0" />
                <p className="text-sm leading-relaxed text-foreground/80 mb-5 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-heading font-semibold text-sm">{t.name}</span>
                    <span className="text-muted text-xs">— {t.location}</span>
                  </div>
                  <div className="text-xs text-muted mb-2">{t.role} · {t.company}</div>
                  <div className="text-xs font-mono text-teal bg-teal/10 border border-teal/20 rounded-lg px-2 py-1 inline-block">
                    {t.outcome}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/testimonianze"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-violet hover:text-violet-light transition-colors"
            >
              Leggi tutte le storie
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
