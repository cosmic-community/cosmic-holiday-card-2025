'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

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
  const [showTooltip, setShowTooltip] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
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
      // Changed: Updated promo code to COSMIC2026
      await navigator.clipboard.writeText('COSMIC2026')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
      // Fallback: Create a temporary input to copy
      const textArea = document.createElement('textarea')
      textArea.value = 'COSMIC2026' // Changed: Updated promo code to COSMIC2026
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (fallbackErr) {
        console.error('Fallback copy failed:', fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  // Don't render until mounted (client-side only)
  if (!mounted) {
    return null
  }

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop - Changed: Using React Portal to render directly to body */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Confetti */}
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
      
      {/* Modal content */}
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
        
        {/* Easter egg content - Changed: Capitalized "Cosmic" */}
        <div className="text-6xl mb-6 animate-bounce-in">🥚✨</div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          You Found It!
        </h2>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Congratulations, Cosmic explorer! 🚀
          <br /><br />
          You&apos;ve discovered the secret Easter egg hidden in our holiday card.
        </p>
        
        {/* Secret message */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
          <p className="text-green-700 font-semibold mb-4">🎁 Holiday Special:</p>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative inline-block">
              <button
                onClick={copyPromoCode}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className={`relative text-2xl font-mono tracking-wider px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                  copied 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-yellow-600 bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label="Click to copy promo code"
              >
                {/* Changed: Updated promo code display to COSMIC2026 */}
                <code>COSMIC2026</code>
                {copied ? (
                  <svg 
                    className="w-5 h-5 text-green-600 animate-bounce-in" 
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
              {/* Tooltip */}
              {showTooltip && !copied && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-3 rounded whitespace-nowrap">
                  Copy
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
              {copied && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs py-1 px-3 rounded whitespace-nowrap">
                  Copied!
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 font-medium">
            Use this holiday code for $25 off
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Good until January 1, 2026
          </p>
        </div>

        {/* Call-to-action button - Changed: Removed hover animation and set solid cosmic blue background */}
        <a
          href="https://app.cosmicjs.com/account/billing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          style={{ backgroundColor: '#29abe2' }}
        >
          Apply Code in Dashboard
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )

  // Use React Portal to render modal directly to document.body
  // This bypasses any parent container positioning constraints
  return createPortal(modalContent, document.body)
}