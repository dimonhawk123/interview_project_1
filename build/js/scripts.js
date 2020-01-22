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
//-------------------------------------------------

let arr = Array.from(document.querySelector('.section_theme_about .block').children);
let links = document.querySelectorAll('.section_theme_about .menu__link');

function about(arr, links, event) {    
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
            item.style.visibility = 'visible';        
        } else {
            item.style.opacity = 0;        
            item.style.visibility = 'hidden';    
        }        
    })    
} 

for(i = 0; i < links.length; i++) {
    links[i].addEventListener('click', about.bind(null, arr, links));
}
//-------------------------------------------------

let arr_edu = Array.from(document.querySelector('.section_theme_edu .block').children);
let links_edu = document.querySelectorAll('.section_theme_edu .menu__link');

for(i = 0; i < links_edu.length; i++) {
    links_edu[i].addEventListener('click', about.bind(null, arr_edu, links_edu));
}
let leftBtn = document.querySelector('.slider__btn_left');
let rightBtn = document.querySelector('.slider__btn_right');
let elemCount = document.querySelector('.slider__list').children.length;
let slider = document.querySelector('.slider__list');
let visibleElem = 4;
let iter = 0;
let interval;
let countPath = 0;
let width =  document.querySelector('.path__inside');
let margin = -300;
let flag = true;

leftBtn.onclick = function() {    
    countPath = 0;
    iter--;
    if (iter < 0) {
        iter = elemCount - visibleElem;
    }
    slider.style.marginLeft = iter * margin + 'px';    
}

rightBtn.onclick = function() {
    countPath = 0;
    switcher();
}
function resetSlider() {
    iter = 0;
    countPath = 0;
    slider.style.marginLeft = 0 + 'px';
}
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
size();

window.addEventListener('resize', size);

function switcher() {
    iter++;
    if(iter > (elemCount - visibleElem)) {
        iter = 0;
    }
    slider.style.marginLeft = iter * margin + 'px';
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


// function edu(event) {    
//     for (let link_edu of Array.from(links_edu)) {        
//         if (event.target == link_edu) {
//             event.target.style.fontWeight = 'bold';
//         } else {
//             link_edu.style.fontWeight = 'normal';
//         }
//     }        
//     arr_edu.map(function(item){        
//         if (item.id == ('#' + event.target.id)) {
//             item.style.opacity = 1;  
//             item.style.visibility = 'visible';           
//         } else {
//             item.style.opacity = 0;  
//             item.style.visibility = 'hidden';            
//         }        
//     })    
// }

//-------------------------------------------------



// function pathWidth() {
//     countPath++;
//     if (countPath == 101) {
//         countPath = 0;        
//     }
//     width.style.width = countPath + '%';
// }
// interval = setInterval(pathWidth, 50);




//--------------------------------------------------

let active = document.querySelector('.menu-mobile');
let style = document.querySelector('.menu');
active.onclick = function() {
    style.classList.toggle('active');
}