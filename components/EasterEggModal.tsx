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
  const [copied, setCopied] = useState(false)

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

  const copyPromoCode = async () => {
    try {
      await navigator.clipboard.writeText('COSMIC2025')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Confetti - Changed: Start from -20px above viewport */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            top: '-20px',
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
        </p>
        
        {/* Secret message - Changed: Added copy button with green checkmark */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
          <p className="text-green-700 font-semibold mb-2">🎁 Holiday Special:</p>
          <div className="flex items-center justify-center gap-3">
            <code className="text-2xl font-mono text-yellow-600 tracking-wider">
              COSMIC2025
            </code>
            <button
              onClick={copyPromoCode}
              className={`relative p-2 rounded-lg transition-all duration-300 ${
                copied 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label="Copy promo code"
            >
              {copied ? (
                <svg 
                  className="w-5 h-5 text-white animate-bounce-in" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              ) : (
                <svg 
                  className="w-5 h-5 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
                  />
                </svg>
              )}
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-3 font-medium">
            Use this holiday code for $25 off
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Good until January 1, 2026
          </p>
        </div>

        {/* Changed: Added call-to-action button to apply code */}
        <a
          href="https://app.cosmicjs.com/account/billing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cosmic-blue to-cosmic-purple text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Apply Code in Dashboard
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}