/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#D7C7FF", // Very light violet
          "primary-content": "#1A1A1D", // Cool black
          secondary: "#B3A7FF", // Light violet
          "secondary-content": "#1A1A1D",
          accent: "#7C83DB", // Bright periwinkle/violet
          "accent-content": "#1A1A1D",
          neutral: "#E6E6E6", // Light grayscale
          "neutral-content": "#1A1A1D",
          "base-100": "#F3F0FF", // Light violet background
          "base-200": "#E6E6FF", // Light violet
          "base-300": "#D7C7FF", // Very light violet
          "base-content": "#1A1A1D", // Cool black text
          info: "#7C83DB", // Bright periwinkle/violet for info
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#1A1A1D", // Cool black
          "primary-content": "#D7C7FF", // Very light violet
          secondary: "#2C2C2C", // Darker grayscale
          "secondary-content": "#E6E6FF", // Light violet
          accent: "#7C83DB", // Bright periwinkle/violet
          "accent-content": "#E6E6FF", // Light violet
          neutral: "#444444", // Dark grayscale
          "neutral-content": "#E6E6FF",
          "base-100": "#0D0D0D", // Darkest cool black
          "base-200": "#1A1A1D", // Cool black
          "base-300": "#2C2C2C", // Darker grayscale
          "base-content": "#E6E6FF", // Light violet text
          info: "#7C83DB", // Bright periwinkle/violet for info
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        'custom-light': '#1A1A1D', // Cool black for light theme text
        'custom-dark': '#E6E6FF', // Light violet for dark theme text
      }
    },
  },
};
