import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientTextVariants = cva(
  "bg-clip-text text-transparent",
  {
    variants: {
      gradient: {
        primary: "bg-gradient-primary",
        secondary: "bg-gradient-secondary",
        rainbow: "bg-gradient-to-r from-primary via-secondary to-accent",
        sunset: "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500",
        ocean: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
      },
      animate: {
        none: "",
        shift: "animate-gradient-shift bg-[length:200%_200%]"
      }
    },
    defaultVariants: {
      gradient: "primary",
      animate: "none"
    },
  }
)

export interface GradientTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof gradientTextVariants> {}

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, gradient, animate, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(gradientTextVariants({ gradient, animate, className }))}
        {...props}
      />
    )
  }
)
GradientText.displayName = "GradientText"

export { GradientText, gradientTextVariants }