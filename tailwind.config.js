/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'madimi': ['Madimi One', 'sans-serif'],
        
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        ripple: 'ripple 2s infinite ease-out',
      }
    },
  },
  plugins: [],
}