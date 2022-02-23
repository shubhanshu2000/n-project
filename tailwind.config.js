module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 50%': {
            transform: 'translateX(1rem)'
          },
          '0%': {
            transform: 'translateX(-1rem)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-out ',
      }
    },
  },
  plugins: [],
}
