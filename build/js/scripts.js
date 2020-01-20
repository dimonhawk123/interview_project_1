


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
    if (countPath == 301) {
        countPath = 0;   
        switcher();     
    }
    width.style.width = (100/300) * countPath + '%';
}

interval = setInterval(pathWidth, 20);


//--------------------------------------------------

//нет возможности использовать scrollIntoView
//потому что не поддерживается некоторыми браузерами 

//используем полифил Smooth Scroll behavior polyfill

// import smoothscroll from 'smoothscroll-polyfill';

// smoothscroll.polyfill();

let refs = document.querySelectorAll('.background .menu__link');

for (let ref of refs) {
    ref.addEventListener('click', function(event) {
        event.preventDefault();
        let anchorId = event.target.getAttribute('href');
        let anchor = document.querySelector(anchorId);
        anchor.scrollIntoView({behavior: 'smooth'});
    });
}