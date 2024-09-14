// Mobile Menu Toggle
// const menuToggle = document.getElementById('menu-toggle');
// const mobileMenu = document.getElementById('mobile-menu');
// const hamburgerIcon = document.getElementById('hamburger-icon');
// const closeIcon = document.getElementById('close-icon');

// menuToggle.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden'); // Toggle menu visibility
//     hamburgerIcon.classList.toggle('hidden'); // Toggle hamburger icon
//     closeIcon.classList.toggle('hidden'); // Toggle close icon
// });

const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})


navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})


// Basic Typing Effect (Optional if needed for typewriter text)
const textArray = ["Web Developer"];
let arrayIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const typewriterText = document.getElementById('typewriter-text');

function typeEffect() {
    if (charIndex < textArray[arrayIndex].length) {
        typewriterText.innerHTML += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeEffect, typingSpeed); // Start the typing animation
});