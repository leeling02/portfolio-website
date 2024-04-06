/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/figma-bg.png')"
      },
      fontFamily: {
        "archivo" :["Archivo Narrow", 'sans-serif'], 
        "julius" :["Julius Sans One", 'sans-serif'], 
        "knewave" :["Knewave", 'system-ui']
        
      }
    },
  },
  plugins: [],
}

