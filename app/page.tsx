import HolidayCard from '@/components/HolidayCard'
import Snowfall from '@/components/Snowfall'
import FloatingIcons from '@/components/FloatingIcons'
import CosmicBadge from '@/components/CosmicBadge'

export default function HomePage() {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG || 'cosmic-holiday'
  
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden bg-cosmic-navy">
      {/* Dark navy background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-navy via-cosmic-navy-light to-cosmic-navy" />
      
      {/* Floating cosmic icons */}
      <FloatingIcons />
      
      {/* Gentle snowfall effect */}
      <Snowfall />
      
      {/* Main holiday card */}
      <HolidayCard />
      
      {/* Cosmic badge */}
      <CosmicBadge bucketSlug={bucketSlug} />
    </main>
  )
}