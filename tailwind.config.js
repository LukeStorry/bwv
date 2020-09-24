module.exports = {
  purge: ["./src/**/*.11ty.js"],
  theme: {
    inset: {
      "0": 0,
      "1/2": "49.4%",
      in: "5%",
    },
    extend: {
      width: { fit: "fit-content" },
      height: { "screen-part": "70vh" },
      margin: {
        "-28": "-7rem",
        "-full": "-100%",
        "-screen": "-100vh",
        "-screen-part": "-70vh",
      },
    },
  },
  variants: {
    textTransform: ["responsive", "hover", "focus", "motion-safe"],
    fontSize: ["responsive", "hover", "focus", "motion-safe"],
    scale: ["responsive", "hover", "focus", "active", "motion-safe"],
    backgroundColor: ['responsive', 'hover', 'focus', 'visited'],
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
