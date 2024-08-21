/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
          fadeIn: {
              '0%': { opacity: "0" },
              '100%': { opacity: "1" },
          },
          fadeOut: {
            '0%': { opacity: "1" },
            '100%': { opacity: "0" },
        },
      },
      animation: {
          fadeIn: 'fadeIn 1.2s ease-in-out forwards',
          fadeOut: 'fadeOut 1.2s ease-in-out forwards',
      },},
  },
  plugins: [],
}