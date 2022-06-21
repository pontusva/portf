/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'charcoal': "#36454f",
        'darker': '#181818',
        'jonquil': "#ebc30e",
        'vom': '#5cdb95',
        'cream': '#edf5e1',
        'dark': '#1a1a1d',
        'smoothred': '#6f2232',
        'vomblue': "#05386b"
      }
    },
  },
  plugins: [],
}
