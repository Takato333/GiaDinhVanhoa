/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#b5835a",
        "gold": "#D4AF37",
        "background-light": "#f7f7f6",
        "background-dark": "#1d1915",
        "deep-charcoal": "#120a0a",
        "traditional-brown": "#4a2c2a",
        "ivory": "#F5F5DC",
        "parchment": "#f2e8cf",
        "bronze": "#8e5a31"
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"],
        "serif": ["Noto Serif", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
