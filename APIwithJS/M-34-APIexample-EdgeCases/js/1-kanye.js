// https://kanye.rest/
function loadQuotes() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
}

const displayQuote = (quote) => {
//   console.log(quote.quote);
const quoteElement = document.getElementById('quote');
quoteElement.innerText = quote.quote;
};
