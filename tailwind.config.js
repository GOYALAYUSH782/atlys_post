/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#7f8084",
          "200": "#27292d",
          "300": "#191920",
          "400": "#131319",
          "500": "rgba(0, 0, 0, 0.5)",
        },
        darkslategray: "#35373b",
        black: "#000",
        silver: "#c5c7ca",
        darkgray: "#969696",
        dodgerblue: {
          "100": "#4a96ff",
          "200": "#307de6",
        },
        white: "#fff",
        dimgray: "#6b6c70",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
