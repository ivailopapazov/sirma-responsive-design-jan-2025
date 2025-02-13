function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');

    burgerMenuElement.addEventListener('click', onBurgerMenuClick);
}

function onBurgerMenuClick() {
    const navContainerElement = document.querySelector('.nav-container');
    const burgerMenuElement = document.querySelector('.burger-menu');

    // Show mobile navigation
    navContainerElement.style.display = 'block';

    // Change burger menu icon
    burgerMenuElement.style.backgroundImage = 'url("/public/img/close.svg")'
}

initEventListeners();
