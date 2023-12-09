/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'background-image': "url('./assets/Welcome.jpg')",
      'background-home' : "url('./assets/Home.jpg')",
      'background-admin' : "url('./assets/Admin.jpg')",
      'background-adminhome' : "url('./assets/AdminHome.jpg')",
      'background-admininventory' : "url('./assets/AdminInventory.jpg')",
      'background-oderstatus' : "url('./assets/OrderStatus.jpg')",
      'background-viewmenu' : "url('./assets/ViewMenu.jpg')",
      'background-adminanalytics' : "url('./assets/AdminAnalytic.jpg')",
    },
  },
  plugins: [],
}