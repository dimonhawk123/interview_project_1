//-------------------------------------------------

let arr = Array.from(document.querySelector('.about .block').children);
let links = document.querySelectorAll('.about .menu__link');

for(i = 0; i < links.length; i++) {
    links[i].addEventListener('click', about);
}

function about(event) {    
    for (let link of Array.from(links)) {        
        if (event.target == link) {
            event.target.style.fontWeight = 'bold';
        } else {
            link.style.fontWeight = 'normal';
        }
    }        
    arr.map(function(item){        
        if (item.id == ('#' + event.target.id)) {
            item.style.opacity = 1;            
        } else {
            item.style.opacity = 0;            
        }        
    })    
}

//-------------------------------------------------

let arr_edu = Array.from(document.querySelector('.edu .block').children);
let links_edu = document.querySelectorAll('.edu .menu__link');

for(i = 0; i < links_edu.length; i++) {
    links_edu[i].addEventListener('click', edu);
}

function edu(event) {    
    for (let link_edu of Array.from(links_edu)) {        
        if (event.target == link_edu) {
            event.target.style.fontWeight = 'bold';
        } else {
            link_edu.style.fontWeight = 'normal';
        }
    }        
    arr_edu.map(function(item){        
        if (item.id == ('#' + event.target.id)) {
            item.style.opacity = 1;            
        } else {
            item.style.opacity = 0;            
        }        
    })    
}

//-------------------------------------------------

let leftBtn = document.querySelector('.slider-btn__left');
let rightBtn = document.querySelector('.slider-btn__right');
let elemCount = document.querySelector('.slider__list').children.length;
let slider = document.querySelector('.slider__list');
let visibleElem = 4;
let iter = 0;
let interval;
let countPath = 0;
let width =  document.querySelector('.path_gray');

leftBtn.onclick = function() {
    clearInterval(interval);
    countPath = 0;
    iter--;
    if (iter < 0) {
        iter = elemCount - visibleElem;
    }
    slider.style.marginLeft = iter * -300 + 'px';
    interval = setInterval(pathWidth, 40);
}

rightBtn.onclick = function() {
    clearInterval(interval);
    countPath = 0;
    switcher();
    interval = setInterval(pathWidth, 40);
}

function switcher() {
    iter++;
    if(iter > (elemCount - visibleElem)) {
        iter = 0;
    }
    slider.style.marginLeft = iter * -300 + 'px';
}

// function pathWidth() {
//     countPath++;
//     if (countPath == 101) {
//         countPath = 0;        
//     }
//     width.style.width = countPath + '%';
// }
// interval = setInterval(pathWidth, 50);

function pathWidth() {
    countPath++;
    if (countPath == 151) {
        countPath = 0;   
        switcher();     
    }
    width.style.width = (1198/150) * countPath + 'px';
}

interval = setInterval(pathWidth, 40);