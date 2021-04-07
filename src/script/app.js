/* Navbar when scrolling */
window.onscroll = function(){
    const nav = document.querySelector('.header-wrapper');
    var top = window.scrollY;
    console.log(top);

    if(top >= 1){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

/* Add events to mobile navbar */
const navBtn = document.querySelector('.mobile-nav-toggle');
navBtn.addEventListener('click', () => {
    const nav = document.querySelector('nav');

    if (navBtn.classList.contains('fa-bars')) {

        nav.classList.add('nav-mobile');
        navBtn.classList.remove("fa-bars");
        navBtn.classList.add("fa-window-close");

    } else if (navBtn.classList.contains('fa-window-close')) {

        nav.classList.remove('nav-mobile');
        navBtn.classList.remove("fa-window-close");
        navBtn.classList.add("fa-bars");

    }
})

/* Add and remove items for diagram */

function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}


function removeItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    
    ul.removeChild(item);
}
