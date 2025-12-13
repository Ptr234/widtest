document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-padding');

    const fadeInScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight * 0.85) {
                section.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', fadeInScroll);
    fadeInScroll(); // Trigger on initial load

    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});