/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': 'hsl(252, 94%, 67%)',
        'primary-h': 'hsl(252, 100%, 73%)',
        'dark-blue': 'hsl(233, 31%, 17%)',
        'dark-gray': 'hsl(233, 30%, 21%)',
        
        'light-gray': 'hsl(231, 73%, 93%)',
        'm-gray': 'hsl(231, 20%, 61%)',
        'light-blue': 'hsl(231, 37%, 63%)',
        'secondary-black': 'hsl(228, 29%, 7%)',

        'accent-red': 'hsl(0, 80%, 63%)',
        'accent-light': 'hsl(0, 100%, 80%)',
        
        'light-bg': 'hsl(240, 27%, 98%)',
        'dark-bg': 'hsl(233, 30%, 11%)',

      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        'hp': '14px',
        'dl': '16px',
      },
      fontWeight: {
        light: 300,
        semiBold: 600,
        bold: 800,
      },
      screens: {
        'sm': { 'max': '320px' },    // Mobile screen size
        'md': { 'max': '800px' },    // Tablet screen size (if needed)
        'lg': { 'max': '1024px' },   // Desktop screen size
        'xl': { 'max': '1440px' },   // Large desktop screen size
      },
    },
  },
  plugins: [],
}


