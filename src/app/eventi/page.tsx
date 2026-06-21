import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Eventi e workshop",
  description: "Calendario eventi, workshop intensivi e open day Mentor. Partecipa gratuitamente ai prossimi appuntamenti.",
}

const events = [
  {
    id: "1",
    title: "Open Day Mentor — Napoli",
    type: "Open Day",
    date: "Sabato 28 Giugno 2026",
    time: "10:00 – 13:00",
    location: "Napoli, sede da confermare",
    description:
      "Visita la nostra sede, conosci il team e i mentori, scopri i corsi in partenza e fai tutte le domande che vuoi. Ingresso libero, posti limitati.",
    tags: ["Gratuito", "In presenza"],
    color: "violet" as const,
    cta: "Registrati",
  },
  {
    id: "2",
    title: "Workshop: Python per l'automazione",
    type: "Workshop",
    date: "Domenica 6 Luglio 2026",
    time: "14:00 – 18:00",
    location: "Online (Zoom)",
    description:
      "4 ore pratiche: automatizza task ripetitivi con Python. Dalla lettura di CSV a Web Scraping. Livello: principiante con basi minime di Python.",
    tags: ["Gratuito", "Online", "Principiante"],
    color: "teal" as const,
    cta: "Registrati",
  },
  {
    id: "3",
    title: "Workshop: Costruisci il tuo primo agente AI",
    type: "Workshop",
    date: "Sabato 19 Luglio 2026",
    time: "10:00 – 17:00",
    location: "Napoli, laboratorio Mentor",
    description:
      "Full day workshop. Costruiamo un agente AI funzionale da zero — con LangGraph, tool use e memoria persistente. Livello: intermedio.",
    tags: ["€49", "In presenza", "Intermedio"],
    color: "violet" as const,
    cta: "Iscriviti",
  },
  {
    id: "4",
    title: "Hackathon: Smart Robotics Challenge",
    type: "Hackathon",
    date: "5–6 Settembre 2026",
    time: "Tutto il weekend",
    location: "Bari, laboratorio partner",
    description:
      "48 ore per costruire un sistema robotico intelligente in team. Premi per i migliori 3 team. Aperto a studenti Mentor e non.",
    tags: ["Gratuito per studenti Mentor", "Team", "Avanzato"],
    color: "green" as const,
    cta: "Iscriviti al team",
  },
]

const colorMap = {
  violet: { badge: "violet" as const, border: "border-violet/20", bg: "bg-violet/5", dot: "bg-violet" },
  teal: { badge: "teal" as const, border: "border-teal/20", bg: "bg-teal/5", dot: "bg-teal" },
  green: { badge: "green" as const, border: "border-green/20", bg: "bg-green/5", dot: "bg-green" },
}

export default function EventiPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="violet" className="mb-4">Prossimi appuntamenti</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-4">
              Eventi e workshop
            </h1>
            <p className="text-muted text-lg">
              Open day gratuiti, workshop pratici intensivi e hackathon. Vieni
              a toccare con mano il metodo Mentor prima di iscriverti.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Events list */}
      <section className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {events.map((event, i) => {
              const colors = colorMap[event.color]
              return (
                <ScrollReveal key={event.id} delay={i * 0.1}>
                  <div className={`card-glass rounded-2xl p-6 border ${colors.border}`}>
                    <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant={colors.badge}>{event.type}</Badge>
                          {event.tags.map((tag) => (
                            <Badge key={tag} variant="muted">{tag}</Badge>
                          ))}
                        </div>
                        <h3 className="font-heading font-bold text-xl mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed mb-4">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <Link href="/iscrizioni">
                          <button className="inline-flex items-center gap-1.5 text-sm font-medium text-violet hover:text-violet-light transition-colors whitespace-nowrap">
                            {event.cta}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Newsletter */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 rounded-2xl bg-violet/5 border border-violet/20 p-8 text-center">
              <Users className="w-8 h-8 text-violet mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">
                Non perdere il prossimo evento
              </h3>
              <p className="text-muted text-sm mb-6">
                Iscriviti alla newsletter — annunci di nuovi eventi, workshop e
                open day in anteprima.
              </p>
              <form className="flex gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-violet text-white rounded-xl text-sm font-medium hover:bg-violet-dark transition-colors whitespace-nowrap"
                >
                  Iscriviti
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
