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
        'theme-color': '#5ab7d5',
        'dark-mode': '#171717',
        'dark-mode-content-bg': '#1e1e1e',
        'light-mode': '#ffffff',
        'light-mode-content-bg': '#f3f3f8',
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
