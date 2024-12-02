import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

const config: Config = {
  darkMode: "class", // Se utiliza el modo oscuro mediante una clase CSS
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
        foreground: "var(--foreground)", // Asegúrate de que la variable esté definida en algún lugar
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
    forms,
    typography,
    aspectRatio,
  ],
};

export default config;