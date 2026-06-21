import type { Metadata } from "next"
import { teachers } from "@/data/teachers"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Docenti",
  description: "Il team Mentor: professionisti attivi nel settore tech, non insegnanti di cattedra. Mentorship reale da chi lavora ogni giorno nel campo.",
}

export default function DocentiPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="violet" className="mb-4">Il nostro team</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-4">
              Docenti e mentori
            </h1>
            <p className="text-muted text-lg">
              Professionisti attivi nel settore. Lavorano ogni giorno con le
              tecnologie che insegnano. La differenza si sente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Teachers grid */}
      <section className="py-16 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {teachers.map((teacher, i) => (
              <ScrollReveal key={teacher.id} delay={i * 0.1}>
                <div className="card-glass rounded-2xl p-8">
                  <div className="grid sm:grid-cols-[1fr_2fr] gap-6">
                    {/* Avatar placeholder */}
                    <div>
                      <div className="w-20 h-20 rounded-2xl gradient-violet-teal flex items-center justify-center text-white font-heading font-bold text-2xl mb-4">
                        {teacher.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-muted mb-4">{teacher.role}</p>
                      <div className="flex items-center gap-2">
                        {teacher.socials.linkedin && (
                          <a
                            href={teacher.socials.linkedin}
                            aria-label="LinkedIn"
                            className="flex items-center gap-1 text-xs text-muted hover:text-violet transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            LinkedIn
                          </a>
                        )}
                        {teacher.socials.github && (
                          <a
                            href={teacher.socials.github}
                            aria-label="GitHub"
                            className="flex items-center gap-1 text-xs text-muted hover:text-violet transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {teacher.bio}
                      </p>

                      {teacher.specialties.length > 0 && (
                        <div>
                          <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
                            Specialità
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {teacher.specialties.map((s) => (
                              <span
                                key={s}
                                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-violet/10 text-violet border border-violet/20"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join as instructor CTA */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="card-glass rounded-2xl p-8 border border-violet/20">
              <h2 className="font-heading font-bold text-2xl mb-3">
                Sei un professionista tech?
              </h2>
              <p className="text-muted mb-6">
                Stiamo costruendo il team. Se hai esperienza reale in Python,
                AI, Robotica o ambiti collegati e vuoi contribuire, scrivici.
              </p>
              <a
                href="mailto:team@mentor.it"
                className="inline-flex items-center gap-2 bg-violet text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-violet-dark transition-colors"
              >
                Contattaci
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
