module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      70: '70vh',
    },
    extend: {
      backgroundImage: {
        'kc_banner_with_text': "url('./images/banner_6.webp')",
        'kc_banner_no_text': "url('./images/banner_4.webp')",
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
      black: '#121212',
      gray: '#1c1c1c',
      jade: '#4d5f69'
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};