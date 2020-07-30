module.exports = {
  purge: ["./src/**/*.11ty.js", "./src/_data/sections.json"],
  theme: {
    extend: {},
  },
  variants: {
    textTransform: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
