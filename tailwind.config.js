/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'custom-light-blue': '#e6f0ff',
        'custom-btn' : '#146EF5',
        'custom-btn-hover' : '#191970',
        'custom-bg-div' : '#E8F3FF', 
      },
      
      fontFamily: {
        sans: ['Raleway', 'Arial', 'sans-serif'], // Replace with your font
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marqueereverse : 'marqueereverse 20s linear infinite',
        
      },
      keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },         // Start position of original logos
            '100%': { transform: 'translateX(-50%)' },    // Move original logos to the left
          },
          marqueereverse: {
            '0%': { transform: 'translateX(-50%)' },     
            '100%': { transform: 'translateX(0%)' },    
        },
    },
  },
}
}