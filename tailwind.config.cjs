module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-225': 'linear-gradient(225deg, var(--tw-gradient-stops))'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
