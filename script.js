// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting Message in Header
function updateGreeting() {
    const greeting = document.querySelector('header h1');
    const hour = new Date().getHours();
    let message = "Welcome to Meenakshi Amma Temple";

    if (hour >= 6 && hour < 12) {
        message = "Meenakshi Amma Temple! Explore the Temple's Beauty";
    } else if (hour >= 12 && hour < 18) {
        message = "Meenakshi Amma Temple! Experience Divine Serenity";
    } else if (hour >= 18 && hour < 22) {
        message = "Meenakshi Amma Temple! Enjoy the Temple's Glow";
    } else {
        message = "Namaste! Experience the Temple Anytime";
    }

    greeting.textContent = message;
}
updateGreeting();

// Fade-in Effect for Sections
const sections = document.querySelectorAll('section');
const fadeInOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        fadeInObserver.unobserve(entry.target);
    });
}, fadeInOptions);

sections.forEach(section => {
    fadeInObserver.observe(section);
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑ Back to Top";
backToTopButton.setAttribute('id', 'backToTop');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});