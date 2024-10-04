// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the search input
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener("focus", () => {
        searchInput.style.borderColor = "#ff7f50"; // Lighter Red on focus
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.borderColor = "#c8102e"; // Original border color
    });

    // Example animation for the main heading
    const mainParagraph = document.querySelector("main p");
    mainParagraph.style.opacity = 0; // Start with hidden text

    // Fade in effect
    setTimeout(() => {
        mainParagraph.style.transition = "opacity 2s ease";
        mainParagraph.style.opacity = 1; // Fade in text
    }, 1000);
});
