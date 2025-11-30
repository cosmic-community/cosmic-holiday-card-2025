export default function Ornaments() {
  return (
    <>
      {/* Top left ornament */}
      <div 
        className="ornament w-8 h-8 -top-4 -left-4 bg-festive-red animate-float"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Top right ornament */}
      <div 
        className="ornament w-6 h-6 -top-3 -right-3 bg-festive-gold animate-float"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Bottom left ornament */}
      <div 
        className="ornament w-5 h-5 -bottom-2 left-8 bg-cosmic-blue animate-float"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Bottom right ornament */}
      <div 
        className="ornament w-7 h-7 -bottom-3 -right-3 bg-festive-green animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Star on top */}
      <div className="star -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-twinkle">
        ⭐
      </div>
    </>
  )
}