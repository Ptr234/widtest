let currentSlide = 0;
const carousel = document.getElementById('carouselContainer');
const cards = document.querySelectorAll('.member-card');
const totalCards = 4; // Only count unique cards

function slideCarousel(direction) {
    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // 2rem gap
    const slideAmount = cardWidth + gap;
    
    currentSlide += direction;
    
    // Loop back to start
    if (currentSlide >= totalCards) {
        currentSlide = 0;
    }
    
    // Loop to end
    if (currentSlide < 0) {
        currentSlide = totalCards - 1;
    }
    
    carousel.style.transform = `translateX(-${currentSlide * slideAmount}px)`;
}

// Auto-scroll carousel every 4 seconds
setInterval(() => {
    slideCarousel(1);
}, 4000);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = 80;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});











// Hover to play/pause videos
document.querySelectorAll('.hero').forEach(heroSection => {
    const video = heroSection.querySelector('.hero-video-background');
    if (video) {
        heroSection.addEventListener('mouseenter', () => {
            video.play();
        });
        heroSection.addEventListener('mouseleave', () => {
            video.pause();
        });
    }
});

document.querySelectorAll('.why-exist-image').forEach(whyExistImage => {
    const video = whyExistImage.querySelector('video');
    if (video) {
        whyExistImage.addEventListener('mouseenter', () => {
            video.play();
        });
        whyExistImage.addEventListener('mouseleave', () => {
            video.pause();
        });
    }
});

document.querySelectorAll('.profile-video').forEach(profileVideoSection => {
    const video = profileVideoSection.querySelector('.profile-video-background');
    if (video) {
        profileVideoSection.addEventListener('mouseenter', () => {
            video.play();
        });
        profileVideoSection.addEventListener('mouseleave', () => {
            video.pause();
        });
    }
});





// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
