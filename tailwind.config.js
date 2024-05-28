/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors:{
        "color-100": "#1A2B3D",
        "color-200": "#5A6573",
        "color-300": "#FFE1C2",
        "color-400": "#FFEEDB",
        "color-500": "#3E4957",
        "color-600": "#1882FF",
        "color-700": "#E8F3FF",
        "color-800": "#EBF0F5",
        "color-900": "#F5F7FA",
        "color-1000": "#D8E1EB",
      }
    }
  },
  plugins: [],
};
