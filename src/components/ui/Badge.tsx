import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "violet" | "teal" | "green" | "muted" | "outline"
  className?: string
}

export function Badge({ children, variant = "muted", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium",
        {
          "bg-violet/15 text-violet-light border border-violet/20": variant === "violet",
          "bg-teal/15 text-teal-light border border-teal/20": variant === "teal",
          "bg-green/15 text-green-light border border-green/20": variant === "green",
          "bg-surface-2 text-muted border border-border": variant === "muted",
          "border border-border text-muted": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  )
}
