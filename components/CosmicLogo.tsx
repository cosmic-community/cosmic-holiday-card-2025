interface CosmicLogoProps {
  className?: string
}

export default function CosmicLogo({ className = '' }: CosmicLogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cosmicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B5CE7" />
          <stop offset="100%" stopColor="#29ABE2" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="none" 
        stroke="url(#cosmicGradient)" 
        strokeWidth="2"
        filter="url(#glow)"
      />
      
      {/* Inner cosmic symbol */}
      <circle 
        cx="50" 
        cy="50" 
        r="30" 
        fill="url(#cosmicGradient)"
        filter="url(#glow)"
      />
      
      {/* Star accent */}
      <path 
        d="M50 25 L53 40 L68 43 L56 52 L60 67 L50 58 L40 67 L44 52 L32 43 L47 40 Z"
        fill="white"
        opacity="0.9"
      />
      
      {/* Orbital rings */}
      <ellipse 
        cx="50" 
        cy="50" 
        rx="42" 
        ry="15" 
        fill="none" 
        stroke="white" 
        strokeWidth="1"
        opacity="0.3"
        transform="rotate(-20 50 50)"
      />
      <ellipse 
        cx="50" 
        cy="50" 
        rx="42" 
        ry="15" 
        fill="none" 
        stroke="white" 
        strokeWidth="1"
        opacity="0.2"
        transform="rotate(40 50 50)"
      />
    </svg>
  )
}