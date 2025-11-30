export default function Ornaments() {
  return (
    <>
      {/* Top left ornament - subtle */}
      <div 
        className="ornament w-4 h-4 -top-2 -left-2 bg-elegant-red/80 animate-float"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Top right ornament */}
      <div 
        className="ornament w-3 h-3 -top-1 -right-1 bg-elegant-green/80 animate-float"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Bottom left ornament */}
      <div 
        className="ornament w-3 h-3 -bottom-1 left-6 bg-elegant-green/60 animate-float"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Bottom right ornament */}
      <div 
        className="ornament w-4 h-4 -bottom-2 -right-2 bg-elegant-red/60 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Subtle star on top */}
      <div className="star -top-6 left-1/2 transform -translate-x-1/2 text-2xl animate-twinkle text-elegant-green/70">
        ✦
      </div>
    </>
  )
}