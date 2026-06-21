"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Brain, Bot } from "lucide-react"
import { Button } from "@/components/ui/Button"

const courseCards = [
  { icon: Code2, label: "Python", color: "text-teal" },
  { icon: Brain, label: "AI", color: "text-violet" },
  { icon: Bot, label: "Robotica", color: "text-green" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-16">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column — text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-mono text-muted mb-8"
            >
              <span className="text-violet">▸</span>
              Scuola tecnica nel Sud Italia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.98] mb-7"
            >
              Creiamo i nuovi
              <br />
              lavori del{" "}
              <span className="text-violet">futuro</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted max-w-xl mb-9 leading-relaxed"
            >
              Percorsi tecnico-pratici in Python, AI e Robotica. Non ottimizziamo
              lavori esistenti con l&apos;AI — formiamo chi li inventerà.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="/corsi">
                <Button size="lg" className="group gap-2">
                  Scopri i corsi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
              <Link href="/iscrizioni">
                <Button size="lg" variant="ghost">
                  Richiedi info gratuite
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right column — course list, asymmetric */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5 lg:border-l border-border lg:pl-10"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted mb-5">
              Aree
            </p>
            <ul className="divide-y divide-border">
              {courseCards.map(({ icon: Icon, label, color }, i) => (
                <li
                  key={label}
                  className="flex items-center gap-4 py-4 group cursor-default"
                >
                  <span className="font-mono text-xs text-muted w-6">
                    0{i + 1}
                  </span>
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="font-heading font-semibold text-lg">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
