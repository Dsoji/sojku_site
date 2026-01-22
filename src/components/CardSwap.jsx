import { useState, useEffect, useRef } from 'react'

export function Card({ children, className = '', ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export default function CardSwap({ 
  children, 
  cardDistance = 60, 
  verticalDistance = 70, 
  delay = 5000,
  pauseOnHover = false 
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const cards = Array.isArray(children) ? children : [children]
  const totalCards = cards.length

  useEffect(() => {
    if (isPaused || totalCards <= 1) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards)
    }, delay)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [delay, totalCards, isPaused])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((card, index) => {
        const position = (index - currentIndex + totalCards) % totalCards
        const isActive = position === 0
        const zIndex = totalCards - position
        const translateY = position * verticalDistance
        const translateX = (position - 1) * cardDistance
        const scale = 1 - position * 0.05
        const opacity = position === 0 ? 1 : Math.max(0.3, 1 - position * 0.2)

        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
              opacity,
              zIndex,
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {card}
          </div>
        )
      })}
    </div>
  )
}
