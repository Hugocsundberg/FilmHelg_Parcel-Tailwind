module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }, 
        fadein: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        }
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadein: 'fadein 2.5s ease-out both',
        fadeout: 'fadein 2.5s ease-out reverse forwards',
       }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'checked'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'checked'],
    extend: {},
  },
  plugins: [],
}
