'use client'

import { useEffect, useState } from 'react'

interface FloatingIcon {
  id: number
  icon: string
  left: number
  top: number
  size: number
  delay: number
  duration: number
  color: string
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    // Cosmic-themed icons with festive elements
    const iconSet = ['🚀', '🌟', '✨', '⭐', '💫', '🌙', '🪐', '☄️', '🎉', '🎊', '🎈']
    // Updated colors with festive theme - Changed: Added festive colors
    const colors = [
      'rgba(255, 107, 157, 0.5)', // festive-joy (pink)
      'rgba(255, 179, 71, 0.5)',  // festive-warmth (orange)
      'rgba(135, 206, 235, 0.5)', // festive-peace (blue)
      'rgba(255, 215, 0, 0.5)',   // festive-gold
      'rgba(255, 105, 180, 0.5)', // festive-rose
      'rgba(152, 255, 152, 0.5)', // festive-mint
      'rgba(139, 233, 253, 0.4)', // cosmic-cyan
      'rgba(167, 139, 250, 0.4)', // cosmic-purple
    ]

    const generatedIcons: FloatingIcon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      icon: iconSet[Math.floor(Math.random() * iconSet.length)] || '✨',
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 40 + 30,
      delay: Math.random() * 4,
      duration: Math.random() * 8 + 8,
      color: colors[Math.floor(Math.random() * colors.length)] || 'rgba(255, 107, 157, 0.5)',
    }))
    
    setIcons(generatedIcons)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {icons.map((item) => (
        <div
          key={item.id}
          className="absolute animate-float-slow"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            textShadow: `0 0 30px ${item.color}, 0 0 60px ${item.color}`,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  )
}