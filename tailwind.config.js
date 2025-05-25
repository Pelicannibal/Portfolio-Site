export default {
  darkMode: 'media',
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#040F0F',
        lightBox: '#C7CEDB',
        tooltip: '#F0F2EF',
        openCard: '#2D3A3A'
      },
      borderRadius: {
        lg: '16px',
        full: '9999px'
      }
    }
  },
  plugins: []
}