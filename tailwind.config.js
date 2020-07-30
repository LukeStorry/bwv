module.exports = {
  purge: ["./src/**/*.11ty.js", "./src/_data/sections.json"],
  theme: {
    inset: {
      "0": 0,
      "1/2": "50%",
      in: "10%",
    },
    extend: {
      width: { fit: "fit-content" },
      margin: { "-28": "-7rem", "-full": "-100%" },
    },
  },
  variants: {
    textTransform: ["responsive", "hover", "focus", "motion-safe"],
    fontSize: ["responsive", "hover", "focus", "motion-safe"],
    scale: ["responsive", "hover", "focus", "active", "motion-safe"],
    backgroundColor: ["responsive", "hover", "focus", "odd", "even"],
    margin: ["responsive", "hover", "focus", "odd", "even"],
    alignSelf: ["responsive", "odd", "even"],
    textAlign: ["responsive", "odd", "even"],
    alignItems: ["responsive", "odd", "even"],
    padding: ["responsive", "odd", "even"],
  },
  plugins: [],
};
