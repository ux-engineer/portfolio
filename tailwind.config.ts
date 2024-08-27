import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      // Disable XL & 2XL responsive breakpoints
      screens: {
        'xl': '1024px',
        '2xl': '1024px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['prompt', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
