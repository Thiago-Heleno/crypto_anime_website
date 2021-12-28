module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            transform: 'scaleY(0)'
          },
          '80%': {
              transform: 'scaleY(1.1)'
          },
          '100%': {
              transform: 'scaleY(1)'
          }
        }
      },
      animation: {
        appear: 'appear 0.3s ease-in-out forwards',
      },
      fontFamily: {
        sans: ['"Proxima Nova"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
//Just change Something fot it to work!