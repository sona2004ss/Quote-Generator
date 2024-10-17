// script.js

// Function to show the loading animation
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

// Function to hide the loading animation
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Example quotes with authors
var quotes = {
    motivational: [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
        { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" }
    ],
    funny: [
        { text: "I told my wife she was drawing her eyebrows too high. She looked surprised.", author: "" },
        { text: "Why don't scientists trust atoms? Because they make up everything!", author: "" },
        { text: "I threw a boomerang a few years ago. I now live in constant fear.", author: "" },
        { text: "Parallel lines have so much in common. It's a shame they'll never meet.", author: "" },
        { text: "Why don't programmers like nature? It has too many bugs.", author: "" }
    ]
};

// Function to show a quote based on the category
function showCategoryQuote(category) {
    showLoading();
    // Simulate an API call or delay
    setTimeout(function() {
        var quoteList = quotes[category];
        var randomIndex = Math.floor(Math.random() * quoteList.length);
        var selectedQuote = quoteList[randomIndex];
        var quoteText = `"${selectedQuote.text}"`;
        if (selectedQuote.author) {
            quoteText += `<br><br><span class="author">Author: ${selectedQuote.author}</span>`;
        }
        document.getElementById('quoteText').innerHTML = quoteText;
        document.getElementById('quoteModal').classList.add('show');
        hideLoading();
    }, 2000); // Simulate a 2-second delay
}

// Function to close the modal
function closeModal() {
    document.getElementById('quoteModal').classList.remove('show');
}

// Ensure loading is hidden when the page loads
window.onload = hideLoading;

