// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Update ARIA attribute
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        }
    });
}

// Carousel functionality with error handling
let currentSlide = 0;
const carouselContainer = document.getElementById('carouselContainer');
const cards = document.querySelectorAll('.member-card');
const totalCards = 4;

function slideCarousel(direction) {
    if (!carouselContainer || cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // 2rem gap in pixels
    const slideAmount = cardWidth + gap;
    
    currentSlide += direction;
    
    // Loop functionality
    if (currentSlide >= totalCards) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalCards - 1;
    }
    
    carouselContainer.style.transform = `translateX(-${currentSlide * slideAmount}px)`;
}

// Auto-scroll carousel every 5 seconds
let carouselInterval = setInterval(() => {
    slideCarousel(1);
}, 5000);

// Pause auto-scroll on user interaction
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            slideCarousel(1);
        }, 5000);
    });
}

// Smooth scroll for navigation links with error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const navHeight = 100; // Account for fixed header
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        }
    });
});

// Video playback control with error handling
function setupVideoPlayback(selectors) {
    document.querySelectorAll(selectors).forEach(element => {
        const video = element.querySelector('video');
        if (video) {
            element.addEventListener('mouseenter', () => {
                video.play().catch(err => {
                    console.log('Video playback prevented:', err);
                });
            });
            element.addEventListener('mouseleave', () => {
                video.pause();
            });
        }
    });
}

// Initialize video playback for all sections
setupVideoPlayback('.hero');
setupVideoPlayback('.why-exist-image');
setupVideoPlayback('.profile-video');

// Active nav link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update nav on scroll with throttling
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        updateActiveNavLink();
    }, 100);
}, { passive: true });

// Preload critical images for better performance
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Preload hero and key section images
preloadImages([
    'images/logo.webp',
    'images/why-we-exist.jpg',
    'images/designer-directory.jpg'
]);

// Form Validation
function validateForm(form) {
    if (!form) return true;
    
    let isValid = true;
    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    
    // Email validation
    if (email) {
        const emailGroup = email.closest('.form-group');
        const emailError = emailGroup.querySelector('.form-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email.value) {
            emailGroup.classList.add('error');
            if (emailError) emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            emailGroup.classList.add('error');
            if (emailError) emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailGroup.classList.remove('error');
        }
    }
    
    // Password validation
    if (password) {
        const passwordGroup = password.closest('.form-group');
        const passwordError = passwordGroup.querySelector('.form-error');
        
        if (!password.value) {
            passwordGroup.classList.add('error');
            if (passwordError) passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (password.value.length < 6) {
            passwordGroup.classList.add('error');
            if (passwordError) passwordError.textContent = 'Password must be at least 6 characters';
            isValid = false;
        } else {
            passwordGroup.classList.remove('error');
        }
    }
    
    return isValid;
}

// Attach form validation to all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!validateForm(form)) {
            e.preventDefault();
        }
    });
    
    // Real-time validation
    form.querySelectorAll('input[type="email"], input[type="password"]').forEach(input => {
        input.addEventListener('blur', () => {
            validateForm(form);
        });
    });
});

// ===== SEARCH & FILTER FUNCTIONALITY =====

// Designer page search and filter
function setupDesignerFilter() {
    const searchInput = document.getElementById('designerSearch');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const locationFilter = document.getElementById('locationFilter');
    const designersGrid = document.getElementById('designersGrid');
    
    if (!searchInput || !designersGrid) return;
    
    // Store original designers
    const designerItems = Array.from(designersGrid.querySelectorAll('.designer-item'));
    
    function filterDesigners() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedSpecialty = specialtyFilter ? specialtyFilter.value : '';
        const selectedLocation = locationFilter ? locationFilter.value : '';
        
        let visibleCount = 0;
        
        designerItems.forEach(item => {
            const name = item.querySelector('h3')?.textContent.toLowerCase() || '';
            const specialty = item.querySelector('.designer-specialty')?.textContent.toLowerCase() || '';
            const location = item.querySelector('.designer-location')?.textContent.toLowerCase() || '';
            const company = item.querySelector('.designer-company')?.textContent.toLowerCase() || '';
            
            // Check search term
            const matchesSearch = !searchTerm || 
                name.includes(searchTerm) || 
                specialty.includes(searchTerm) || 
                location.includes(searchTerm) || 
                company.includes(searchTerm);
            
            // Check specialty filter
            const matchesSpecialty = !selectedSpecialty || 
                specialty.includes(selectedSpecialty.toLowerCase());
            
            // Check location filter
            const matchesLocation = !selectedLocation || 
                location.includes(selectedLocation.toLowerCase());
            
            if (matchesSearch && matchesSpecialty && matchesLocation) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease-out';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show no results message if needed
        if (visibleCount === 0) {
            let noResults = designersGrid.querySelector('.no-results');
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 3rem; color: #999;';
                noResults.innerHTML = '<p>No designers match your search criteria. Try adjusting your filters.</p>';
                designersGrid.appendChild(noResults);
            }
        } else {
            const noResults = designersGrid.querySelector('.no-results');
            if (noResults) noResults.remove();
        }
    }
    
    // Event listeners
    searchInput.addEventListener('input', filterDesigners);
    if (specialtyFilter) specialtyFilter.addEventListener('change', filterDesigners);
    if (locationFilter) locationFilter.addEventListener('change', filterDesigners);
}

// Supplier page search and filter
function setupSupplierFilter() {
    const searchInput = document.getElementById('supplierSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const suppliersGrid = document.getElementById('suppliersGrid');
    
    if (!searchInput || !suppliersGrid) return;
    
    // Store original suppliers
    const supplierItems = Array.from(suppliersGrid.querySelectorAll('.supplier-item'));
    
    function filterSuppliers() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter ? categoryFilter.value : '';
        
        let visibleCount = 0;
        
        supplierItems.forEach(item => {
            const name = item.querySelector('h3')?.textContent.toLowerCase() || '';
            const category = item.querySelector('.supplier-category')?.textContent.toLowerCase() || '';
            const description = item.querySelector('p')?.textContent.toLowerCase() || '';
            const location = item.querySelector('.supplier-location')?.textContent.toLowerCase() || '';
            
            // Check search term
            const matchesSearch = !searchTerm || 
                name.includes(searchTerm) || 
                category.includes(searchTerm) || 
                description.includes(searchTerm) || 
                location.includes(searchTerm);
            
            // Check category filter
            const matchesCategory = !selectedCategory || 
                category.includes(selectedCategory.toLowerCase());
            
            if (matchesSearch && matchesCategory) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease-out';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Show no results message if needed
        if (visibleCount === 0) {
            let noResults = suppliersGrid.querySelector('.no-results');
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 3rem; color: #999;';
                noResults.innerHTML = '<p>No suppliers match your search criteria. Try adjusting your filters.</p>';
                suppliersGrid.appendChild(noResults);
            }
        } else {
            const noResults = suppliersGrid.querySelector('.no-results');
            if (noResults) noResults.remove();
        }
    }
    
    // Event listeners
    searchInput.addEventListener('input', filterSuppliers);
    if (categoryFilter) categoryFilter.addEventListener('change', filterSuppliers);
}

// Initialize filters on page load
document.addEventListener('DOMContentLoaded', () => {
    setupDesignerFilter();
    setupSupplierFilter();
});

// Members page carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const carouselWrapper = document.getElementById('membersCarousel');
    const memberCards = document.querySelectorAll('.member-card-new');
    const totalMemberCards = memberCards.length;
    let cardsPerView = 4;

    function updateMembersCardsPerView() {
        if (window.innerWidth <= 480) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 768) {
            cardsPerView = 2;
        } else if (window.innerWidth <= 1200) {
            cardsPerView = 3;
        } else {
            cardsPerView = 4;
        }
    }

    function createMemberDots() {
        const dotsContainer = document.getElementById('membersDots');
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const totalDots = Math.ceil(totalMemberCards / cardsPerView);
        
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot-new';
            if (i === 0) dot.classList.add('active');
            dot.onclick = () => goToMemberSlide(i);
            dotsContainer.appendChild(dot);
        }
    }

    function updateMemberDots() {
        const dots = document.querySelectorAll('.dot-new');
        const activeDotIndex = Math.floor(currentIndex / cardsPerView);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }

    window.moveMembersCarousel = function(direction) { // Expose globally for onclick
        currentIndex += direction;
        const maxIndex = totalMemberCards - cardsPerView;
        
        if (currentIndex < 0) {
            currentIndex = 0;
        } else if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        
        updateMemberCarousel();
    }

    function goToMemberSlide(slideIndex) {
        currentIndex = slideIndex * cardsPerView;
        updateMemberCarousel();
    }

    function updateMemberCarousel() {
        if (!memberCards[0]) return;
        const cardWidth = memberCards[0].offsetWidth + 20; // 20px for left and right margin of 10px each
        carouselWrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        updateMemberDots();
    }

    window.addEventListener('resize', () => {
        updateMembersCardsPerView();
        createMemberDots();
        currentIndex = 0; // Reset carousel position on resize
        updateMemberCarousel();
    });

    // Initial setup
    updateMembersCardsPerView();
    createMemberDots();
    updateMemberCarousel(); // Call once to set initial position and dots
});