const quotes = [
   {
      quote: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
   },
   {
      quote: 'Innovation distinguishes between a leader and a follower.',
      author: 'Steve Jobs',
   },
   {
      quote: "Your time is limited, so don't waste it living someone else's life.",
      author: 'Steve Jobs',
   },
   {
      quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      author: 'Winston Churchill',
   },
   {
      quote: 'It does not matter how slowly you go as long as you do not stop.',
      author: 'Confucius',
   },
   {
      quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
      author: 'Martin Luther King Jr.',
   },
   {
      quote: 'The best way to predict the future is to invent it.',
      author: 'Alan Kay',
   },
   {
      quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.',
      author: 'Thomas Edison',
   },
   {
      quote: 'The journey of a thousand miles begins with one step.',
      author: 'Lao Tzu',
   },
   {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: 'Sam Levenson',
   },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
   const randomIndex = Math.floor(Math.random() * quotes.length);
   const randomQuote = quotes[randomIndex];
   quoteElement.textContent = randomQuote.quote;
   quoteAuthorElement.textContent = randomQuote.author;
}

generateBtn.addEventListener('click', generateRandomQuote);
