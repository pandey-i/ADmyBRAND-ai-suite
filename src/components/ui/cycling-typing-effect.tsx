import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CyclingTypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

export const CyclingTypingEffect = ({ 
  texts, 
  typingSpeed = 50, 
  deletingSpeed = 30,
  pauseDuration = 1500,
  className 
}: CyclingTypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        if (isTyping) {
          setIsTyping(false) // Start deleting after typing pause
        } else {
          // Move to next text after deleting pause
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setIsTyping(true)
        }
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    const currentText = texts[currentTextIndex]
    
    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished typing, start pause
        setIsPaused(true)
      }
    } else {
      // Deleting animation
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timer)
      } else {
        // Finished deleting, start pause
        setIsPaused(true)
      }
    }
  }, [displayedText, isTyping, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <span className={cn("relative", className)}>
      {displayedText}
      {showCursor && (
        <span className="animate-pulse text-primary ml-1">|</span>
      )}
    </span>
  )
}