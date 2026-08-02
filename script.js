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
const warning = document.getElementById("limitWarning");

if (previewInput) {

    const preview = document.querySelector(".editable-preview");

    function countChars(text) {
        return text.replace(/\s/g, "").length;
    }

    function updatePreview() {

        let text = previewInput.value;
        let count = countChars(text);

        // Nếu vượt 60 ký tự (không tính dấu cách)
        if (count > 50) {

            let result = "";
            let used = 0;

            for (const ch of text) {

                if (/\s/.test(ch)) {
                    result += ch;
                    continue;
                }

                if (used < 50) {
                    result += ch;
                    used++;
                }

            }

            previewInput.value = result;
            text = result;
            count = countChars(result);

        }

        preview.textContent = text;

        if (count >= 50) {

            warning.innerHTML = "⚠️ Đã đạt giới hạn 50 ký tự.";
            warning.classList.add("limit");

        } else {

            warning.textContent =
                `Bạn có thể nhập tối đa 50 ký tự. (${count}/50)`;

            warning.classList.remove("limit");

        }

    }

    previewInput.addEventListener("input", updatePreview);

    updatePreview();

}