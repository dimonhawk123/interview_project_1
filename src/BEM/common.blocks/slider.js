let leftBtn = document.querySelector('.slider__btn_left');
let rightBtn = document.querySelector('.slider__btn_right');
let elemCount = document.querySelector('.slider__list').children.length;
let slider = document.querySelector('.slider__list');
let visibleElem = 4;
let iter = 0;
let interval;
let countPath = 0;
let width =  document.querySelector('.path__inside');

leftBtn.onclick = function() {    
    countPath = 0;
    iter--;
    if (iter < 0) {
        iter = elemCount - visibleElem;
    }
    slider.style.marginLeft = iter * -300 + 'px';    
}

rightBtn.onclick = function() {
    countPath = 0;
    switcher();
}

function switcher() {
    iter++;
    if(iter > (elemCount - visibleElem)) {
        iter = 0;
    }
    slider.style.marginLeft = iter * -300 + 'px';
}

function pathWidth() {
    countPath++;
    if (countPath == 301) {
        countPath = 0;   
        switcher();     
    }
    width.style.width = (100/300) * countPath + '%';
}

interval = setInterval(pathWidth, 20);