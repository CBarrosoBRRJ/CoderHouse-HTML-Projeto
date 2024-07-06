/**
 * Função para o MENU RESPONSIVO
 */

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.mobile-menu-icon .icon');
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "../img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        icon.src = "../img/close_white_36dp.svg";
    }
}


/**
 * Função para o ACCORDION
 */

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click' , () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    
    })
})