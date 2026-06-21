import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { Briefcase, TrendingUp, Users, MapPin, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Carriera e sbocchi",
  description: "Sbocchi professionali dei percorsi Mentor. Placement rate, aziende partner, ruoli e opportunità tech nel Sud Italia e da remoto.",
}

const roles = [
  {
    category: "Python",
    color: "teal" as const,
    positions: [
      { title: "Python Developer (Backend)", salary: "€28.000 – €50.000", remote: true },
      { title: "Data Analyst / Data Engineer", salary: "€28.000 – €45.000", remote: true },
      { title: "Automation Engineer", salary: "€25.000 – €42.000", remote: true },
      { title: "DevOps / Platform Engineer", salary: "€35.000 – €60.000", remote: true },
    ],
  },
  {
    category: "Intelligenza Artificiale",
    color: "violet" as const,
    positions: [
      { title: "ML Engineer", salary: "€35.000 – €65.000", remote: true },
      { title: "AI Developer / LLM Engineer", salary: "€38.000 – €70.000", remote: true },
      { title: "Data Scientist", salary: "€32.000 – €58.000", remote: true },
      { title: "AI Product Developer", salary: "€30.000 – €55.000", remote: true },
    ],
  },
  {
    category: "Robotica",
    color: "green" as const,
    positions: [
      { title: "Robotics Developer", salary: "€28.000 – €50.000", remote: false },
      { title: "Embedded Systems Engineer", salary: "€30.000 – €52.000", remote: false },
      { title: "Automation Engineer (industriale)", salary: "€30.000 – €55.000", remote: false },
      { title: "IoT Developer", salary: "€28.000 – €48.000", remote: true },
    ],
  },
]

const colorMap = {
  teal: { badge: "teal" as const, text: "text-teal", bg: "bg-teal/8", border: "border-teal/20", dot: "bg-teal" },
  violet: { badge: "violet" as const, text: "text-violet", bg: "bg-violet/8", border: "border-violet/20", dot: "bg-violet" },
  green: { badge: "green" as const, text: "text-green", bg: "bg-green/8", border: "border-green/20", dot: "bg-green" },
}

const careerServices = [
  {
    icon: Star,
    title: "CV e LinkedIn review",
    desc: "Revisione professionale con focus su come presentare i progetti Mentor e distinguersi nel mercato tech italiano.",
  },
  {
    icon: Users,
    title: "Network aziende partner",
    desc: "Accesso diretto a offerte dalle aziende che conoscono e cercano studenti Mentor. Nessun candidarsi al buio.",
  },
  {
    icon: Briefcase,
    title: "Preparazione colloqui",
    desc: "Mock interview tecnico e comportamentale. Simuliamo colloqui reali con domande usate dalle aziende partner.",
  },
  {
    icon: TrendingUp,
    title: "Career coaching continuo",
    desc: "Follow-up mensile nei 6 mesi dopo il corso. La carriera non finisce alla certificazione — ti seguiamo fino al primo contratto.",
  },
]

export default function CarrieraPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="violet" className="mb-4">Sbocchi professionali</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-4">
              Carriera tech
            </h1>
            <p className="text-muted text-lg">
              I percorsi Mentor aprono porte reali. Ecco i ruoli, le retribuzioni
              e i servizi di placement che offriamo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stat bar */}
      <div className="border-y border-border py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: "94%", label: "Placement entro 6 mesi" },
              { value: "€38K", label: "Salario medio primo anno" },
              { value: "60%", label: "Lavora in full remote" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-extrabold text-3xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Roles by category */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl mb-10">
              Ruoli per percorso
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-8">
            {roles.map((cat, i) => {
              const colors = colorMap[cat.color]
              return (
                <ScrollReveal key={cat.category} delay={i * 0.1}>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="font-heading font-semibold text-lg">{cat.category}</h3>
                      <Badge variant={colors.badge}>{cat.color === "teal" ? "Python" : cat.color === "violet" ? "AI" : "Robotica"}</Badge>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {cat.positions.map((pos) => (
                        <div
                          key={pos.title}
                          className={`flex items-center justify-between p-4 card-glass rounded-xl border ${colors.border}`}
                        >
                          <div>
                            <div className="font-medium text-sm mb-0.5">{pos.title}</div>
                            <div className="text-xs text-muted">{pos.salary}</div>
                          </div>
                          {pos.remote && (
                            <Badge variant="muted" className="ml-2 shrink-0">Remote ok</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="text-xs text-muted mt-6">
              * Range retributivi indicativi basati su dati di mercato italiano 2025 per posizioni junior–mid level.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Career services */}
      <section className="py-24 bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl mb-4">
                Supporto carriera incluso
              </h2>
              <p className="text-muted max-w-lg mx-auto">
                La certificazione è l&apos;inizio. Ti accompagniamo fino al primo contratto.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {careerServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="card-glass rounded-2xl p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-violet" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{service.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Territory */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <MapPin className="w-10 h-10 text-violet" />
            </div>
            <h2 className="font-heading font-bold text-3xl mb-4">
              Sud Italia — scelta, non ripiego
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Il 60% degli studenti Mentor lavora in full remote per aziende
              di tutta Europa — restando in Calabria, Campania, Sicilia, Puglia.
              Il 40% ha trovato posizioni locali in aziende tech e startup che
              stiamo contribuendo a far crescere qui.
            </p>
            <Link href="/iscrizioni#orientamento">
              <button className="inline-flex items-center gap-2 bg-violet text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-violet-dark transition-colors">
                Inizia il tuo percorso
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
