
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


document.addEventListener("DOMContentLoaded", function () {
    const scrollUpBtn = document.getElementById('scroll-up');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.remove('-bottom-1/2');
            scrollUpBtn.classList.add('bottom-4');
        } else {
            scrollUpBtn.classList.add('-bottom-1/2');
            scrollUpBtn.classList.remove('bottom-4');
        }
    });

    scrollUpBtn.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

