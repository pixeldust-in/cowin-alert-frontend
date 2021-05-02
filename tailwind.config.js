module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors :{
        purple: "#4255FE",
        blue: "#42B8FE",
        'light-blue': "#EBF2FF",
        gray: "#8E9299",
        'light-gray': "#F2F7FC",
        green: "#63C858",
        black: "#161922",
      },
      width: {
        '235': '235px',
        '310': '310px',
        '407': '407px',
        '536': '536px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
