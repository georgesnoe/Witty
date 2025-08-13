import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {},
      backgroundImage: {},
    },
  },
};

export default config;
