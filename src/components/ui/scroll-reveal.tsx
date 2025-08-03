import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "scale"
  delay?: number
  duration?: string
  threshold?: number
}

export const ScrollReveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = "0.6s",
  threshold = 0.1
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getInitialClasses = () => {
    switch (direction) {
      case "up":
        return "opacity-0 translate-y-8"
      case "down":
        return "opacity-0 -translate-y-8"
      case "left":
        return "opacity-0 translate-x-8"
      case "right":
        return "opacity-0 -translate-x-8"
      case "scale":
        return "opacity-0 scale-95"
      default:
        return "opacity-0 translate-y-8"
    }
  }

  const getVisibleClasses = () => {
    switch (direction) {
      case "up":
      case "down":
        return "opacity-100 translate-y-0"
      case "left":
      case "right":
        return "opacity-100 translate-x-0"
      case "scale":
        return "opacity-100 scale-100"
      default:
        return "opacity-100 translate-y-0"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? getVisibleClasses() : getInitialClasses(),
        className
      )}
      style={{ transitionDuration: duration }}
    >
      {children}
    </div>
  )
}