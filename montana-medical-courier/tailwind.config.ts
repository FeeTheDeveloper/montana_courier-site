import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic tokens backed by CSS variables (set in globals.css) */
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          hover: "rgb(var(--color-primary-hover) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
        },
        charcoal: {
          DEFAULT: "rgb(var(--color-charcoal) / <alpha-value>)",
        },
        slate: {
          DEFAULT: "rgb(var(--color-slate) / <alpha-value>)",
        },
        "cool-gray": {
          DEFAULT: "rgb(var(--color-cool-gray) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
