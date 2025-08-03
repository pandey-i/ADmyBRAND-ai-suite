import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassCardVariants = cva(
  "glass rounded-2xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "p-6",
        compact: "p-4",
        spacious: "p-8",
        none: "p-0"
      },
      hover: {
        none: "",
        scale: "hover:scale-105",
        lift: "hover:-translate-y-2 hover:shadow-2xl",
        glow: "hover:shadow-glow"
      }
    },
    defaultVariants: {
      variant: "default",
      hover: "none"
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, hover, className }))}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard, glassCardVariants }