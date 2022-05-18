module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        chip_btc: "url('/assets/img/chip_btc.webp')",
        halving_1: "url('/assets/img/halving-1.png')",
        halving_2: "url('/assets/img/halving-2.png')"
      }
    },
  },
  plugins: [],
}
