/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* *** DEEP PLUM & SUNSET GRADIENT PALETTE *** */
        riana: {
          blue: '#3F194D',    // Deep Plum (New Main Background - Leftmost color)
          pink: '#C91C7A',    // Magenta (Core Skills - 3rd from left)
          lime: '#E8675C',    // Coral Sunset (Tech Stack - 4th from left)
          beige: '#FFFFFF',   // Pure White (Folder Content Pages)
          dark: '#FFCA06',    // Golden Yellow (Milestones - 5th from left)
          /* Extra utility for text/accents */
          acc: '#68097E'      // Mid-Purple (Secondary accent - 2nd from left)
        },
        /* ******************************************* */
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'], 
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}