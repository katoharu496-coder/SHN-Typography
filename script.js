// ==========================
// SHN Typography
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Search Fonts
    // ==========================

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        const cards = document.querySelectorAll(".font-card");

        searchInput.addEventListener("input", () => {

            const keyword = searchInput.value.trim().toLowerCase();

            cards.forEach(card => {

                const title = card.querySelector("h2").textContent.toLowerCase();

                const preview = card.querySelector(".preview")
                    ? card.querySelector(".preview").textContent.toLowerCase()
                    : "";

                const text = title + " " + preview;

                card.style.display = text.includes(keyword)
                    ? ""
                    : "none";

            });

        });

    }

    // ==========================
    // Font Style Switch
    // ==========================

    const buttons = document.querySelectorAll(".style-switch button");
    const previews = document.querySelectorAll(".preview-line");

    if (buttons.length && previews.length) {

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                previews.forEach(preview => {

                    preview.classList.remove(
                        "regular",
                        "italic",
                        "bold",
                        "bolditalic"
                    );

                    preview.classList.add(button.dataset.font);

                });

            });

        });

    }

});
// ==========================
// Live Preview
// ==========================

const previewInput = document.getElementById("previewInput");

if (previewInput) {

    const previews = document.querySelectorAll(".editable-preview");

    previewInput.addEventListener("input", () => {

        previews.forEach(preview => {

            preview.textContent = previewInput.value;

        });

    });

}