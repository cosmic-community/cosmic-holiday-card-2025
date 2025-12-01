/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-navy': '#111827',
        'cosmic-navy-light': '#1F2937',
        'cosmic-blue': '#3B82F6',
        'cosmic-blue-dark': '#2563EB',
        'cosmic-cyan': '#8BE9FD',
        'cosmic-purple': '#A78BFA',
        'cosmic-orange': '#F59E0B',
        'cosmic-gray': '#9CA3AF',
        'cosmic-gray-light': '#D1D5DB',
        'cosmic-gray-dark': '#374151',
        // Festive colors for joy, warmth, and peace
        'festive-joy': '#FF6B9D',      // Vibrant pink for joy
        'festive-warmth': '#FFB347',   // Warm orange for warmth
        'festive-peace': '#87CEEB',    // Soft sky blue for peace
        'festive-gold': '#FFD700',     // Gold for celebration
        'festive-rose': '#FF69B4',     // Hot pink for excitement
        'festive-mint': '#98FF98',     // Mint green for freshness
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'snow-fall': 'snowFall linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out',
        'confetti': 'confetti 3s ease-out forwards',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
      },
      keyframes: {
        snowFall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(180deg)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(139, 233, 253, 0.5))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(139, 233, 253, 0.9))' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-8deg)' },
          '75%': { transform: 'rotate(8deg)' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}