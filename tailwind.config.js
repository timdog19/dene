module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '42': '10.5rem',
        '84.5%': '84.5%',
        '105%': '105%',
        '412px-rem': '25.75rem',
        '459px-rem': '28.6875rem',
        '795px-rem': '49.6875rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}