document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchBtn.addEventListener('click', () => {
        if(searchInput.value) {
            alert(`Searching for designers: ${searchInput.value}`);
        } else {
            searchInput.focus();
        }
    });

    const playBtns = document.querySelectorAll('.play-button, .play-overlay-small');
    playBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Open Video Modal');
        });
    });

    const learnMoreBtn = document.querySelector('.btn-secondary');
    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.approach').scrollIntoView({
            behavior: 'smooth'
        });
    });

    const arrows = document.querySelectorAll('.arrow-btn');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            console.log('Navigate carousel');
        });
    });
});