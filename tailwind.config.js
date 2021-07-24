module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        runu: {
          50: "#dffdf9",
          100: "#bef0e9",
          200: "#98e4db",
          300: "#72d9cd",
          400: "#4ecfbe",
          500: "#35b5a5",
          600: "#268d80",
          700: "#17655c",
          800: "#053d37",
          900: "#001613",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
