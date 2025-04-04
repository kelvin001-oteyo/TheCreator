// Typing Effect for Hero Section
const text = "I'm Kelvin Oteyo";
let index = 0;

function typeEffect() {
    document.querySelector(".animated-text").textContent = text.substring(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

// Scroll Animation
function revealOnScroll() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            el.classList.add("visible");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});
