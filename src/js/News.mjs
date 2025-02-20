const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY

export default class News {
  async fetchNews() {
    try {
      // Make an API call to fetch general news using the API key
      const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_API_KEY}`
      )
      
      // Check if the response is successful
      if (!response.ok) throw new Error("Failed to fetch news")
      
      // Return the JSON response containing the news
      return await response.json()
    } catch (error) {
      console.error("Error fetching news:", error)
      
      // Return an empty array in case of an error
      return []
    }
  }

  // Render the fetched news on the web page
  renderNews(selector, newsList) {
    const container = document.querySelector(selector)
    
    // Generate HTML content for the first 6 news items and insert it into the container
    container.innerHTML = newsList
      .slice(0, 6) // Select the first 6 news items
      .map(
        (news) => `
				<div class='news-item'>
						<h3>${news.headline}</h3>
						<h4>${news.category}</h4>
						<p>${news.summary}</p>
						<a href='${news.url}' target='_blank'>Read more</a>
				</div>
		`
      )
      .join("")
  }
}
