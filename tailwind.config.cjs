/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile-mobile": "url('https://res.cloudinary.com/embengineering/image/upload/v1673893549/profile-square.png')",
        "profile-desktop": "url('https://res.cloudinary.com/embengineering/image/upload/v1640271532/profile-pic.jpg')",
        "screen-image": "url('https://res.cloudinary.com/embengineering/image/upload/v1673896338/IMG_20210704_182759-EFFECTS.jpg')"
      }
    },
  },
  plugins: [],
}