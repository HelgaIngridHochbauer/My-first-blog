function searchPosts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var articles = document.getElementsByTagName("article");
    for (var i = 0; i < articles.length; i++) {
        var title = articles[i].getElementsByClassName("post-title")[0].innerText.toLowerCase();
        if (title.includes(searchInput)) {
            // Scroll to the found article
            articles[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a class to highlight the found article
            articles[i].classList.add("found-article");
        } else {
            articles[i].classList.remove("found-article");
        }
    }
}
