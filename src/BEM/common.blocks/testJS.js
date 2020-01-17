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