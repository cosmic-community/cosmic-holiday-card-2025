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
    const generatedStars: Star[] = Array.from({ length: 30 }, (_, i) => ({
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
      {/* Clean neutral gradient background for better card contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-100" />
      
      {/* Subtle dots */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}