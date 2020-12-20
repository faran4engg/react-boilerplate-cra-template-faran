module.exports = {
  purge: {
    mode: 'layers',
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-color-light': '#6C2BD9',
        'theme-color-dark': '#baa5dc',
        'dark-mode': '#000000',
        'dark-mode-content-bg': '#171717',
        'light-mode': '#ffffff',
        'light-mode-content-bg': '#F9F9F9',
        'light-mode-text': '#3c3c3c',
        'dark-mode-text': '#cccccc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
