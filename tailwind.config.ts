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
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'bounce': 'bounce 2s infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.3)',
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
    "animate-blob",
    "animation-delay-2000",
    "animation-delay-4000",
    "animate-fadeInUp",
    "animate-bounce",
    "animate-ping",
  ],
  plugins: [
    forms,
    typography,
    aspectRatio,
  ],
};

export default config;