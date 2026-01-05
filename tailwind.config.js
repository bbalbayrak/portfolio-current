tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2b8cee",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-dark": "#192633",
        "card-dark": "#16202a",
        "border-dark": "#233648",
        "text-muted": "#92adc9",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      animation: {
        blob: "blob 10s infinite",
        shimmer: "shimmer 3s linear infinite",
        "slide-down": "slideDown 1.2s ease-out forwards",
        "spin-slow": "spin 60s linear infinite",
        "spin-orb": "spinOrb 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "grid-flow": "gridFlow 20s linear infinite",
        "particle-float": "particleFloat 15s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        spinOrb: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        gridFlow: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(50px)" },
        },
        particleFloat: {
          "0%": { transform: "translateY(100vh) rotate(0deg)" },
          "100%": { transform: "translateY(-100vh) rotate(360deg)" },
        },
      },
    },
  },
};
