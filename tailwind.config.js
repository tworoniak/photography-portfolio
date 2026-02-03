/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a', // deep black
        fg: '#e5e5e5', // off-white text
        muted: '#9ca3af', // subtle gray
        accent: '#b91c1c', // moody red accent
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
