import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Button } from "@/components/ui/Button"
import { AnimatedBackground } from "@/components/ui/AnimatedBackground"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-violet-teal opacity-95" />
            <AnimatedBackground always grid={false} />

            <div className="relative z-10 p-12 sm:p-16">
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-tight">
                Il prossimo lavoro tech
                <br />
                nasce qui.
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-md mx-auto">
                Call orientamento gratuita, nessun obbligo. Parliamo di dove sei
                e dove vuoi arrivare.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/iscrizioni#orientamento">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-violet hover:bg-white/90 shadow-xl"
                  >
                    <Calendar className="w-4 h-4" />
                    Prenota call gratuita
                  </Button>
                </Link>
                <Link href="/corsi">
                  <Button
                    size="lg"
                    className="bg-white/10 text-white border border-white/30 hover:bg-white/20 shadow-none"
                  >
                    Scopri i corsi
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
