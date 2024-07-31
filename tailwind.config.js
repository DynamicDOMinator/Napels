
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "brad-from": "#67666A",
        "brand-to": "#C0C0C2",
      },
      fontFamily: {
        Dongle: ["Dongle", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
