module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/images/background.png')",
        "dot-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-pattern": "20px 20px",
      },
      colors: {
        darkBgStart: "#0d0d0d",
        darkBgEnd: "#101827",
      },
    },
  },
};
