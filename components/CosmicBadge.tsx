'use client'

import { useState, useEffect } from 'react'

interface CosmicBadgeProps {
  bucketSlug: string
}

export default function CosmicBadge({ bucketSlug }: CosmicBadgeProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const isDismissed = localStorage.getItem('cosmic-badge-dismissed')
    if (!isDismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])
  
  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('cosmic-badge-dismissed', 'true')
  }
  
  if (!isVisible) return null
  
  return (
    <a
      href={`https://www.cosmicjs.com?utm_source=bucket_${bucketSlug}&utm_medium=referral&utm_campaign=app_badge&utm_content=built_with_cosmic`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 flex items-center gap-2 text-elegant-dark text-sm font-medium no-underline transition-all duration-200 z-50 hover:shadow-lg"
      style={{
        position: 'fixed',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        padding: '10px 14px',
        width: '180px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#F9FAFB'
        e.currentTarget.style.borderColor = '#228B22'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#FFFFFF'
        e.currentTarget.style.borderColor = '#E5E7EB'
      }}
    >
      <button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleDismiss()
        }}
        className="absolute -top-2 -right-2 w-5 h-5 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 z-10"
        aria-label="Dismiss badge"
      >
        ×
      </button>
      
      <img 
        src="https://cdn.cosmicjs.com/a2778660-c98c-11ed-b01d-23d7b265c299-cosmicicon.svg" 
        alt="Cosmic Logo" 
        className="w-5 h-5"
      />
      <span className="text-elegant-gray">Built with Cosmic</span>
    </a>
  )
}