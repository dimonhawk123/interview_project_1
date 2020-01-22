//нет возможности использовать scrollIntoView
//потому что не поддерживается некоторыми браузерами 

//используем полифил Smooth Scroll behavior polyfill

// import smoothscroll from 'smoothscroll-polyfill';

// smoothscroll.polyfill();

let refs = document.querySelectorAll('.background .menu__link, .wrapper__button.button');

for (let ref of refs) {
    ref.addEventListener('click', function(event) {
        event.preventDefault();
        let anchorId = event.target.getAttribute('href');
        let anchor = document.querySelector(anchorId);
        anchor.scrollIntoView({behavior: 'smooth'});
    });
}