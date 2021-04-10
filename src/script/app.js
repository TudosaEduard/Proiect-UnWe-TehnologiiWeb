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

/* Navbar animation when scrolling */
const getSections = () => {
    const sections = document.querySelectorAll("section");
    let sectionsArray = [];
    offset = 0;
    sections.forEach(section => {
        sectionsArray.push({
            id: section.id,
            start: offset,
            end: offset + section.offsetHeight
        });
        offset += section.offsetHeight;
    })
    return sectionsArray;
}

let sections = getSections();
document.addEventListener("scroll", () => {
    console.log(window.scrollY);
})


