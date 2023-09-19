/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        '1/5': '20%',
      },
      fontFamily: {
        HKGroteskRegular: ['var(--font-hk)'],
      }
    },
  },
  plugins: [],
}

