module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './src/**/*.js',
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
        },
        outRight: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(100%)'}
        },
        outLeft: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'}
        }
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadein: 'fadein 2.5s ease-out both',
        fadeout: 'fadein 2.5s ease-out reverse forwards',
        outRight: 'outRight 3s .3s ease-in-out both',
        outLeft: 'outLeft 3s .3s ease-in-out both'
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
