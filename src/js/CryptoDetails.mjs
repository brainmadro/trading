import { formatCurrency } from "./utils.mjs";

export default class CryptoDetails {
  constructor(cryptoId) {
    this.cryptoId = cryptoId
    this.crypto = {}
  }
  async init() {
    this.crypto = await this.fetchCryptoById(this.cryptoId)
    this.crypto = this.crypto[0];
    this.renderCryptoDetails();
  }
  async fetchCryptoById(cryptoId) {
    try {
      const response = await fetch(
        `https://api.coinlore.net/api/ticker/?id=${cryptoId}`
      )
      if (!response.ok) throw new Error("Failed to fetch news")
      return await response.json()
    } catch (error) {
      console.error("Error fetching news:", error)
      return {}
    }
  }
  renderCryptoDetails() {
    const symbol = document.querySelector("#stock-symbol");
    const price = document.querySelector("#stock-price");
    const marketCap = document.querySelector("#market-cap");
    const volume = document.querySelector("#volume");
    const percentChange1h = document.querySelector("#per-change-1h");
    console.log(this.crypto);
    symbol.textContent = this.crypto.symbol;
    price.textContent = formatCurrency(this.crypto.price_usd);
    marketCap.textContent = formatCurrency(this.crypto.market_cap_usd);
    volume.textContent = formatCurrency(this.crypto.volume24);
    percentChange1h.textContent = this.crypto.percent_change_1h + "%";
  }
}
