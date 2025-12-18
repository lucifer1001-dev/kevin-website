import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Keep class-based for consistency
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Chocolate Dark Theme - Always Active
        'chocolate': {
          950: '#0a0806',
          900: '#1a1410',
          800: '#2a1f1a',
          700: '#3d2f24',
        },
        'amber-cream': '#f5ebe0',
      },
    },
  },
  plugins: [],
};
export default config;

