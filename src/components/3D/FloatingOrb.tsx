import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface FloatingOrbProps {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "accent"
  className?: string
  delay?: number
}

export const FloatingOrb = ({ 
  size = "md", 
  color = "primary", 
  className,
  delay = 0 
}: FloatingOrbProps) => {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return

    let animationFrame: number
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp - delay

      const elapsed = timestamp - startTime
      const x = Math.sin(elapsed * 0.001) * 20
      const y = Math.cos(elapsed * 0.0015) * 15
      const rotation = elapsed * 0.02

      orb.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`
      
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [delay])

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  }

  const colorClasses = {
    primary: "bg-primary/20 shadow-primary/30",
    secondary: "bg-secondary/20 shadow-secondary/30",
    accent: "bg-accent/20 shadow-accent/30"
  }

  return (
    <div
      ref={orbRef}
      className={cn(
        "absolute rounded-full blur-sm",
        "shadow-2xl animate-pulse",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      style={{
        filter: "blur(8px)",
        background: `radial-gradient(circle, hsl(var(--${color})) 0%, transparent 70%)`
      }}
    />
  )
}

export const FloatingOrbField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingOrb size="lg" color="primary" className="top-20 left-20" delay={0} />
      <FloatingOrb size="md" color="secondary" className="top-40 right-32" delay={1000} />
      <FloatingOrb size="sm" color="accent" className="bottom-32 left-40" delay={2000} />
      <FloatingOrb size="md" color="primary" className="bottom-20 right-20" delay={3000} />
      <FloatingOrb size="sm" color="secondary" className="top-60 left-1/2" delay={4000} />
      <FloatingOrb size="lg" color="accent" className="top-1/3 right-1/4" delay={5000} />
    </div>
  )
}