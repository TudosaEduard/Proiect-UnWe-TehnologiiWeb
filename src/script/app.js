const nav = document.querySelector('.header-wrapper');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);

    if(top >= 1){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

