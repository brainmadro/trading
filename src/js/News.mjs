const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY

export default class News {
  async fetchNews() {
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_API_KEY}`
      )
      if (!response.ok) throw new Error("Failed to fetch news")
      return await response.json()
    } catch (error) {
      console.error("Error fetching news:", error)
      return []
    }
  }
  renderNews(selector, newsList) {
    const container = document.querySelector(selector)
    container.innerHTML = newsList
      .slice(0, 6)
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
