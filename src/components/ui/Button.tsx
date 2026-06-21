import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-violet text-white hover:bg-violet-dark active:scale-[0.98]":
              variant === "primary",
            "bg-surface-2 text-foreground hover:bg-surface border border-border active:scale-[0.98]":
              variant === "secondary",
            "text-foreground hover:bg-surface-2 active:scale-[0.98]":
              variant === "ghost",
            "border border-violet text-violet hover:bg-violet/10 active:scale-[0.98]":
              variant === "outline",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-7 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
