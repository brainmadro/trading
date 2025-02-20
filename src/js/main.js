import News from "./News.mjs"
import Crypto from "./Crypto.mjs"
import { loadHeaderFooter } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  const news = new News();
	const newsList = await news.fetchNews();
  news.renderNews('#stock-news-container', newsList);

  const crypto = new Crypto();
	const cryptoStocks = await crypto.fetchStock();
	const relevantStocks = cryptoStocks.filter(stock => stock.rank <= 100);
  crypto.renderStocks('#crypto-stock-container', relevantStocks);
})

loadHeaderFooter();
