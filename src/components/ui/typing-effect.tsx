import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export const TypingEffect = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  className,
  onComplete 
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startTyping = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, speed)
        return () => clearTimeout(timer)
      } else {
        onComplete?.()
        // Hide cursor after completion
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, delay)

    return () => clearTimeout(startTyping)
  }, [currentIndex, text, speed, delay, onComplete])

  // Cursor blinking effect
  useEffect(() => {
    if (currentIndex < text.length || showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 500)
      return () => clearInterval(cursorTimer)
    }
  }, [currentIndex, text.length, showCursor])

  return (
    <span className={cn("relative", className)}>
      {displayedText}
      {showCursor && (
        <span className="animate-pulse text-primary ml-1">|</span>
      )}
    </span>
  )
}