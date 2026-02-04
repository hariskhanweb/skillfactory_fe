import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef6e8",
          100: "#fdebc9",
          200: "#fbd6a1",
          300: "#f8c179",
          400: "#f5a951",
          500: "#F07F1B",
          600: "#e16e17",
          700: "#bb5615",
          800: "#954417",
          900: "#783815",
          950: "#451d09",
        },
        primary: "#F07F1B",
        "header-bg-light": "#fef6e8",
        "subtext-light": "#4A5568",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

