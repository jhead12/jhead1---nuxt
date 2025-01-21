import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: "#0b1536",
        customBg: "#0c1436",
        customSecondary: "#d4a55d",
        customAccent: "#e4ccaf",
        customDark: "#8c6a3d",
        customLight: "#fff8e1",
        customWhite: "#ffffff", // Add custom white color if needed

      },
      fontFamily: {
        sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
        
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
