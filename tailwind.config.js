module.exports = {
  purge: ["src/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0.75: '0.1875rem'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
