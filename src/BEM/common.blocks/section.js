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