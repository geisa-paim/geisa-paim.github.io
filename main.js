function Abrirmenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/menu_off.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imgs/close_off.svg";
    }
}