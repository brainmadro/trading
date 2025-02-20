export default class Crypto {
  async fetchStock() {
    try {
      const response = await fetch(
        `https://api.coinlore.net/api/tickers/?limit=100`
      )
      if (!response.ok) throw new Error("Failed to fetch news")
      const data = await response.json()
      return data.data
    } catch (error) {
      console.error("Error fetching news:", error)
      return []
    }
  }
  renderStocks(selector, stockList) {
    const container = document.querySelector(selector)
    container.innerHTML = stockList
      .slice(0, 6)
      .map(
        (crypto) => `
				<div class='news-item'>
          <h3>${crypto.name}</h3>
          <p>Price: $${crypto.price_usd}</p>
          <a href="crypto/index.html?id=${crypto.id}">View Details</a>
				</div>
		`
      )
      .join("")
  }
}
/* 
Object = $1

csupply: "649433438.00"

id: "46968"

market_cap_usd: "647331295.74"

msupply: ""

name: "Frax"

nameid: "frax"

percent_change_1h: "0.03"

percent_change_7d: "0.27"

percent_change_24h: "0.11"

price_btc: "0.000010"

price_usd: "0.996763"

rank: 101

symbol: "FRAX"

tsupply: "1044853133.2588"

volume24: 2642071.302989726

volume24a: 1312788.1407490727

Object prototipo
 */