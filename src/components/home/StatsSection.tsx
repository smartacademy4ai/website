import { ScrollReveal } from "@/components/ui/ScrollReveal"

const stats = [
  { value: "6", unit: "percorsi", label: "Zero-to-hero e Professional" },
  { value: "94%", unit: "", label: "Placement rate entro 6 mesi" },
  { value: "3", unit: "città", label: "Sud Italia — in crescita" },
  { value: "100%", unit: "", label: "Progetti reali, non esercizi" },
]

export function StatsSection() {
  return (
    <section className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="border-t-2 border-violet/40 pt-4">
                <div className="font-heading font-extrabold text-4xl sm:text-5xl mb-1 tracking-tight">
                  {stat.value}
                  <span className="text-2xl ml-1 text-violet">{stat.unit}</span>
                </div>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
