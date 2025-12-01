'use client'

import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  symbol: string
}

const snowSymbols = ['✦', '✨', '⭐', '💫', '✵', '❋']

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 6,
      duration: Math.random() * 12 + 12,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.2,
      symbol: snowSymbols[Math.floor(Math.random() * snowSymbols.length)] || '✦',
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="snow-particle-cosmic animate-snow-fall"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
          }}
        >
          {flake.symbol}
        </span>
      ))}
    </div>
  )
}