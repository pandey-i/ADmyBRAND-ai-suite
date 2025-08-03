import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  opacity: number
  speed: number
  originalZ: number
}

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const starsRef = useRef<Star[]>([])
  const scrollYRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      const stars: Star[] = []
      const numStars = 800

      for (let i = 0; i < numStars; i++) {
        const z = Math.random() * 1000 + 1
        stars.push({
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z: z,
          originalZ: z,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 2 + 1
        })
      }
      starsRef.current = stars
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxZ = 1000

      // Enhanced scroll effect
      const scrollSpeed = scrollYRef.current * 0.01

      starsRef.current.forEach((star) => {
        // Apply scroll-based movement
        star.z -= star.speed + scrollSpeed

        // Reset star position when it goes behind camera
        if (star.z <= 0) {
          star.z = maxZ
          star.x = (Math.random() - 0.5) * 2000
          star.y = (Math.random() - 0.5) * 2000
        }

        // Project 3D coordinates to 2D
        const x = (star.x / star.z) * centerX + centerX
        const y = (star.y / star.z) * centerY + centerY

        // Calculate size based on distance (closer = bigger)
        const size = (1 - star.z / maxZ) * star.size * 2
        const opacity = Math.min(star.opacity * (1 - star.z / maxZ), 1)

        // Only draw if star is within canvas bounds
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height && size > 0) {
          ctx.save()
          
          // Create glow effect for brighter stars
          if (size > 1) {
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3)
            gradient.addColorStop(0, `hsla(217, 91%, 70%, ${opacity * 0.8})`)
            gradient.addColorStop(0.5, `hsla(217, 91%, 60%, ${opacity * 0.4})`)
            gradient.addColorStop(1, `hsla(217, 91%, 50%, 0)`)
            
            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(x, y, size * 3, 0, Math.PI * 2)
            ctx.fill()
          }

          // Draw the star
          ctx.fillStyle = `hsla(0, 0%, 100%, ${opacity})`
          ctx.beginPath()
          ctx.arc(x, y, Math.max(size, 0.5), 0, Math.PI * 2)
          ctx.fill()

          // Add twinkle effect
          if (Math.random() < 0.01) {
            ctx.strokeStyle = `hsla(199, 89%, 80%, ${opacity * 0.8})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x - size * 2, y)
            ctx.lineTo(x + size * 2, y)
            ctx.moveTo(x, y - size * 2)
            ctx.lineTo(x, y + size * 2)
            ctx.stroke()
          }

          ctx.restore()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }

    const handleResize = () => {
      resizeCanvas()
    }

    resizeCanvas()
    createStars()
    animate()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "linear-gradient(to bottom, #0a0a0a, #1a1a2e, #16213e)" }}
    />
  )
}