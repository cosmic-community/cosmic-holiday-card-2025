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
    const generatedStars: Star[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Clean white/cream gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      
      {/* Subtle color accents */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, rgba(34, 139, 34, 0.15) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float animate-delay-500"
          style={{ background: 'radial-gradient(circle, rgba(178, 34, 34, 0.1) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full blur-3xl animate-float animate-delay-1000"
          style={{ background: 'radial-gradient(circle, rgba(34, 139, 34, 0.1) 0%, transparent 70%)' }}
        />
      </div>
      
      {/* Subtle dots instead of stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.id % 3 === 0 ? 'rgba(34, 139, 34, 0.3)' : star.id % 3 === 1 ? 'rgba(178, 34, 34, 0.2)' : 'rgba(200, 200, 200, 0.4)',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}