/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        lato: ["Lato"],
      },
      colors: {
        'cerulean': '#086788',
        'blue-green': '#07A0C3',
        'raisin-black': '#1B1725',
        'bone': '#E0DDCF',
      }
    },
  },
  plugins: [],
};
