// открытие/закрытие меню в версии сайта с шириной меньше 700px
let active = document.querySelector('.menu-mobile');
let menuStyle = document.querySelector('.menu');
active.onclick = function() {
    menuStyle.classList.toggle('active');
}