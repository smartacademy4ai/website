import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Users, Hammer, Award, Briefcase } from "lucide-react"

const steps = [
  {
    icon: Users,
    step: "01",
    title: "Call orientamento gratuita",
    desc: "Parli con un mentore reale. Capiamo insieme quale percorso si adatta al tuo obiettivo, partendo da dove sei adesso.",
  },
  {
    icon: Hammer,
    step: "02",
    title: "Impari costruendo",
    desc: "Nessuna slide infinita. Dal primo giorno scrivi codice reale, costruisci progetti, ricevi feedback diretto dai mentori.",
  },
  {
    icon: Award,
    step: "03",
    title: "Certificazione e portfolio",
    desc: "Ottieni una certificazione spendibile e un portfolio di progetti reali che parlano meglio di qualunque CV.",
  },
  {
    icon: Briefcase,
    step: "04",
    title: "Accesso a colloqui",
    desc: "Ti mettiamo in contatto diretto con aziende partner. Preparazione colloqui, LinkedIn review, career coaching inclusi.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4">
              Come funziona
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Un percorso strutturato dalla prima call fino al primo lavoro.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.1}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%+0.75rem)] w-6 border-t border-dashed border-border" />
                )}

                <div className="card-glass rounded-2xl p-6 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-violet" />
                    </div>
                    <span className="font-mono text-xs text-muted">{step.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
