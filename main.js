document.addEventListener("DOMContentLoaded", function () {
    const aboutTextElements = document.querySelectorAll(".about-text p, .about-text ul li");
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector("footer");
    const whatsappChat = document.getElementById("whatsapp-chat");
    const ratingModal = document.getElementById("rating-modal");
    const closeModal = document.querySelector(".close");
    const submitRating = document.getElementById("submit-rating");
    const ratingInput = document.getElementById("rating-input");
    const responseMessage = document.getElementById("response-message");
    footer.innerHTML = `&copy; AFP ${currentYear} || Web Design`;
    let isGlowing = false;

    whatsappChat.addEventListener("click", function () {
        ratingModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        ratingModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === ratingModal) {
            ratingModal.style.display = "none";
        }
    });

    submitRating.addEventListener("click", function () {
        const rating = parseInt(ratingInput.value);
        if (rating >= 1 && rating <= 3) {
            responseMessage.textContent = "Masih kurang yah icibos ? :(";
        } else if (rating >= 4 && rating <= 6) {
            responseMessage.textContent = "Kurang apa icibos ? Nanti saya perbaiki :)";
        } else if (rating >= 7 && rating <= 10) {
            responseMessage.textContent = "Makasih Icibos :)";
        } else {
            responseMessage.textContent = "Please enter a valid rating between 1 and 10.";
        }
    });

    setInterval(() => {
        if (isGlowing) {
            footer.classList.remove("glow");
        } else {
            footer.classList.add("glow");
        }
        isGlowing = !isGlowing;
    }, 3000);

    aboutTextElements.forEach(element => {
        element.addEventListener("mouseenter", function () {
            aboutTextElements.forEach(el => {
                if (el !== this) {
                    el.style.color = "rgba(255, 255, 255, 0.1)";
                }
            });
            this.style.color = "rgba(255, 255, 255, 1)";
        });

        element.addEventListener("mouseleave", function () {
            aboutTextElements.forEach(el => {
                el.style.color = "rgba(255, 255, 255, 0.3)";
            });
        });
    });
});

var typed = new Typed('.t', {
    strings: ["Full Stack Web Developer", "Network Engineering", "Cloud Engineering"],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
});