/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* *** DEEP PLUM & SUNSET GRADIENT PALETTE *** */
        riana: {
          blue: '#3F194D',    // Deep Plum (New Main Background)
          pink: '#C91C7A',    // Magenta (Core Skills)
          lime: '#E8675C',    // Coral Sunset (Tech Stack)
          beige: '#FFFFFF',   // Pure White (Folder Content Pages)
          dark: '#FFCA06',    // Golden Yellow (Milestones)
          acc: '#68097E'      // Mid-Purple (Secondary accent)
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'], 
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [
    // Custom plugin to handle the blurriness in scaled images
    function({ addUtilities }) {
      addUtilities({
        '.render-edge': {
          'image-rendering': '-webkit-optimize-contrast',
          'image-rendering': 'crisp-edges',
        },
        '.render-pixel': {
          'image-rendering': 'pixelated',
        },
      })
    }
  ],
}