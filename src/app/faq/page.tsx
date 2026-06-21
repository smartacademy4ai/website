"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const faqs = [
  {
    q: "Devo avere esperienza precedente per iscrivermi ai corsi Zero to Hero?",
    a: "No. I percorsi Zero to Hero partono davvero da zero — senza assumere conoscenza di programmazione o matematica avanzata. L'unico requisito è un PC (Windows, Mac o Linux) e una connessione internet.",
  },
  {
    q: "Come si svolge un corso? Tutto online o in presenza?",
    a: "Formato ibrido. Le sessioni pratiche intensive si tengono il weekend in presenza nei nostri laboratori. Le sessioni di teoria e follow-up sono online. La mentorship 1:1 è online, in orari concordati. Non è richiesto essere fisicamente presenti ogni sessione.",
  },
  {
    q: "Chi sono i docenti? Hanno esperienza reale nel settore?",
    a: "Sì — è una delle cose a cui teniamo di più. I nostri mentori lavorano attivamente nel settore: sono backend engineer, ML researcher, robotics engineer. Non sono insegnanti di cattedra. Questo significa che il codice che ti fanno scrivere è il codice che usano ogni giorno.",
  },
  {
    q: "Cosa include la certificazione alla fine del corso?",
    a: "La certificazione attesta le competenze acquisite con firma del corso e dei mentori. Non è un pezzo di carta accademico — è un portfolio di progetti reali che puoi linkare nel CV. Le aziende partner ci chiedono esplicitamente candidati Mentor.",
  },
  {
    q: "Quanto costano i corsi? Ci sono opzioni di pagamento rateale?",
    a: "I prezzi vanno da €1.290 (Python Zero to Hero) a €1.990 (AI Professional). Il pagamento rateale sarà disponibile nella V2 del sito con Klarna/Scalapay. Per ora, al momento dell'iscrizione gestiamo eventuali piani rateali caso per caso. Parlacene nella call orientamento.",
  },
  {
    q: "Come funziona il supporto carriera?",
    a: "Dalla fine del corso in poi: career coaching con la nostra specialista, revisione del CV e del profilo LinkedIn, accesso alle offerte delle aziende partner, preparazione ai colloqui tecnici. Non garantiamo un lavoro — ma facciamo di tutto per connettere i migliori studenti con le opportunità giuste.",
  },
  {
    q: "Posso iscrivermi se vivo fuori dal Sud Italia?",
    a: "Sì. La parte online è accessibile da qualunque parte d'Italia o d'Europa. Le sessioni in presenza in laboratorio sono nella nostra sede principale (Napoli). Se sei fuori, parliamone nella call di orientamento — troviamo una soluzione.",
  },
  {
    q: "C'è una call di orientamento gratuita? Come funziona?",
    a: "Sì — ed è il punto di partenza che consigliamo a tutti. 30 minuti con un mentore reale: nessuna pressione commerciale, solo una conversazione onesta su dove sei e dove vuoi arrivare. Compila il form nella pagina Iscrizioni per prenotarla.",
  },
  {
    q: "Cosa rende Mentor diverso da altri corsi online?",
    a: "Tre cose: 1) Mentori attivi nel settore che revisionano il tuo codice davvero, non bot o TA anonimi. 2) Progetti reali che finiscono nel tuo portfolio — non esercizi da buttare. 3) Focus sul Sud Italia: non ti diciamo di andartene, costruiamo opportunità qui.",
  },
  {
    q: "Posso seguire più corsi contemporaneamente?",
    a: "Tecnicamente sì, ma non lo consigliamo. Ogni corso richiede impegno serio. Se vuoi combinare percorsi (es. Python + AI), pianifichiamolo in sequenza durante la call di orientamento.",
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="card-glass rounded-xl overflow-hidden">
      <button
        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-surface-2/50 transition-colors"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="font-heading font-medium text-base pr-4">{q}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted shrink-0 mt-0.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-muted leading-relaxed border-t border-border pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="muted" className="mb-4">Domande frequenti</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-4">FAQ</h1>
            <p className="text-muted text-lg">
              Le risposte alle domande più comuni. Se non trovi quello che cerchi,
              scrivici o prenota una call gratuita.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <FaqItem
                  q={faq.q}
                  a={faq.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-muted mb-4">Non hai trovato risposta?</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/iscrizioni">
                  <button className="inline-flex items-center gap-2 bg-violet text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-violet-dark transition-colors">
                    Contattaci
                  </button>
                </Link>
                <Link href="/iscrizioni#orientamento">
                  <button className="inline-flex items-center gap-2 border border-border bg-surface-2 text-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-surface transition-colors">
                    Prenota call gratuita
                  </button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
