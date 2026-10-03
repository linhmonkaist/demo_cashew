import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2fa949",
          dark: "#1d6b32",
          soft: "#e7f6eb",
        },
        cream: "#f6f3ee",
        sand: "#f5f5f3",
        ink: "#172016",
        muted: "#5d675e",
      },
    },
  },
  plugins: [],
} satisfies Config;
