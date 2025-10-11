// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'translate-and-fade-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(100%)', opacity: '1' }, // Translate most of the way
          '100%': { transform: 'translateY(100%)', opacity: '0' }, // Then, fade out at the end
        },
        'translate-and-fade-in': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '80%': { transform: 'translateY(100%)', opacity: '0' }, // Translate most of the way
          '100%': { transform: 'translateY(100%)', opacity: '1' }, // Then, fade out at the end
        },
      },
      animation: {
        'translate-and-fade-out': 'translate-and-fade-out 1s ease-in-out forwards',
        'translate-and-fade-in': 'translate-and-fade-out 1s ease-in-out forwards',

      },
    },
  },
  plugins: [],
};
