/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F4C430', // Bright gold
          DEFAULT: '#D4AF37', // Classic metallic gold
          dark: '#AA8C2C', // Darker gold shade
        },
        black: {
          DEFAULT: '#000000', // Pure black for strong contrast
          rich: '#0a0a0a', // Rich black for backgrounds
          light: '#1a1a1a', // Slightly lighter black for cards/surfaces
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
