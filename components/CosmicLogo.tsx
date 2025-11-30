interface CosmicLogoProps {
  className?: string
}

export default function CosmicLogo({ className = '' }: CosmicLogoProps) {
  return (
    <img 
      src="https://cdn.cosmicjs.com/a2778660-c98c-11ed-b01d-23d7b265c299-cosmicicon.svg"
      alt="Cosmic Logo"
      className={className}
    />
  )
}