'use client'

import { useEffect, useState } from 'react'

interface EasterEggModalProps {
  onClose: () => void
}

interface Confetti {
  id: number
  left: number
  color: string
  delay: number
  size: number
}

export default function EasterEggModal({ onClose }: EasterEggModalProps) {
  const [confetti, setConfetti] = useState<Confetti[]>([])
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Generate confetti
    const colors = ['#6B5CE7', '#29ABE2', '#F59E0B', '#DC2626', '#16A34A', '#EC4899']
    const pieces: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)] || '#6B5CE7',
      delay: Math.random() * 2,
      size: Math.random() * 10 + 5,
    }))
    setConfetti(pieces)
    
    // Show content after a brief delay
    setTimeout(() => setShowContent(true), 300)
  }, [])

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 animate-confetti"
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
      
      {/* Modal content - Changed: White background for readability */}
      <div 
        className={`relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full text-center transform transition-all duration-500 shadow-2xl ${
          showContent ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          ✕
        </button>
        
        {/* Easter egg content */}
        <div className="text-6xl mb-6 animate-bounce-in">🥚✨</div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          You Found It!
        </h2>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Congratulations, cosmic explorer! 🚀
          <br /><br />
          You&apos;ve discovered the secret Easter egg hidden in our holiday card. 
          Your curiosity and persistence are exactly the qualities we love in our community!
        </p>
        
        {/* Secret message */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
          <p className="text-green-700 font-semibold mb-2">🎁 Secret Holiday Code:</p>
          <code className="text-2xl font-mono text-yellow-600 tracking-wider">
            COSMIC2025
          </code>
          <p className="text-gray-500 text-sm mt-3">
            (Use this for something special... maybe?) 😉
          </p>
        </div>
        
        {/* Fun fact */}
        <div className="text-sm text-gray-600 italic">
          <p>Fun fact: The number 7 represents completeness and cosmic perfection in many cultures! 🌟</p>
        </div>
        
        {/* Close prompt */}
        <p className="mt-6 text-gray-400 text-sm">
          Click anywhere to close
        </p>
      </div>
    </div>
  )
}