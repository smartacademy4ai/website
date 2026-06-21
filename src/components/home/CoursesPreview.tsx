import Link from "next/link"
import { ArrowRight, Code2, Brain, Bot } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"

const categories = [
  {
    icon: Code2,
    title: "Python",
    desc: "Da scripting a sistemi distribuiti. FastAPI, Pandas, automazione e ML engineering.",
    slug: "python",
    color: "teal" as const,
    tracks: ["Zero to Hero — 12 sett.", "Professional — 8 sett."],
  },
  {
    icon: Brain,
    title: "Intelligenza Artificiale",
    desc: "Machine learning, reti neurali, LLM, agenti AI e MLOps. Dall'idea alla produzione.",
    slug: "ai",
    color: "violet" as const,
    tracks: ["Zero to Hero — 14 sett.", "Professional — 10 sett."],
  },
  {
    icon: Bot,
    title: "Robotica",
    desc: "Arduino, Raspberry Pi, ROS2, visione artificiale e sistemi autonomi. In laboratorio fisico.",
    slug: "robotica",
    color: "green" as const,
    tracks: ["Zero to Hero — 14 sett.", "Professional — 10 sett."],
  },
]

export function CoursesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="muted" className="mb-4">3 aree di specializzazione</Badge>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
              Scegli il tuo percorso
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Due livelli per ogni area: partiamo da zero o potenziamo le tue basi.
              Ogni corso termina con progetti reali e certificazione.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={i * 0.1}>
              <Link href={`/corsi?category=${cat.slug}`} className="block group">
                <div className="h-full card-glass rounded-2xl p-6 hover:border-violet/30 transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center ${
                      cat.color === "teal"
                        ? "bg-teal/10"
                        : cat.color === "violet"
                        ? "bg-violet/10"
                        : "bg-green/10"
                    }`}
                  >
                    <cat.icon
                      className={`w-6 h-6 ${
                        cat.color === "teal"
                          ? "text-teal"
                          : cat.color === "violet"
                          ? "text-violet"
                          : "text-green"
                      }`}
                    />
                  </div>

                  <h3 className="font-heading font-bold text-xl mb-2">{cat.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{cat.desc}</p>

                  <div className="flex flex-col gap-2 mb-5">
                    {cat.tracks.map((track) => (
                      <div key={track} className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            cat.color === "teal"
                              ? "bg-teal"
                              : cat.color === "violet"
                              ? "bg-violet"
                              : "bg-green"
                          }`}
                        />
                        <span className="text-xs font-mono text-muted">{track}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-violet group-hover:gap-2 transition-all">
                    Vedi percorsi
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/corsi"
              className="text-sm text-muted hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Vedi tutti i 6 percorsi disponibili
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
