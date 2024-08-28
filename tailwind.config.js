/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue:'#00AFF6',
        customPurple: '#6D31ED',
        customWhite: '#FFFFFF',
        customeFooterColor:'#1F2129' // Custom white color
      },
      width: {
        '160': '160px', 
        '140':'140px',// Custom width class
      },
    },
  },
  plugins: [],
}

