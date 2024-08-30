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
      zIndex: {
        'modal': 999,
        'nav': 10,
      },
      keyframes: {
          fadeIn: {
              '0%': { opacity: "0" },
              '100%': { opacity: "1" },
          },
          fadeOut: {
            '0%': { opacity: "1" },
            '100%': { opacity: "0" },
          },
          'slide-in': {
              '0%': { transform: 'translateY(100%)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          'slide-out': {
              '0%': { transform: 'translateY(0)', opacity: '1' },
              '100%': { transform: 'translateY(100%)', opacity: '0' },
          },
      },
      animation: {
          fadeIn: 'fadeIn 1.2s ease-in-out forwards',
          fadeOut: 'fadeOut 1.2s ease-in-out forwards',
          'slide-in': 'slide-in 0.3s ease-out forwards',
          'slide-out': 'slide-out 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
}