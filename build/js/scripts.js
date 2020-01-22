//нет возможности использовать scrollIntoView
//потому что не поддерживается некоторыми браузерами 

//используем полифил Smooth Scroll behavior polyfill

//получаем все элементы, при помощи которым можем перейти к якорю
let refs = document.querySelectorAll('.background .menu__link, .wrapper__button.button');

//на каждый полученный элемент вешаем обработчик события клика мыши 
for (let ref of refs) {
    ref.addEventListener('click', function(event) {
        event.preventDefault();
        let anchorId = event.target.getAttribute('href');
        let anchor = document.querySelector(anchorId);
        anchor.scrollIntoView({behavior: 'smooth'});
    });
}
// открытие/закрытие меню в версии сайта с шириной меньше 700px
let active = document.querySelector('.menu-mobile');
let menuStyle = document.querySelector('.menu');
active.onclick = function() {
    menuStyle.classList.toggle('active');
}
//-------------------------------------------------
//получаем необходимы блоки с личной информацией
let arr_about = Array.from(document.querySelector('.section_theme_about .block').children);
//получаем ссылки, с помощью которых будем выбирать какой блок отображать 
let links_about = document.querySelectorAll('.section_theme_about .menu__link');

function about(arr, links, event) {   
    //проверяем какая ссылка нажата и делаем её жирной, 
    //остальные оставляем обычными  
    for (let link of Array.from(links)) {        
        if (event.target == link) {
            event.target.style.fontWeight = 'bold';
        } else {
            link.style.fontWeight = 'normal';
        }
    }        
    //перебираем и отображаем необходимый блок с информацией
    arr.map(function(item){        
        if (item.id == ('#' + event.target.id)) {
            item.style.opacity = 1;    
            item.style.visibility = 'visible';        
        } else {
            item.style.opacity = 0;        
            item.style.visibility = 'hidden';    
        }        
    })    
} 
// на каждую ссылку в секции "обо мне" вешаем обработчик клика мыши
for(i = 0; i < links_about.length; i++) {
    links_about[i].addEventListener('click', about.bind(null, arr_about, links_about));
}
//-------------------------------------------------
// аналогично с секцией "образование"
let arr_edu = Array.from(document.querySelector('.section_theme_edu .block').children);
let links_edu = document.querySelectorAll('.section_theme_edu .menu__link');

for(i = 0; i < links_edu.length; i++) {
    links_edu[i].addEventListener('click', about.bind(null, arr_edu, links_edu));
}
// левая и правая кнопки слайдера
let leftBtn = document.querySelector('.slider__btn_left');
let rightBtn = document.querySelector('.slider__btn_right');
// количество "навыков" 
let elemCount = document.querySelector('.slider__list').children.length;
let slider = document.querySelector('.slider__list');
// число отображаемых "навыков" 
let visibleElem = 4;
// число итераций - сдвигов слайдера
let iter = 0;
// интервал времени 
let interval;
// число, на которое увеличится ширина бегущей линии
let countPath = 0;
let width =  document.querySelector('.path__inside');
// величина сдвига слайдера
let margin = -300;
// проверка на ширину текущей страницы 
let flag = true;

//перевод слайдера в начальное положение
function resetSlider() {
    iter = 0;
    countPath = 0;
    slider.style.marginLeft = 0 + 'px';
}

// определение ширины обертки и изменеие величины сдвига слайдера 
function size() {
    if ((document.querySelector('.wrapper').clientWidth == 1024) && flag) {
        margin = -236;
        resetSlider();
        flag = false;
    } 
    if ((document.querySelector('.wrapper').clientWidth != 1024) && !flag) {
        margin = -300;
        resetSlider();
        flag = true;
    }     
}
// определение ширины обертки и изменеие величины сдвига слайдера при первой загрузке страницы
size();
// обработчик изменеия ширины страницы
window.addEventListener('resize', size);

// сдвиг слайдера на одно деление вправо 
function switcher() {
    iter++;
    // проверка на то, чтобы слайдер всегда остображал заданное число элементов
    // и автоматически переходил в начало 
    if(iter > (elemCount - visibleElem)) {
        iter = 0;
    }
    slider.style.marginLeft = iter * margin + 'px';
}

// реализация движения бегущей линии и перевод её в начало
function pathWidth() {
    countPath++;
    // при достижении линией граничной ширины, происходит перевод линии в начало,
    // а также автоматическое перемещение слайдера вправо
    if (countPath == 301) {
        countPath = 0;   
        switcher();     
    }
    width.style.width = (100/300) * countPath + '%';
}

// перемещение слайдера влево при помощи левой кнопки
leftBtn.onclick = function() {    
    countPath = 0;
    iter--;
    // при достижении крайнего левого положения, 
    // слайдер перейдёт в конец
    if (iter < 0) {
        iter = elemCount - visibleElem;
    }
    slider.style.marginLeft = iter * margin + 'px';    
}

// перемещение слайдера влево при помощи правой кнопки
rightBtn.onclick = function() {
    countPath = 0;
    switcher();
}
// интервал времени в 20 мс
// каждые 20 мс выполняется функция по увеличению ширины бегущей линии
interval = setInterval(pathWidth, 20);
