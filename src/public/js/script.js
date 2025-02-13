function initEventListeners() {
    const burgerMenuElement = document.querySelector('.burger-menu');

    burgerMenuElement.addEventListener('click', onBurgerMenuClick);
}

function onBurgerMenuClick() {
    const navContainerElement = document.querySelector('.nav-container');

    navContainerElement.style.display = 'block';
}

initEventListeners();
