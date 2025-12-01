export default function Ornaments() {
  return (
    <>
      {/* Top left ornament - festive joy (pink) - Changed: Updated to festive colors */}
      <div 
        className="ornament-cosmic w-3 h-3 -top-2 -left-2 bg-festive-joy/60 animate-float"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Top right ornament - festive warmth (orange) - Changed: Updated to festive colors */}
      <div 
        className="ornament-cosmic w-4 h-4 -top-1 -right-1 bg-festive-warmth/60 animate-float"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Bottom left ornament - festive peace (blue) - Changed: Updated to festive colors */}
      <div 
        className="ornament-cosmic w-4 h-4 -bottom-1 left-6 bg-festive-peace/60 animate-float"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Bottom right ornament - festive gold - Changed: Updated to festive colors */}
      <div 
        className="ornament-cosmic w-3 h-3 -bottom-2 -right-2 bg-festive-gold/60 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Subtle star on top - festive mint - Changed: Updated to festive colors */}
      <div className="star -top-6 left-1/2 transform -translate-x-1/2 text-2xl animate-twinkle text-festive-mint/70">
        ✦
      </div>
    </>
  )
}