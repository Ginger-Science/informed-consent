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
          primary: "#56c5fb", // Bright sky blue
          "primary-content": "#FFFFFF", // White text content
          secondary: "#000000", // Black
          "secondary-content": "#fd9905", // Vibrant orange
          accent: "#56c5fb", // Bright sky blue
          "accent-content": "#FFFFFF", // White text content
          neutral: "#ededed", // Light gray
          "neutral-content": "#000000", // Black text content
          "base-100": "#ededed", // Light gray background
          "base-200": "#e0e0e0", // Slightly darker gray
          "base-300": "#cfcfcf", // Even darker gray
          "base-content": "#000000", // Black text content
          info: "#ffa810", // Vibrant orange
          success: "#2baceb", // Bright cyan-blue
          warning: "#ffa810", // Vibrant orange
          error: "#ffa810", // Vibrant orange

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
          primary: "#56c5fb", // Bright sky blue
          "primary-content": "#FFFFFF", // White text content
          secondary: "#000000", // Black
          "secondary-content": "#fd9905", // Vibrant orange
          accent: "#56c5fb", // Bright sky blue
          "accent-content": "#FFFFFF", // White text content
          neutral: "#444444", // Dark grayscale
          "neutral-content": "#FFFFFF", // White text content
          "base-100": "#000000", // Black background
          "base-200": "#121212", // Slightly lighter black
          "base-300": "#1a1a1a", // Even lighter black
          "base-content": "#FFFFFF", // White text content
          info: "#ffa810", // Vibrant orange
          success: "#2baceb", // Bright cyan-blue
          warning: "#ffa810", // Vibrant orange
          error: "#ffa810", // Vibrant orange

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
        'custom-light': '#000000', // Black for light theme text
        'custom-dark': '#FFFFFF', // White for dark theme text
      }
    },
  },
};
