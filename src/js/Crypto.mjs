export default class Crypto {
  // Fetches a list of cryptocurrencies from the API
  async fetchStock() {
    try {
      // Make an API call to get the top 6 cryptocurrencies
      const response = await fetch(
        `https://api.coinlore.net/api/tickers/?limit=6`
      )
      
      // Check if the response is successful
      if (!response.ok) throw new Error("Failed to fetch news")
      
      // Parse the JSON response
      const data = await response.json()
      
      // Return the data of cryptocurrencies
      return data.data
    } catch (error) {
      console.error("Error fetching news:", error)
      
      // Return an empty array in case of an error
      return []
    }
  }

  // Renders the list of stocks on the web page
  renderStocks(selector, stockList) {
    // Get the container element where the stock data will be inserted
    const container = document.querySelector(selector)
    
    // Generate HTML content for the first 6 stocks and insert it into the container
    container.innerHTML = stockList
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
