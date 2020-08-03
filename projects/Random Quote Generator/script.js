// selectors
const select = document.getElementById('select');
const generateBtn = document.getElementById('generate-btn');
const quoteContainer = document.getElementById('quotes');
let type;

// get quote type
const getType = e => type = select[select.selectedIndex].value;

// get quotes
const getQuote = async () => {
  const data = await fetch(`quotes/${getType()}.json`);
  const quotes = await data.json();
  return quotes;
}

// generate quote
const generateQuote = async () => {
  const quotes = await getQuote();
  const quote = quotes[Math.floor(Math.random() * (quotes.length - 0 + 1) ) + 0];
  const {text, author} = quote;
  
  // create new element
  const currQuote = document.createElement('div');
  currQuote.className = 'currQuote';
  currQuote.innerHTML = `
      <q id="quote-text">${text}</q>
      <address id="quote-author">- ${author}</address>
  `
  animateQuote(currQuote);
  changeCurr(currQuote);
}

// animate prevQuote
const animateQuote = (currQuote) => {
  const prevQuote = document.querySelector('.prevQuote');
  prevQuote.style.animation = 'fadeOut 0.2s linear';
  prevQuote.addEventListener('animationend', animate = () => {
    quoteContainer.removeChild(prevQuote);
    prevQuote.removeEventListener('animationend', animate);
    quoteContainer.appendChild(currQuote);
  })
}

// change currQuote to prevQuote at animationend
const changeCurr = currQuote => {
  currQuote.addEventListener('animationend', () => currQuote.className = 'prevQuote')
}

// listeners
select.addEventListener('change', getType);
generateBtn.addEventListener('click', generateQuote);