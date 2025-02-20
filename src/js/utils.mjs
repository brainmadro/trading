export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const headerTemplate = await loadTemplate("/partials/header.html");
  const currentYear = new Date().getFullYear();
  header.innerHTML = headerTemplate;
  footer.innerHTML = `
    <p>&copy; ${currentYear} Trading Dashboard | Brian Madroñero</p>
  `;
}

export function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}


