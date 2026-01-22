import { useState, useEffect, useRef, useCallback } from 'react'

const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

export default function DecryptedText({
  text,
  speed = 20,
  maxIterations = 10,
  characters = DEFAULT_CHARACTERS,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  revealDirection = 'start',
  sequential = false,
  useOriginalCharsOnly = false
}) {
  const getRandomChar = useCallback((textValue) => {
    if (useOriginalCharsOnly) {
      const uniqueChars = [...new Set(textValue.split('').filter(c => c !== ' '))]
      return uniqueChars[Math.floor(Math.random() * uniqueChars.length)] || characters[0]
    }
    return characters[Math.floor(Math.random() * characters.length)]
  }, [useOriginalCharsOnly, characters])

  const [displayText, setDisplayText] = useState(() => {
    if (animateOn === 'view') {
      return text.split('').map((char) => {
        if (char === ' ') return ' '
        if (useOriginalCharsOnly) {
          const uniqueChars = [...new Set(text.split('').filter(c => c !== ' '))]
          return uniqueChars[Math.floor(Math.random() * uniqueChars.length)] || characters[0]
        }
        return characters[Math.floor(Math.random() * characters.length)]
      }).join('')
    }
    return text
  })
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const intervalRef = useRef(null)
  const observerRef = useRef(null)
  const containerRef = useRef(null)

  const decrypt = useCallback(() => {
    if (hasAnimated && animateOn === 'view') return
    
    setIsAnimating(true)
    let iteration = 0
    const textArray = text.split('')
    const revealedIndices = new Set()

    intervalRef.current = setInterval(() => {
      const newText = textArray.map((char, index) => {
        if (char === ' ') return ' '
        
        if (sequential) {
          // Sequential reveal from start or end
          const revealIndex = revealDirection === 'start' 
            ? Math.floor((iteration / maxIterations) * textArray.length)
            : textArray.length - 1 - Math.floor((iteration / maxIterations) * textArray.length)
          
          if (revealDirection === 'start' ? index <= revealIndex : index >= revealIndex) {
            revealedIndices.add(index)
            return char
          }
        } else {
          // Random reveal
          if (Math.random() < 0.1 + (iteration / maxIterations) * 0.9) {
            revealedIndices.add(index)
            return char
          }
        }

        return revealedIndices.has(index) ? char : getRandomChar(text)
      }).join('')

      setDisplayText(newText)
      iteration++

      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current)
        setDisplayText(text)
        setIsAnimating(false)
        if (animateOn === 'view') {
          setHasAnimated(true)
        }
      }
    }, speed)
  }, [text, speed, maxIterations, sequential, revealDirection, hasAnimated, animateOn, getRandomChar])

  useEffect(() => {
    if (animateOn === 'view') {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              decrypt()
            }
          })
        },
        { threshold: 0.1 }
      )

      if (containerRef.current) {
        observerRef.current.observe(containerRef.current)
      }

      return () => {
        if (observerRef.current && containerRef.current) {
          observerRef.current.unobserve(containerRef.current)
        }
      }
    }
  }, [animateOn, hasAnimated, decrypt])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (animateOn === 'hover' && !isAnimating) {
      const encryptedText = text.split('').map((char) => {
        if (char === ' ') return ' '
        if (useOriginalCharsOnly) {
          const uniqueChars = [...new Set(text.split('').filter(c => c !== ' '))]
          return uniqueChars[Math.floor(Math.random() * uniqueChars.length)] || characters[0]
        }
        return characters[Math.floor(Math.random() * characters.length)]
      }).join('')
      setDisplayText(encryptedText)
      decrypt()
    }
  }

  return (
    <span
      ref={containerRef}
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
    >
      <span className={`${className} ${isAnimating ? encryptedClassName : ''}`}>
        {displayText}
      </span>
    </span>
  )
}
