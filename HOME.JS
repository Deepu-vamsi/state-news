function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to filter articles based on the search input
document.getElementById('search-input').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let articles = document.querySelectorAll('.news-card');

    articles.forEach(function(article) {
        let title = article.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            article.style.display = "block";
        } else {
            article.style.display = "none"; // Hide non-matching articles
        }
    });
});