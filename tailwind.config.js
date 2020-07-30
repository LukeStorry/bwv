module.exports = {
  purge: ["./src/**/*.11ty.js", "./src/_data/sections.json"],
  theme: {
    extend: {},
  },
  variants: {
    textTransform: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
    scale: ["responsive", "hover", "focus", "active"],
    zIndex: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
