/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,css,tsx}', // Remova os espaços entre as extensões
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A'
      },
      
        gridTemplateRows:{
          7: 'reapet(7, minmax(0, 1fr))'
        }
      
    },
  },
  plugins: [],
}


