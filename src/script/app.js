import {countyContainer} from './counties.js'

/* Navbar when scrolling */
window.onscroll = function(){
    const nav = document.querySelector('.header-wrapper');
    var top = window.scrollY;

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

/* Get the county user clicked on */
const mapBig = document.querySelector('.map-bg .map');
mapBig.addEventListener('click', (e) => {
    let selectedCounty = e.target;
    for(let i = 0; i < mapBig.children.length; i++) {
        if (selectedCounty == mapBig.children[i].children[0]){
            console.log(countyContainer[i]);
        }
    }
})

const mapSmall = document.querySelector('#surface1');
mapSmall.addEventListener('click', (e) => {
    let selectedCounty = e.target;
    for(let i = 0; i < mapSmall.children.length; i++) {
        if (selectedCounty == mapSmall.children[i].children[0]){
            console.log(countyContainer[i]);
        }
    }
})

