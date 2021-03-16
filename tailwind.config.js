const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

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
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      100: '26rem',
      104: '28rem',
      108: '30rem',
      116: '32rem',
      120: '34rem',
      124: '36rem',
      128: '38rem',
      132: '40rem',
      136: '42rem',
    },
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Josefin Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.lightBlue,
        yellow: colors.amber,
        themeRed: {
          DEFAULT: '#cc0028',
          light: '#f6234c'
        }
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'transblack': '#000c'
       }),
      screens: {
        'bio-rem': '92rem',
        'bio-rem-smaller': '85.5rem',
      },
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
        },
        swipeIndication: {
          '0%': {
            transform: 'translateX(0)',
            opacity: 1
          },
          '61.8%': {
            transform: 'translateX(-2rem)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(-2rem)',
            opacity: 0
          }
        }
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadein: 'fadein 2.5s ease-out both',
        fadeout: 'fadein 2.5s ease-out reverse forwards',
        outRight: 'outRight 3s .3s ease-in-out both',
        outLeft: 'outLeft 3s .3s ease-in-out both',
        swipeIndication: 'swipeIndication 3s ease-out both infinite'
       }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'checked'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'checked'],
    borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active', 'checked'],
    borderWidth: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
