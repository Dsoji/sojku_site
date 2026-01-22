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
  const touchStartRef = useRef(null)

  const cards = Array.isArray(children) ? children : [children]
  const totalCards = cards.length

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isPaused && totalCards > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalCards)
      }, delay)
    }
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [delay, totalCards, isPaused])

  const handleNext = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % totalCards)
    resetTimer()
  }

  const handlePrev = (e) => {
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards)
    resetTimer()
  }

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false)
  }

  // Touch handlers for swiping
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStartRef.current - touchEnd

    if (Math.abs(diff) > 50) { // threshold for swipe
      if (diff > 0) handleNext()
      else handlePrev()
    }
    touchStartRef.current = null
  }

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Buttons */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-dark-800/50 border border-dark-700 text-white hover:border-accent hover:text-accent transition-all duration-300 backdrop-blur-sm group/btn"
          aria-label="Previous card"
        >
          <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); resetTimer(); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-accent w-6' : 'bg-dark-700'}`}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-dark-800/50 border border-dark-700 text-white hover:border-accent hover:text-accent transition-all duration-300 backdrop-blur-sm group/btn"
          aria-label="Next card"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {cards.map((card, index) => {
        const position = (index - currentIndex + totalCards) % totalCards
        const isActive = position === 0
        const zIndex = totalCards - position
        const translateY = position * verticalDistance
        const translateX = (position - 1) * cardDistance
        const scale = 1 - position * 0.05
        const opacity = position === 0 ? 1 : Math.max(0, 1 - position * 0.4)

        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`,
              opacity,
              zIndex,
              pointerEvents: isActive ? 'auto' : 'none',
              filter: isActive ? 'none' : 'blur(2px)'
            }}
          >
            {card}
          </div>
        )
      })}
    </div>
  )
}
