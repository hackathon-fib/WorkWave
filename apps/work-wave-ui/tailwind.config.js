/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.{js,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'ww-dark-green': '#00493A',
        'ww-light-green': '#00735C',
        'ww-grey': '#606462',
        'ww-light': '#EDF0EE'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
