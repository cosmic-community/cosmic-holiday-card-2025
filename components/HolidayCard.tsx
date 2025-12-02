import CosmicLogo from './CosmicLogo'
import Ornaments from './Ornaments'
import InteractiveLogo from './InteractiveLogo'

export default function HolidayCard() {
  return (
    <div className="relative z-10 max-w-2xl w-full">
      {/* Decorative ornaments */}
      <Ornaments />
      
      {/* Main card - Apple-inspired glass effect */}
      <div className="apple-glass-card p-12 md:p-16 text-center relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* Cosmic Logo - Clickable for Easter Egg */}
          <InteractiveLogo>
            <CosmicLogo className="w-16 h-16 mx-auto opacity-90" />
          </InteractiveLogo>
          
          {/* Large title - Apple style */}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-white leading-tight">
            Happy Holidays
          </h1>
          
          {/* Festive 2025 with SVG-style gradient - Changed: Added festive gradient styling */}
          <div className="mb-8">
            <p className="text-7xl md:text-8xl font-bold leading-relaxed festive-gradient-text">
              2025
            </p>
            {/* Decorative festive elements around 2025 */}
            <div className="flex justify-center gap-4 mt-2">
              <span className="text-2xl text-festive-joy animate-twinkle">✨</span>
              <span className="text-2xl text-festive-warmth animate-twinkle animate-delay-200">🎉</span>
              <span className="text-2xl text-festive-peace animate-twinkle animate-delay-500">⭐</span>
            </div>
          </div>
          
          {/* Minimal divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-festive-joy to-transparent" />
            <span className="text-festive-gold text-sm">✦</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-festive-warmth to-transparent" />
          </div>
          
          {/* Message with festive color highlights - Changed: Added festive color keywords */}
          <p className="text-base text-cosmic-gray-light mb-4 leading-relaxed font-normal max-w-lg mx-auto">
            From all of us at <span className="text-white font-semibold">Cosmic</span>, we wish you a season filled with <span className="text-festive-joy font-semibold">joy</span>, <span className="text-festive-warmth font-semibold">warmth</span>, and <span className="text-festive-peace font-semibold">peace</span>.
          </p>
          
          {/* Thank you message */}
          <p className="text-base text-cosmic-gray-light mb-8 leading-relaxed font-normal max-w-lg mx-auto">
            Thank you for being part of our journey.
            <br />
            Here&apos;s to an extraordinary 2025.
          </p>
          
          {/* Signature */}
          <div className="mt-10 pt-8 border-t border-cosmic-gray-dark/30">
            <p className="text-cosmic-gray text-xs font-medium tracking-widest uppercase mb-2">
              With Warmth,
            </p>
            <p className="text-white font-semibold text-sm">
              The Cosmic Team
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative elements - festive colors - Changed: Updated with festive colors */}
      <div className="flex justify-center gap-6 mt-8">
        <span className="text-xl text-festive-joy/60 animate-float">✦</span>
        <span className="text-xl text-festive-warmth/60 animate-float animate-delay-200">✨</span>
        <span className="text-xl text-festive-peace/60 animate-float animate-delay-500">✦</span>
      </div>
    </div>
  )
}