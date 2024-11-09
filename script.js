// Smooth Scroll Effect for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
const contentContainers = document.querySelectorAll('.content-container');
window.addEventListener('scroll', function() {
    contentContainers.forEach(container => {
        const containerPosition = container.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (containerPosition < screenPosition) {
            container.classList.add('appear');
        }
    });
});
