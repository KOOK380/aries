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
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#7C3AED",
          secondary: "#A855F7",
        },
        surface: {
          base: "#FFFFFF",
          heading: "#111827",
          text: "#6B7280",
          border: "#F3F4F6",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        mega: "0 24px 64px -16px rgba(17, 24, 39, 0.18), 0 8px 24px -12px rgba(17, 24, 39, 0.12)",
        glow: "0 10px 30px -8px rgba(124, 58, 237, 0.55)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        shimmer: "shimmer 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
