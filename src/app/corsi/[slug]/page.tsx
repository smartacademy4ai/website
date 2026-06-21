import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { courses, getCourseBySlug } from "@/data/courses"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import {
  Clock,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  ArrowRight,
  Layers,
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) return {}
  return {
    title: `${course.title} ${course.subtitle}`,
    description: course.description,
  }
}

const colorMap = {
  violet: { badge: "violet" as const, text: "text-violet", bg: "bg-violet/10", border: "border-violet/20" },
  teal: { badge: "teal" as const, text: "text-teal", bg: "bg-teal/10", border: "border-teal/20" },
  green: { badge: "green" as const, text: "text-green", bg: "bg-green/10", border: "border-green/20" },
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  const colors = colorMap[course.color]

  return (
    <div className="pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Link href="/corsi" className="hover:text-foreground transition-colors">Corsi</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">{course.title} {course.subtitle}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <ScrollReveal>
                <div className="flex gap-2 mb-4">
                  <Badge variant={colors.badge}>{course.badge}</Badge>
                  <Badge variant={course.level === "zero-to-hero" ? "teal" : "violet"}>
                    {course.level === "zero-to-hero" ? "Zero to Hero" : "Professional"}
                  </Badge>
                </div>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl mb-2">
                  {course.title}
                </h1>
                <p className="text-xl text-muted mb-6">{course.subtitle}</p>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Clock className="w-4 h-4 text-muted" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Calendar className="w-4 h-4 text-muted" />
                    <span>{course.schedule}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-surface-2 border border-border text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — pricing card */}
            <ScrollReveal delay={0.2}>
              <div className="card-glass rounded-2xl p-8 border border-card-border sticky top-24">
                <div className="text-4xl font-heading font-extrabold mb-1">
                  €{course.price.toLocaleString("it-IT")}
                </div>
                {course.priceNote && (
                  <p className="text-sm text-muted mb-6">{course.priceNote}</p>
                )}

                <div className="flex flex-col gap-3 mb-8">
                  <Link href="/iscrizioni">
                    <Button size="lg" className="w-full gap-2">
                      Richiedi info per questo corso
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/iscrizioni#orientamento">
                    <Button size="lg" variant="secondary" className="w-full">
                      Call orientamento gratuita
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    "Mentorship 1:1 inclusa",
                    "Certificazione al termine",
                    "Accesso a colloqui aziende partner",
                    "Community Discord",
                    "Accesso a risorse life-time",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${colors.text}`} />
                      <span className="text-muted">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            {/* Prerequisites */}
            <ScrollReveal>
              <section>
                <h2 className="font-heading font-bold text-2xl mb-6">
                  Prerequisiti
                </h2>
                <div className="flex flex-col gap-3">
                  {course.prerequisites.map((p) => (
                    <div key={p} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Modules */}
            <ScrollReveal>
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Layers className="w-5 h-5 text-violet" />
                  <h2 className="font-heading font-bold text-2xl">Programma</h2>
                </div>
                <div className="flex flex-col gap-4">
                  {course.modules.map((mod, i) => (
                    <div key={mod.title} className="card-glass rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-6 h-6 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center text-xs font-mono font-bold`}>
                            {i + 1}
                          </span>
                          <h3 className="font-heading font-semibold">{mod.title}</h3>
                        </div>
                        <span className="text-xs font-mono text-muted">{mod.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {mod.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs font-mono px-2 py-0.5 rounded-md bg-surface-2 text-muted"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Projects */}
            <ScrollReveal>
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Code2 className="w-5 h-5 text-teal" />
                  <h2 className="font-heading font-bold text-2xl">Progetti reali</h2>
                </div>
                <div className="flex flex-col gap-3">
                  {course.projects.map((project) => (
                    <div key={project} className="flex items-center gap-3 p-4 card-glass rounded-xl">
                      <div className={`w-2 h-2 rounded-full ${colors.text.replace("text-", "bg-")}`} />
                      <span className="text-sm font-medium">{project}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Outcomes */}
            <ScrollReveal>
              <section>
                <h2 className="font-heading font-bold text-2xl mb-6">
                  Sbocchi professionali
                </h2>
                <div className="flex flex-wrap gap-3">
                  {course.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className={`px-4 py-2 rounded-xl ${colors.bg} ${colors.border} border text-sm font-medium ${colors.text}`}
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar — desktop only placeholder */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  )
}
