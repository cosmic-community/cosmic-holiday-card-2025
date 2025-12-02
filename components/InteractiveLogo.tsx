'use client'

import { useState, useEffect } from 'react'
import EasterEggModal from './EasterEggModal'

interface InteractiveLogoProps {
  children: React.ReactNode
}

export default function InteractiveLogo({ children }: InteractiveLogoProps) {
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogoClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    setIsShaking(true)
    
    setTimeout(() => setIsShaking(false), 500)
    
    if (newCount >= 7) {
      setShowEasterEgg(true)
      setClickCount(0)
    }
  }

  const closeEasterEgg = () => {
    setShowEasterEgg(false)
  }

  if (!mounted) {
    return (
      <div className="mb-10">
        <div className="relative inline-block">
          {children}
        </div>
      </div>
    )
  }

  return (
    <>
      <div 
        className={`mb-10 cursor-pointer transition-transform duration-300 ${isShaking ? 'animate-shake' : 'hover:scale-105'}`}
        onClick={handleLogoClick}
        title="✨"
      >
        <div className="relative inline-block">
          {children}
          {clickCount > 0 && clickCount < 7 && (
            <div className="absolute -top-1 -right-1 bg-cosmic-blue text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-in">
              {7 - clickCount}
            </div>
          )}
        </div>
      </div>
      
      {/* Easter Egg Modal */}
      {showEasterEgg && <EasterEggModal onClose={closeEasterEgg} />}
    </>
  )
}