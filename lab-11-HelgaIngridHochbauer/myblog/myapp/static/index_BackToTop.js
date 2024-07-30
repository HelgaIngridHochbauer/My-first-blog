// Function to return the page to the beginning
function scrollToTop() {
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth"
    });
}

// Show or hide the back button based on page position
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Show the button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide the button
    }
}
