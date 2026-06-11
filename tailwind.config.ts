import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        farm: "#14532D",
        tech: "#0F172A",
        amber: "#F59E0B"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(20, 83, 45, 0.24)"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(15,23,42,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
