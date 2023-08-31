/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#cb6ce6'
      },
      keyframes: {
        swipe: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-100%)' }
        }
      },
      animation: {
        swipe: 'swipe 30s linear infinite backwards'
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}
