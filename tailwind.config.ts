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
        ink: {
          DEFAULT: "#242424",
          muted: "#6b6b6b",
          faint: "#9b9b9b",
        },
        accent: {
          DEFAULT: "#1a8917",
          hover: "#156d12",
        },
        border: {
          DEFAULT: "#e6e6e6",
          light: "#f2f2f2",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "Source Serif 4",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      maxWidth: {
        article: "680px",
        site: "1152px",
        form: "672px",
      },
    },
  },
  plugins: [],
};

export default config;
