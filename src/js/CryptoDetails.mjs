import { formatCurrency } from "./utils.mjs";

export default class CryptoDetails {
  constructor(cryptoId) {
    this.cryptoId = cryptoId
    this.crypto = {}
  }

  // Initialize method that fetches and renders the crypto details
  async init() {
    // Fetch cryptocurrency details by its ID and store the result
    this.crypto = await this.fetchCryptoById(this.cryptoId)
    
    // Since the API response returns an array, get the first element (crypto data)
    this.crypto = this.crypto[0];
    
    // Render the details of the fetched cryptocurrency
    this.renderCryptoDetails();
  }

  // Fetch cryptocurrency details from the API using its ID
  async fetchCryptoById(cryptoId) {
    try {
      // Make an API call to fetch details of the cryptocurrency by its ID
      const response = await fetch(
        `https://api.coinlore.net/api/ticker/?id=${cryptoId}`
      )
      
      // Check if the response is successful
      if (!response.ok) throw new Error("Failed to fetch news")
      
      // Return the JSON response
      return await response.json()
    } catch (error) {
      console.error("Error fetching news:", error)
      
      // Return an empty object in case of an error
      return {}
    }
  }

  // Render the cryptocurrency details on the web page
  renderCryptoDetails() {
    // Get the HTML elements to display the details
    const symbol = document.querySelector("#stock-symbol");
    const price = document.querySelector("#stock-price");
    const marketCap = document.querySelector("#market-cap");
    const volume = document.querySelector("#volume");
    const percentChange1h = document.querySelector("#per-change-1h");
    //Set values to the HTML elements
    symbol.textContent = this.crypto.symbol;
    price.textContent = formatCurrency(this.crypto.price_usd);
    marketCap.textContent = formatCurrency(this.crypto.market_cap_usd);
    volume.textContent = formatCurrency(this.crypto.volume24);
    percentChange1h.textContent = this.crypto.percent_change_1h + "%";
  }
}
