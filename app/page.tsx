import HolidayCard from '@/components/HolidayCard'
import Snowfall from '@/components/Snowfall'
import FloatingIcons from '@/components/FloatingIcons'
import CosmicBadge from '@/components/CosmicBadge'

export default function HomePage() {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG || 'cosmic-holiday'
  
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-cosmic-navy">
      {/* Dark navy background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-navy via-cosmic-navy-light to-cosmic-navy" />
      
      {/* Floating cosmic icons */}
      <FloatingIcons />
      
      {/* Gentle snowfall effect */}
      <Snowfall />
      
      {/* Main holiday card */}
      <HolidayCard />
      
      {/* Hidden surprise hint */}
      <div className="relative z-10 mt-8 text-center">
        <p className="text-cosmic-gray-light text-sm opacity-60">
          ✨ Psst... there&apos;s a hidden surprise somewhere on this page
        </p>
      </div>
      
      {/* Cosmic badge */}
      <CosmicBadge bucketSlug={bucketSlug} />
    </main>
  )
}