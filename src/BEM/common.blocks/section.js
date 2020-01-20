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