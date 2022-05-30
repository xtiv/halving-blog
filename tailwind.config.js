module.exports = {
  content: ["./static/public/index.html", ".static/src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        chip_btc: "url('/static/img/chip_btc.webp')",
        halving_1: "url('/static/img/halving-1.png')",
        halving_2: "url('/static/img/halving-2.png')",
        donativo: "url('/static/img/heart_money.png')",
        btc_qr: "url('/static/img/btc_address.jpeg')",
        btc_logo:"url('/static/img/btc.png')",
      }
    },
  },
  plugins: [],
}
