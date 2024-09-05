/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url(/src/app/bg.jpg)",
      },
      boxShadow: {
        '3xl': '0px 0px 60px 5px rgba(0, 0, 0, 0.3)',
      },
      fontSize:{
        '10xl': '250px',
        '11xl': '300px',
      }
    },
  },
  plugins: [],
};
