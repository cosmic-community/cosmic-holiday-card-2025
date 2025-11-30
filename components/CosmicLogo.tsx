interface CosmicLogoProps {
  className?: string
}

export default function CosmicLogo({ className = '' }: CosmicLogoProps) {
  return (
    <img 
      src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg"
      alt="Cosmic Logo"
      className={className}
    />
  )
}