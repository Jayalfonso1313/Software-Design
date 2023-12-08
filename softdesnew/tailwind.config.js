/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'background-image': "url('./assets/background_image.png')",
      'background-home' : "url('./assets/E.png')",
      'background-admin' : "url('./assets/Ice.jpg')",
      'background-adminhome' : "url('./assets/Z.png')",
      'background-admininventory' : "url('./assets/N.png')",
      'background-oderstatus' : "url('./assets/D.png')",
      'background-viewmenu' : "url('./assets/F.jpg')",
    },
  },
  plugins: [],
}