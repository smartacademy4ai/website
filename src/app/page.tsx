import { HeroSection } from "@/components/home/HeroSection"
import { StatsSection } from "@/components/home/StatsSection"
import { CoursesPreview } from "@/components/home/CoursesPreview"
import { HowItWorks } from "@/components/home/HowItWorks"
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview"
import { CTASection } from "@/components/home/CTASection"
import { NeuralNetworkBackground } from "@/components/ui/NeuralNetworkBackground"

export default function Home() {
  return (
    <>
      {/* Home-only animated backdrop — neural network, adapts to light/dark */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 75% at 50% 35%, #000 35%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 75% at 50% 35%, #000 35%, transparent 90%)",
        }}
      >
        <NeuralNetworkBackground />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <CoursesPreview />
        <HowItWorks />
        <TestimonialsPreview />
        <CTASection />
      </div>
    </>
  )
}
