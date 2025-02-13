function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');

    burgerMenuElement.addEventListener('click', onBurgerMenuClick);
}

function onBurgerMenuClick() {
    const navContainerElement = document.querySelector('.nav-container');
    const burgerMenuElement = document.querySelector('.burger-menu');

    // Show mobile navigation
    navContainerElement.style.display = 'block';

    // Toggle burger menu icon
    if (burgerMenuElement.classList.contains('open-menu')) {
        burgerMenuElement.classList.replace('open-menu', 'close-menu');
    } else {
        burgerMenuElement.classList.replace('close-menu', 'open-menu');
    }
}

initEventListeners();
