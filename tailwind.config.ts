import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1E3A8A",
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
        },
        gray: {
          dark: "#374151",
          DEFAULT: "#6B7280",
          light: "#F3F4F6",
          veryDark: "#111827",
        },
        background: {
          light: "#F3F4F6",
          dark: "#111827",
        },
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  safelist: [
    "bg-primary-dark",
    "bg-primary-light",
    "bg-primary",
    "text-gray-dark",
    "text-gray-light",
    "text-gray-veryDark",
    "bg-background-light",
    "bg-background-dark",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
