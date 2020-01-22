!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();
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
