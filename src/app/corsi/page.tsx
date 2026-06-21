import type { Metadata } from "next"
import Link from "next/link"
import { courses } from "@/data/courses"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { Clock, ArrowRight, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Corsi",
  description: "Catalogo completo dei percorsi Mentor: Python, AI e Robotica. Zero to Hero e Professional. Formazione tecnico-pratica nel Sud Italia.",
}

const categoryLabels: Record<string, string> = {
  python: "Python",
  ai: "Intelligenza Artificiale",
  robotica: "Robotica",
}

const colorMap = {
  violet: { bg: "bg-violet/10", text: "text-violet", badge: "violet" as const, dot: "bg-violet" },
  teal: { bg: "bg-teal/10", text: "text-teal", badge: "teal" as const, dot: "bg-teal" },
  green: { bg: "bg-green/10", text: "text-green", badge: "green" as const, dot: "bg-green" },
}

export default function CorsiPage() {
  const zeroToHero = courses.filter((c) => c.level === "zero-to-hero")
  const professional = courses.filter((c) => c.level === "professional")

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="muted" className="mb-4">6 percorsi disponibili</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-4">
              Tutti i corsi
            </h1>
            <p className="text-muted text-lg max-w-xl mx-auto">
              Due livelli per ogni area. Parti da zero o potenzia le basi che
              hai già. Ogni percorso termina con progetti reali.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Level legend */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-muted">Zero to Hero — da zero fino ad avanzato</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-violet" />
            <span className="text-muted">Professional — per chi ha già basi solide</span>
          </div>
        </div>
      </div>

      {/* Zero to Hero */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="font-heading font-bold text-2xl">Zero to Hero</h2>
              <Badge variant="teal">Parte da zero</Badge>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {zeroToHero.map((course, i) => {
              const colors = colorMap[course.color]
              return (
                <ScrollReveal key={course.slug} delay={i * 0.1}>
                  <Link href={`/corsi/${course.slug}`} className="block group">
                    <div className="card-glass rounded-2xl p-6 h-full hover:border-violet/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant={colors.badge} className="mb-2">
                            {course.badge}
                          </Badge>
                          <h3 className="font-heading font-bold text-xl">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted">{course.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                        {course.description.slice(0, 120)}...
                      </p>

                      <div className="flex items-center gap-4 mb-4 text-xs text-muted">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </div>
                        <div className="font-semibold text-foreground">
                          €{course.price.toLocaleString("it-IT")}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {course.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface-2 text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                        {course.technologies.length > 4 && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface-2 text-muted">
                            +{course.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-sm font-medium text-violet group-hover:gap-2 transition-all">
                        Dettagli corso <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Professional */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="font-heading font-bold text-2xl">Professional</h2>
              <Badge variant="violet">Basi solide richieste</Badge>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {professional.map((course, i) => {
              const colors = colorMap[course.color]
              return (
                <ScrollReveal key={course.slug} delay={i * 0.1}>
                  <Link href={`/corsi/${course.slug}`} className="block group">
                    <div className="card-glass rounded-2xl p-6 h-full hover:border-violet/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant={colors.badge} className="mb-2">
                            {course.badge}
                          </Badge>
                          <h3 className="font-heading font-bold text-xl">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted">{course.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                        {course.description.slice(0, 120)}...
                      </p>

                      <div className="flex items-center gap-4 mb-4 text-xs text-muted">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </div>
                        <div className="font-semibold text-foreground">
                          €{course.price.toLocaleString("it-IT")}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {course.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface-2 text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                        {course.technologies.length > 4 && (
                          <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface-2 text-muted">
                            +{course.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-sm font-medium text-violet group-hover:gap-2 transition-all">
                        Dettagli corso <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ScrollReveal>
          <div className="rounded-2xl bg-violet/5 border border-violet/20 p-8 text-center">
            <h3 className="font-heading font-bold text-2xl mb-2">
              Non sai quale percorso fa per te?
            </h3>
            <p className="text-muted mb-6">
              Prenota una call orientamento gratuita — 30 minuti con un mentore
              reale per capire da dove partire.
            </p>
            <Link href="/iscrizioni#orientamento">
              <button className="inline-flex items-center gap-2 bg-violet text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-violet-dark transition-colors">
                Prenota call gratuita
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
