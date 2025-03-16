/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'madimi': ['Madimi One', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],

      },
      colors: {
        "custom-dark-400": "#090716",
        "custom-dark-600": "#131412",
        "custom-dark-800": "#14161A",
        "custom-white-100": "#FCFCFC",

      },
      keyframes: {
        ripple: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ripple: 'ripple 2s infinite ease-out',
      }
    },
  },
  plugins: [],
}