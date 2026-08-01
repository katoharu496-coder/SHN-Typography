// ==========================
// SHN Typography - Search
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    const cards = document.querySelectorAll(".font-card");

    searchInput.addEventListener("input", () => {

        const keyword = searchInput.value.trim().toLowerCase();

        cards.forEach(card => {

            const title = card.querySelector("h2").textContent.toLowerCase();
            const preview = card.querySelector(".preview")
                ? card.querySelector(".preview").textContent.toLowerCase()
                : "";

            const text = title + " " + preview;

            card.style.display = text.includes(keyword) ? "" : "none";

        });

    });

});