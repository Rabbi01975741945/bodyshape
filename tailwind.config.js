module.exports = {
  theme: {
    extend: {
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 1s ease-out forwards',
        'slide-right': 'slide-right 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
