const { join } = require("path");

/** @type {import('tailwindcss').Config} */
const colors = {
  colorCharlestonGreen: "#222831",
  colorArsenic: "#393E46",
  colorTiffany: "#00ADB5",
  colorBrightGray: "#EEEEEE",
  colorPastelBlue: "#B7C4CF",
  colorAlmond: "#EEE3CB",
  colorJonquil: "#F4CE14",
  colorFeldgrau: "#495E57",
  colorCultured: "#F5F7F8",
  colorSunny: "#F9F07A",
  colorHookersGreen: "#43766C",
  colorAreBlue: "#7752FE",
  colorNeonBlue: "#11009E",
  colorMauveBlue: "#D4ADFC",
  colorCetaceanBlue: "#0C134F",
  colorVioletBlue: "#5C469C",
  colorCarmine: "#E74646",
  colorFerrari: "#FF1E00",
};
export default {
  content: [join(__dirname, "src/**/*!(*.stories|*.spec).{ts,tsx,html}")],
  theme: {
    extend: {
      colors,
      boxShadow: {
        retro: "5px 5px #222831",
      },
      boxShadowColor: colors,
    },
  },
  plugins: [],
};
