'use client'

import { useState, useEffect } from 'react'
import CosmicLogo from './CosmicLogo'
import EasterEggModal from './EasterEggModal'
import Ornaments from './Ornaments'

export default function HolidayCard() {
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
    return null
  }

  return (
    <>
      <div className="relative z-10 max-w-2xl w-full">
        {/* Decorative ornaments */}
        <Ornaments />
        
        {/* Main card - Apple-inspired glass effect */}
        <div className="apple-glass-card p-12 md:p-16 text-center relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            {/* Cosmic Logo - Clickable for Easter Egg */}
            <div 
              className={`mb-10 cursor-pointer transition-transform duration-300 ${isShaking ? 'animate-shake' : 'hover:scale-105'}`}
              onClick={handleLogoClick}
              title="✨"
            >
              <div className="relative inline-block">
                <CosmicLogo className="w-16 h-16 mx-auto opacity-90" />
                {clickCount > 0 && clickCount < 7 && (
                  <div className="absolute -top-1 -right-1 bg-cosmic-blue text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-in">
                    {7 - clickCount}
                  </div>
                )}
              </div>
            </div>
            
            {/* Large title - Apple style */}
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 animate-fade-in text-white leading-tight">
              Happy Holidays
            </h1>
            
            {/* Subtitle with year */}
            <p className="text-6xl md:text-7xl text-white/20 mb-8 animate-slide-up animate-delay-200 leading-relaxed font-bold">
              2025
            </p>
            
            {/* Minimal divider */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animate-delay-500">
              <div className="h-px w-12 bg-cosmic-gray-dark" />
              <span className="text-cosmic-blue text-sm">✦</span>
              <div className="h-px w-12 bg-cosmic-gray-dark" />
            </div>
            
            {/* Message - Changed: Match old version exactly */}
            <p className="text-base text-cosmic-gray-light mb-4 animate-fade-in animate-delay-700 leading-relaxed font-normal max-w-lg mx-auto">
              From all of us at <span className="text-white font-semibold">Cosmic</span>, we wish you a season filled with joy, <span className="text-cosmic-orange font-medium">warmth</span>, and peace.
            </p>
            
            {/* Thank you message */}
            <p className="text-base text-cosmic-gray-light mb-8 animate-fade-in animate-delay-700 leading-relaxed font-normal max-w-lg mx-auto">
              Thank you for being part of our journey.
              <br />
              Here&apos;s to an extraordinary 2025.
            </p>
            
            {/* Signature - Changed: Match old version */}
            <div className="mt-10 pt-8 border-t border-cosmic-gray-dark/30 animate-fade-in animate-delay-1000">
              <p className="text-cosmic-gray text-xs font-medium tracking-widest uppercase mb-2">
                With Warmth,
              </p>
              <p className="text-white font-semibold text-sm">
                The Cosmic Team
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative elements - minimal stars */}
        <div className="flex justify-center gap-6 mt-8 animate-fade-in animate-delay-1000">
          <span className="text-xl text-cosmic-cyan/40 animate-float">✦</span>
          <span className="text-xl text-cosmic-purple/40 animate-float animate-delay-200">✨</span>
          <span className="text-xl text-cosmic-orange/40 animate-float animate-delay-500">✦</span>
        </div>
      </div>
      
      {/* Easter Egg Modal */}
      {showEasterEgg && <EasterEggModal onClose={closeEasterEgg} />}
    </>
  )
}