export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0B0F19",
        carbon: "#121212",
        brand: {
          DEFAULT: "#ec5430",
          hover: "#f26746",
          muted: "rgba(236, 84, 48, 0.4)",
        },
        heading: "#F3F4F6",
        bodyText: "#9CA3AF",
        glass: {
          bg: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        glow: "0 0 25px rgba(236, 84, 48, 0.3)",
        edge: "0 0 15px rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
