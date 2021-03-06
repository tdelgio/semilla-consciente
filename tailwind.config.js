module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      colors: {
        "winter-gray": "#737589",
        "blue-lagoon": "#34526A",
        "pine-green": "#31483B",
        "branch-brown": "#765A2F",
        misk: "#A0937D",
        vanilla: "#F2EDD7",
        "chilli-pepper": "#A21631"
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover"],
      stroke: ["hover"],
      scale: ["active", "group-hover"],
    },
  },
  plugins: [],
}
