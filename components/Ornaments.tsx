export default function Ornaments() {
  return (
    <>
      {/* Top left ornament - cosmic cyan */}
      <div 
        className="ornament-cosmic w-3 h-3 -top-2 -left-2 bg-cosmic-cyan/60 animate-float"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Top right ornament - cosmic purple */}
      <div 
        className="ornament-cosmic w-4 h-4 -top-1 -right-1 bg-cosmic-purple/60 animate-float"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Bottom left ornament - cosmic orange */}
      <div 
        className="ornament-cosmic w-4 h-4 -bottom-1 left-6 bg-cosmic-orange/60 animate-float"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Bottom right ornament - cosmic blue */}
      <div 
        className="ornament-cosmic w-3 h-3 -bottom-2 -right-2 bg-cosmic-blue/60 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Subtle star on top */}
      <div className="star -top-6 left-1/2 transform -translate-x-1/2 text-2xl animate-twinkle text-cosmic-cyan/70">
        ✦
      </div>
    </>
  )
}