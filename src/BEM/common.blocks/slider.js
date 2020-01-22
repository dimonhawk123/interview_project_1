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