
const quotes = [
    "Believe in yourself!",
    "Stay positive, work hard, make it happen.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are your only limit."
];

// Event listener for the button
document.getElementById("newQuoteButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
});

// Initial display
document.getElementById("quoteDisplay").textContent = quotes[0];