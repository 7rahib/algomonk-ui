module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/Assets/image/banner.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["winter"],
  },
  plugins: [require("daisyui")],
}
