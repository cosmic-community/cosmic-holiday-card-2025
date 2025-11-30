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
      <div className="relative z-10 max-w-lg w-full">
        {/* Decorative ornaments */}
        <Ornaments />
        
        {/* Main card */}
        <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            {/* Cosmic Logo - Clickable for Easter Egg */}
            <div 
              className={`mb-8 cursor-pointer transition-transform duration-300 ${isShaking ? 'animate-shake' : 'hover:scale-105'}`}
              onClick={handleLogoClick}
              title="✨"
            >
              <div className="relative inline-block">
                <CosmicLogo className="w-14 h-14 mx-auto" />
                {clickCount > 0 && clickCount < 7 && (
                  <div className="absolute -top-1 -right-1 bg-elegant-green text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-in">
                    {7 - clickCount}
                  </div>
                )}
              </div>
            </div>
            
            {/* Holiday greeting */}
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 animate-fade-in text-neutral-900">
              Happy Holidays
            </h1>
            
            {/* Year */}
            <div className="text-6xl md:text-7xl font-extralight text-neutral-200 mb-8 animate-slide-up animate-delay-200 tracking-tight select-none">
              2025
            </div>
            
            {/* Message */}
            <p className="text-base text-neutral-600 mb-8 animate-slide-up animate-delay-300 leading-relaxed font-normal max-w-sm mx-auto">
              From all of us at <span className="text-elegant-green font-semibold">Cosmic</span>, 
              we wish you a season filled with 
              <span className="font-medium"> joy</span>, 
              <span className="text-elegant-red font-medium"> warmth</span>, and 
              <span className="font-medium"> peace</span>.
            </p>
            
            {/* Minimal divider */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animate-delay-500">
              <div className="h-px w-10 bg-neutral-200" />
              <span className="text-elegant-green text-sm">✦</span>
              <div className="h-px w-10 bg-neutral-200" />
            </div>
            
            {/* Closing message */}
            <p className="text-neutral-500 text-sm animate-fade-in animate-delay-700 font-normal leading-relaxed">
              Thank you for being part of our journey.
              <br />
              Here&apos;s to an extraordinary 2025.
            </p>
            
            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-neutral-100 animate-fade-in animate-delay-1000">
              <p className="text-neutral-400 text-xs font-medium tracking-widest uppercase">
                With warmth,
              </p>
              <p className="text-neutral-900 font-semibold mt-1.5 text-sm">
                The Cosmic Team
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative elements - minimal */}
        <div className="flex justify-center gap-6 mt-6 animate-fade-in animate-delay-1000">
          <span className="text-lg text-neutral-300 animate-float">❄</span>
          <span className="text-lg text-neutral-300 animate-float animate-delay-200">✦</span>
          <span className="text-lg text-neutral-300 animate-float animate-delay-500">❄</span>
        </div>
      </div>
      
      {/* Easter Egg Modal */}
      {showEasterEgg && <EasterEggModal onClose={closeEasterEgg} />}
    </>
  )
}