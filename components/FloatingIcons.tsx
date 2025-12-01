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
    // Cosmic-themed icons similar to Apple's product icons
    const iconSet = ['🚀', '🌟', '✨', '⭐', '💫', '🌙', '🪐', '☄️']
    const colors = [
      'rgba(139, 233, 253, 0.4)', // cyan
      'rgba(245, 158, 11, 0.4)',  // orange
      'rgba(167, 139, 250, 0.4)', // purple
      'rgba(34, 197, 94, 0.4)',   // green
      'rgba(251, 191, 36, 0.4)',  // yellow
      'rgba(236, 72, 153, 0.4)',  // pink
    ]

    const generatedIcons: FloatingIcon[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      icon: iconSet[Math.floor(Math.random() * iconSet.length)] || '✨',
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 40 + 30,
      delay: Math.random() * 4,
      duration: Math.random() * 8 + 8,
      color: colors[Math.floor(Math.random() * colors.length)] || colors[0],
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