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
              The Cosmic Holiday Event
            </h1>
            
            {/* Subtitle with gradient accent */}
            <p className="text-xl md:text-2xl text-cosmic-gray mb-8 animate-slide-up animate-delay-200 leading-relaxed font-normal">
              Get an inspiring experience with every innovation.
              <span className="block mt-2 text-cosmic-blue font-medium">Ends 12.31.</span>
            </p>
            
            {/* CTA Button - Apple style */}
            <div className="mb-10 animate-slide-up animate-delay-300">
              <a 
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-cosmic-blue text-white text-base font-medium rounded-full hover:bg-cosmic-blue-dark transition-all duration-200 hover:scale-105"
              >
                Explore
              </a>
            </div>
            
            {/* Minimal divider */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animate-delay-500">
              <div className="h-px w-12 bg-cosmic-gray-dark" />
              <span className="text-cosmic-blue text-sm">✦</span>
              <div className="h-px w-12 bg-cosmic-gray-dark" />
            </div>
            
            {/* Message */}
            <p className="text-base text-cosmic-gray-light mb-8 animate-fade-in animate-delay-700 leading-relaxed font-normal max-w-lg mx-auto">
              From all of us at <span className="text-white font-semibold">Cosmic</span>, 
              we wish you a season filled with 
              <span className="text-cosmic-cyan font-medium"> innovation</span>, 
              <span className="text-cosmic-orange font-medium"> creativity</span>, and 
              <span className="text-cosmic-purple font-medium"> wonder</span>.
            </p>
            
            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-cosmic-gray-dark/30 animate-fade-in animate-delay-1000">
              <p className="text-cosmic-gray text-xs font-medium tracking-widest uppercase mb-2">
                With gratitude,
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