const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "The best way to predict the future is to invent it. – Alan Kay",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get your facts first, then you can distort them as you please. – Mark Twain"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('new-quote').addEventListener('click', () => {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
});

document.getElementById('quote-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const userQuote = document.getElementById('user-quote').value.trim();
    if (userQuote) {
        quotes.push(userQuote);
        document.getElementById('user-quote').value = '';
        console.log(quotes)
    }
});