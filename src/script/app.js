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
})

const mapSmall = document.querySelector('#surface1');
mapSmall.addEventListener('click', (e) => {
    let selectedCounty = e.target.parentNode;
})

/* Display info when hovering on a county*/
document.querySelector("#county-details").addEventListener('mousemove', (e) => {
    let infoBox = document.querySelector("#county-details .info-box");
    let pageHeight = document.querySelector("#county-details").offsetHeight;
    let pageWidth = document.querySelector("#county-details").offsetWidth;

    infoBox.style.top = (e.pageY - pageHeight - 30).toString() + "px";
    infoBox.style.left = (e.pageX - infoBox.offsetWidth / 2).toString() + "px";
})

const setInfoBoxInfo = (countyName, countyTotalUnemployedNumber) => {
    let countyNameInfo = document.querySelector("#info-box-county-name");
    let countyTotalUnemployedNumberInfo = document.querySelector("#info-box-county-unemployed-number");

    countyNameInfo.innerHTML = countyName;
    countyTotalUnemployedNumberInfo.innerHTML = countyTotalUnemployedNumber;
}

document.querySelectorAll("#county-details .map-bg .map a").forEach(elem => {
    let infoBox = document.querySelector("#county-details .info-box");
    elem.addEventListener('mouseover', (e) => {
        let countyName = e.target.getAttribute("name");
        let countyTotalUnemployedNumber = 1021;
        setInfoBoxInfo(countyName, countyTotalUnemployedNumber);
        infoBox.style.visibility = "visible";
    })
    elem.addEventListener('mouseleave', (e) => {
        infoBox.style.visibility = "hidden"; 
    })
})