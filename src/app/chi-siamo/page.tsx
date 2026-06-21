import type { Metadata } from "next"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { Target, MapPin, Users, Lightbulb, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Chi siamo",
  description: "La missione di Mentor: valorizzare i talenti del Sud Italia e creare i lavori del futuro attraverso formazione tecnico-pratica.",
}

const values = [
  {
    icon: Target,
    title: "Pratica prima di tutto",
    desc: "Ogni lezione parte da un problema reale. Impari costruendo, non guardando. Il codice che scrivi va in portfolio il giorno stesso.",
  },
  {
    icon: Lightbulb,
    title: "Mentorship vera",
    desc: "I tuoi mentori sono professionisti attivi, non insegnanti di cattedra. Rispondono ai tuoi messaggi, revisionano il tuo codice, ti conoscono per nome.",
  },
  {
    icon: MapPin,
    title: "Sud Italia, non malgrado",
    desc: "Non ti diciamo di andartene. Ti mostriamo come costruire una carriera tech eccellente restando o tornando. È la nostra missione territoriale.",
  },
  {
    icon: Heart,
    title: "Community reale",
    desc: "Gli ex-studenti Mentor si aiutano tra loro. Chi ha trovato lavoro porta opportunità a chi viene dopo. È un ecosistema, non solo un corso.",
  },
]

export default function ChiSiamoPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <Badge variant="violet" className="mb-6">La nostra missione</Badge>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl mb-6 leading-tight">
              Non ottimizziamo il presente.
              <br />
              <span className="gradient-text">Costruiamo il futuro.</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Mentor nasce nel Sud Italia con una convinzione semplice: i lavori
              più importanti dei prossimi 10 anni non esistono ancora. Il nostro
              compito è formare chi li creerà — partendo da qui.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission text */}
      <section className="py-16 border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                Il mercato del lavoro tech cresce ogni anno. Eppure il Sud
                Italia continua a perdere talenti verso Nord o verso l&apos;estero.
                Non perché mancano le persone capaci — ma perché mancano i
                percorsi giusti, la mentorship vera, e l&apos;ecosistema che connette
                formazione e opportunità.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                Mentor è la risposta. Una scuola tecnica pratica, con mentori
                che lavorano nel settore ogni giorno, progetti reali da inserire
                nel portfolio, e un network di aziende partner che cercano attivamente
                talenti formati da noi.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Non formiamo &quot;utenti dell&apos;AI&quot;. Formiamo chi costruisce con l&apos;AI,
                chi programma i robot, chi scrive il codice che altri useranno.
                I nuovi lavori del futuro.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl mb-4">I nostri valori</h2>
              <p className="text-muted max-w-lg mx-auto">
                Non sono principi astratti. Sono scelte concrete che fanno
                la differenza in ogni corso.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="card-glass rounded-2xl p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-violet" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Territory section */}
      <section className="py-20 bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl gradient-violet-teal flex items-center justify-center">
                <MapPin className="w-7 h-7 text-white" />
              </div>
            </div>
            <h2 className="font-heading font-bold text-4xl mb-4">
              Sud Italia, scelta strategica
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Non siamo una scuola che ha aperto qui per caso. Siamo qui perché
              crediamo che il talento sia equamente distribuito ma le opportunità
              no. Finché non costruiamo quell&apos;ecosistema qui, lo costruiamo noi.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 card-glass rounded-xl border border-border">
                <Users className="w-4 h-4 text-teal" />
                <span className="text-sm font-mono">Talenti locali valorizzati</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 card-glass rounded-xl border border-border">
                <MapPin className="w-4 h-4 text-violet" />
                <span className="text-sm font-mono">Laboratori fisici in crescita</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl mb-4">
              Vuoi far parte di questo?
            </h2>
            <p className="text-muted mb-8">
              Che tu voglia studiare, insegnare, o portare la tua azienda
              nel network Mentor — parliamo.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/iscrizioni">
                <Button size="lg">Inizia con noi</Button>
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
