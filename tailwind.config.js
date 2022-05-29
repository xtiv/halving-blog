module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        chip_btc: "url('/static/assets/img/chip_btc.webp')",
        halving_1: "url('/static/assets/img/halving-1.png')",
        halving_2: "url('/static/assets/img/halving-2.png')",
        donativo: "url('/static/assets/img/heart_money.png')",
        btc_qr: "url('/static/assets/img/btc_address.jpeg')",
      }
    },
  },
  plugins: [],
}
