import HolidayCard from '@/components/HolidayCard'
import Snowfall from '@/components/Snowfall'
import StarryBackground from '@/components/StarryBackground'
import CosmicBadge from '@/components/CosmicBadge'

export default function HomePage() {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG || 'cosmic-holiday'
  
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-white">
      {/* Clean background with subtle accents */}
      <StarryBackground />
      
      {/* Gentle snowfall effect */}
      <Snowfall />
      
      {/* Main holiday card */}
      <HolidayCard />
      
      {/* Cosmic badge */}
      <CosmicBadge bucketSlug={bucketSlug} />
    </main>
  )
}