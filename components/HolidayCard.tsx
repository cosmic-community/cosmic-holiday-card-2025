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
      <div className="relative z-10 max-w-xl w-full">
        {/* Decorative ornaments */}
        <Ornaments />
        
        {/* Main card */}
        <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 elegant-gradient" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Cosmic Logo - Clickable for Easter Egg */}
            <div 
              className={`mb-10 cursor-pointer transition-transform duration-300 ${isShaking ? 'animate-shake' : 'hover:scale-105'}`}
              onClick={handleLogoClick}
              title="✨"
            >
              <div className="relative inline-block">
                <CosmicLogo className="w-16 h-16 mx-auto animate-glow" />
                {clickCount > 0 && clickCount < 7 && (
                  <div className="absolute -top-1 -right-1 bg-elegant-green text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-in">
                    {7 - clickCount}
                  </div>
                )}
              </div>
            </div>
            
            {/* Holiday greeting */}
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3 animate-fade-in text-gray-800">
              Happy Holidays
            </h1>
            
            {/* Year - Changed from gray-200 to gray-300 for better visibility */}
            <div className="text-7xl md:text-8xl font-extralight text-gray-300 mb-8 animate-slide-up animate-delay-200 tracking-tight">
              2025
            </div>
            
            {/* Message */}
            <p className="text-base md:text-lg text-gray-600 mb-10 animate-slide-up animate-delay-300 leading-relaxed font-light max-w-md mx-auto">
              From all of us at <span className="text-elegant-green font-semibold">Cosmic</span>, 
              we wish you a season filled with 
              <span className="text-elegant-green font-medium"> joy</span>, 
              <span className="text-elegant-red font-medium"> warmth</span>, and 
              <span className="text-elegant-green font-medium"> peace</span>.
            </p>
            
            {/* Minimal divider */}
            <div className="flex items-center justify-center gap-6 mb-10 animate-fade-in animate-delay-500">
              <div className="h-px w-12 bg-elegant-green/50" />
              <span className="text-elegant-green text-lg">✦</span>
              <div className="h-px w-12 bg-elegant-red/50" />
            </div>
            
            {/* Closing message */}
            <p className="text-gray-500 text-sm animate-fade-in animate-delay-700 font-light">
              Thank you for being part of our journey.
              <br />
              Here&apos;s to an extraordinary 2025.
            </p>
            
            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-gray-200 animate-fade-in animate-delay-1000">
              <p className="text-gray-400 text-xs font-light tracking-wide uppercase">
                With warmth,
              </p>
              <p className="text-elegant-green font-semibold mt-2 text-sm">
                The Cosmic Team
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative elements - minimal */}
        <div className="flex justify-center gap-6 mt-8 animate-fade-in animate-delay-1000">
          <span className="text-xl text-elegant-green/70 animate-float">❄</span>
          <span className="text-xl text-elegant-red/70 animate-float animate-delay-200">✦</span>
          <span className="text-xl text-elegant-green/70 animate-float animate-delay-500">❄</span>
        </div>
      </div>
      
      {/* Easter Egg Modal */}
      {showEasterEgg && <EasterEggModal onClose={closeEasterEgg} />}
    </>
  )
}