/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f0f1ff",
        blue: "#000aff",
        black: "#000",
        white: "#fff",
        silver: "#b6b6b6",
        gray: {
          "100": "#909090",
          "200": "#888",
        },
        lightgray: "#d2d2d2",
        blueviolet: "#4a51fa",
        darkslategray: "#434343",
        dimgray: "#616161",
      },
      fontFamily: {
        "product-sans": "'Product Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "21xl": "40px",
      xl: "20px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
