/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        schemeA: "#040F0F",
        schemeB: "#C7CEDB",
        highlightCol: "#2BA84A",
        selectedCol: "#248232",
        Gunmetal: "#2D3A3A",
      },
      borderRadius: {
        default: '16px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

