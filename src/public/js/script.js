function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)');

    mobileMediaQuery.addEventListener('change', onMediaChange);
    burgerMenuElement.addEventListener('click', onBurgerMenuClick);
}

// Reset burger menu and navigation on media change
function onMediaChange() {
    const burgerMenuElement = document.querySelector('.burger-menu');
    const navContainerElement = document.querySelector('.nav-container');

    navContainerElement.style.display = '';
    burgerMenuElement.classList.replace('close-menu', 'open-menu');
}

function onBurgerMenuClick() {
    const navContainerElement = document.querySelector('.nav-container');
    const burgerMenuElement = document.querySelector('.burger-menu');

    // Toggle burger menu icon and navigation
    if (burgerMenuElement.classList.contains('open-menu')) {
        burgerMenuElement.classList.replace('open-menu', 'close-menu');
        navContainerElement.style.display = 'block';
    } else {
        burgerMenuElement.classList.replace('close-menu', 'open-menu');
        navContainerElement.style.display = '';
    }
}

initEventListeners();
