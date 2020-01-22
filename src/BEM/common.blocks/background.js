//нет возможности использовать scrollIntoView
//потому что не поддерживается некоторыми браузерами 

//используем полифил Smooth Scroll behavior polyfill

//получаем все элементы, при помощи которым можем перейти к якорю
var refs = document.querySelectorAll('.background .menu__link, .wrapper__button.button');

//на каждый полученный элемент вешаем обработчик события клика мыши 
for (let ref of refs) {
    ref.addEventListener('click', function(event) {
        event.preventDefault();
        let anchorId = event.target.getAttribute('href');
        let anchor = document.querySelector(anchorId);
        anchor.scrollIntoView({behavior: 'smooth'});
    });
}