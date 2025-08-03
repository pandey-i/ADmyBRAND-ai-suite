import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface InteractiveCard3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export const InteractiveCard3D = ({ 
  children, 
  className,
  intensity = 15 
}: InteractiveCard3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (e.clientY - centerY) / (rect.height / 2) * intensity
    const rotateY = (e.clientX - centerX) / (rect.width / 2) * intensity

    card.style.transform = `
      perspective(1000px) 
      rotateX(${-rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(20px)
    `
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    
    setIsHovering(false)
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      translateZ(0px)
    `
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={cn(
        "transition-all duration-300 ease-out transform-gpu",
        "hover:shadow-2xl",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transition: isHovering 
          ? "box-shadow 0.3s ease" 
          : "transform 0.5s ease, box-shadow 0.3s ease"
      }}
    >
      {children}
    </div>
  )
}