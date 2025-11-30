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
        
        {/* Main card */}
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 cosmic-gradient opacity-50" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Cosmic Logo - Clickable for Easter Egg */}
            <div 
              className={`mb-8 cursor-pointer transition-transform duration-300 ${isShaking ? 'animate-shake' : 'hover:scale-110'}`}
              onClick={handleLogoClick}
              title="✨"
            >
              <CosmicLogo className="w-20 h-20 mx-auto animate-glow" />
              {clickCount > 0 && clickCount < 7 && (
                <div className="absolute -top-2 -right-2 bg-festive-gold text-cosmic-dark text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce-in">
                  {7 - clickCount}
                </div>
              )}
            </div>
            
            {/* Holiday greeting */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              <span className="gradient-text">Happy Holidays</span>
            </h1>
            
            {/* Year */}
            <div className="text-6xl md:text-8xl font-bold text-white/20 mb-6 animate-slide-up animate-delay-200">
              2025
            </div>
            
            {/* Message */}
            <p className="text-lg md:text-xl text-white/80 mb-8 animate-slide-up animate-delay-300 leading-relaxed">
              From all of us at <span className="text-cosmic-purple font-semibold">Cosmic</span>, 
              <br className="hidden md:block" />
              we wish you a season filled with 
              <span className="text-festive-gold"> joy</span>, 
              <span className="text-cosmic-blue"> wonder</span>, and 
              <span className="text-festive-green"> endless possibilities</span>.
            </p>
            
            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animate-delay-500">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cosmic-purple/50" />
              <span className="text-2xl">✨🎄✨</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cosmic-blue/50" />
            </div>
            
            {/* Closing message */}
            <p className="text-white/60 text-sm animate-fade-in animate-delay-700">
              Thank you for being part of our cosmic journey.
              <br />
              Here&apos;s to an extraordinary 2025! 🚀
            </p>
            
            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in animate-delay-1000">
              <p className="text-white/40 text-sm font-festive italic">
                With love and stardust,
              </p>
              <p className="text-cosmic-purple font-semibold mt-1">
                The Cosmic Team 💜
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="flex justify-center gap-4 mt-6 animate-fade-in animate-delay-1000">
          <span className="text-2xl animate-float">🎁</span>
          <span className="text-2xl animate-float animate-delay-200">❄️</span>
          <span className="text-2xl animate-float animate-delay-300">🌟</span>
          <span className="text-2xl animate-float animate-delay-500">🎄</span>
          <span className="text-2xl animate-float animate-delay-700">🎅</span>
        </div>
      </div>
      
      {/* Easter Egg Modal */}
      {showEasterEgg && <EasterEggModal onClose={closeEasterEgg} />}
    </>
  )
}