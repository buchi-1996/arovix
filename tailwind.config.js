module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'gilroy': ['Gilroy', 'san-serif'],
      'gblack': ['Gilroy-Black', 'san-serif'],
      'gbold': ['Gilroy-Bold', 'san-serif'],
      'gmedium': ['Gilroy-Medium', 'san-serif'],
      'glight': ['Gilroy-Light', 'san-serif'],
      'gheavy': ['Gilroy-Heavy', 'san-serif'],
      'graphikblack': ['GraphikBlack', 'san-serif'],
      'boing': ['Boing', 'san-serif']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        center: true,
      },
    },
  },
  plugins: [],
}