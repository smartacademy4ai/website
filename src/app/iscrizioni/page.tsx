"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { CheckCircle2, Calendar, MessageSquare, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/Button"

const schema = z.object({
  nome: z.string().min(2, "Nome richiesto"),
  cognome: z.string().min(2, "Cognome richiesto"),
  email: z.string().email("Email non valida"),
  telefono: z.string().optional(),
  corso: z.string().min(1, "Seleziona un corso"),
  livello: z.enum(["zero-to-hero", "professional", "non-so"]),
  messaggio: z.string().optional(),
  newsletter: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

const corsiOptions = [
  { value: "python", label: "Python" },
  { value: "ai", label: "Intelligenza Artificiale" },
  { value: "robotica", label: "Robotica" },
  { value: "non-so", label: "Non so ancora" },
]

export default function IscrizioniPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { livello: "non-so", newsletter: true },
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
    setSubmitted(true)
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="violet" className="mb-4">Inizia ora</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-4">
              Richiedi info
            </h1>
            <p className="text-muted text-lg">
              Compila il form o prenota direttamente una call di orientamento
              gratuita. Nessun obbligo, nessuna pressione commerciale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Left sidebar */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              {/* Call booking */}
              <div id="orientamento" className="card-glass rounded-2xl p-6 border border-teal/20">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Call orientamento gratuita
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  30 minuti con un mentore reale. Parliamo di dove sei, dove
                  vuoi arrivare e quale percorso ha senso per te.
                </p>
                <a
                  href="#form"
                  className="text-sm font-medium text-teal hover:text-teal-light transition-colors"
                >
                  Richiedi via form →
                </a>
              </div>

              {/* What happens next */}
              <div className="card-glass rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-violet" />
                </div>
                <h3 className="font-heading font-semibold mb-3">Cosa succede dopo</h3>
                <div className="flex flex-col gap-3">
                  {[
                    "Ti rispondiamo entro 24h lavorative",
                    "Proponiamo orari per la call",
                    "30 min di confronto senza pressioni",
                    "Piano personalizzato se vuoi procedere",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-violet/10 text-violet text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">
                        {i + 1}
                      </span>
                      <span className="text-muted">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            {submitted ? (
              <div
                id="form"
                className="card-glass rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <CheckCircle2 className="w-16 h-16 text-teal mb-6" />
                <h2 className="font-heading font-bold text-2xl mb-3">
                  Messaggio ricevuto!
                </h2>
                <p className="text-muted max-w-sm">
                  Ti risponderemo entro 24 ore lavorative con la proposta di
                  orari per la call. Controlla la casella email.
                </p>
              </div>
            ) : (
              <form
                id="form"
                onSubmit={handleSubmit(onSubmit)}
                className="card-glass rounded-2xl p-8 flex flex-col gap-5"
              >
                <h2 className="font-heading font-bold text-xl mb-2">
                  Compila il form
                </h2>

                {/* Nome + Cognome */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-muted uppercase tracking-wider block mb-1.5">
                      Nome *
                    </label>
                    <input
                      {...register("nome")}
                      placeholder="Mario"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet"
                    />
                    {errors.nome && (
                      <p className="text-xs text-red-400 mt-1">{errors.nome.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-mono text-muted uppercase tracking-wider block mb-1.5">
                      Cognome *
                    </label>
                    <input
                      {...register("cognome")}
                      placeholder="Rossi"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet"
                    />
                    {errors.cognome && (
                      <p className="text-xs text-red-400 mt-1">{errors.cognome.message}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-mono text-muted uppercase tracking-wider block mb-1.5">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="mario@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefono */}
                <div>
                  <label className="text-xs font-mono text-muted uppercase tracking-wider block mb-1.5">
                    Telefono (opzionale)
                  </label>
                  <input
                    {...register("telefono")}
                    type="tel"
                    placeholder="+39 333 000 0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet"
                  />
                </div>

                {/* Corso */}
                <div>
                  <label className="text-xs font-mono text-muted uppercase tracking-wider block mb-1.5">
                    Area di interesse *
                  </label>
                  <select
                    {...register("corso")}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-violet"
                  >
                    <option value="">Seleziona...</option>
                    {corsiOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                  {errors.corso && (
                    <p className="text-xs text-red-400 mt-1">{errors.corso.message}</p>
                  )}
                </div>

                {/* Livello */}
                <div>
                  <label className="text-xs font-mono text-muted uppercase tracking-wider block mb-2">
                    Livello attuale
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "zero-to-hero", label: "Sto iniziando" },
                      { value: "professional", label: "Ho già basi" },
                      { value: "non-so", label: "Non so" },
                    ].map((opt) => (
                      <label key={opt.value} className="cursor-pointer">
                        <input
                          type="radio"
                          value={opt.value}
                          {...register("livello")}
                          className="sr-only peer"
                        />
                        <div className="text-center text-xs font-medium py-2.5 px-3 rounded-xl border border-border bg-surface-2 peer-checked:border-violet peer-checked:bg-violet/10 peer-checked:text-violet transition-colors">
                          {opt.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Messaggio */}
                <div>
                  <label className="text-xs font-mono text-muted uppercase tracking-wider block mb-1.5">
                    Messaggio (opzionale)
                  </label>
                  <textarea
                    {...register("messaggio")}
                    rows={3}
                    placeholder="Raccontaci la tua situazione attuale o cosa vuoi raggiungere..."
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet resize-none"
                  />
                </div>

                {/* Newsletter */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("newsletter")}
                    className="mt-0.5 w-4 h-4 rounded accent-violet"
                  />
                  <span className="text-sm text-muted">
                    Iscrivimi alla newsletter per news, eventi e workshop gratuiti
                  </span>
                </label>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    "Invia richiesta"
                  )}
                </Button>

                <p className="text-xs text-muted text-center">
                  Nessun obbligo. Ti rispondiamo entro 24 ore lavorative.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
