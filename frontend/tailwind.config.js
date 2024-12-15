/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPrimary: '#4CAF50',
        greenLight: '#8BC34A',
        beige: '#FFF8E1',
        brown: '#8D6E63',
        lavender: '#B39DDB',
        blueSky: '#64B5F6',
        yellowAccent: '#FFEB3B',
        grayDark: '#333333',
        grayLight: '#E0E0E0',
      },
    },
  },
  plugins: [],
}