'use client'

import { useEffect, useState } from 'react'

interface Star {
  id: number
  left: number
  top: number
  size: number
  delay: number
}

export default function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-[#1a1a2e] to-cosmic-dark" />
      
      {/* Aurora effect */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, rgba(107, 92, 231, 0.4) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float animate-delay-500"
          style={{ background: 'radial-gradient(circle, rgba(41, 171, 226, 0.3) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float animate-delay-1000"
          style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)' }}
        />
      </div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}