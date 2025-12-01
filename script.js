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







// Replace profile image
function replaceProfileImage(wrapperElement) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = wrapperElement.querySelector('.profile-image');
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Replace profile video
function replaceProfileVideo(videoElement) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = videoElement.querySelector('img');
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Replace member image
function replaceMemberImage(imgElement) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imgElement.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Play button functionality
function playVideo(location) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('video/')) {
            const url = URL.createObjectURL(file);
            alert(`Video uploaded for ${location}. In a production environment, this would open a video player with: ${file.name}`);
            // In production, you would:
            // - Create a video element
            // - Set the src to the uploaded video
            // - Open in a modal/lightbox
        }
    };
    input.click();
}

// Replace image functionality (for project images)
function replaceImage(imgElement) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imgElement.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Replace event card background
function replaceEventImage(cardElement) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const eventImage = cardElement.querySelector('.event-image');
                eventImage.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.4)), url(${event.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

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
