import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  className?: string
  /** Show the animated dotted grid overlay. */
  grid?: boolean
  /** Render in any theme. Default false → only visible in dark mode. */
  always?: boolean
}

/**
 * Ambient moving background — dark only. Slow-drifting violet + neon-green
 * orbs behind content. Pure CSS animation (cheap), respects reduced-motion.
 * Render inside a `relative overflow-hidden` parent.
 */
export function AnimatedBackground({ className, grid = true, always = false }: AnimatedBackgroundProps) {
  return (
    <div className={cn("anim-bg", always ? "block" : "hidden dark:block", className)} aria-hidden>
      {/* violet — top left */}
      <div
        className="anim-bg__orb"
        style={{
          top: "-10%",
          left: "-5%",
          width: "42vw",
          height: "42vw",
          background:
            "radial-gradient(circle, rgba(139,124,246,0.45) 0%, rgba(139,124,246,0) 70%)",
          animation: "orb-drift-a 11s ease-in-out infinite",
        }}
      />
      {/* neon green — bottom right */}
      <div
        className="anim-bg__orb"
        style={{
          bottom: "-15%",
          right: "-8%",
          width: "38vw",
          height: "38vw",
          background:
            "radial-gradient(circle, rgba(43,255,136,0.30) 0%, rgba(43,255,136,0) 70%)",
          animation: "orb-drift-b 14s ease-in-out infinite",
        }}
      />
      {/* violet-green blend — center drift */}
      <div
        className="anim-bg__orb"
        style={{
          top: "30%",
          left: "45%",
          width: "30vw",
          height: "30vw",
          background:
            "radial-gradient(circle, rgba(110,92,214,0.28) 0%, rgba(43,255,136,0.10) 60%, transparent 75%)",
          animation: "orb-drift-c 17s ease-in-out infinite",
        }}
      />
      {grid && <div className="anim-bg__grid" />}
    </div>
  )
}
