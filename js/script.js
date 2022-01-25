$(document).ready(function () {
    let slider = $('.header__banner');
    slider.slick( {
        infinite: true,
        dots: true,
        // autoplay: true,
        fade: true,
        arrows: false
    })
})

let burgerMenu = document.querySelector('.burger__menu');
let menuList = document.querySelector('.menu__list');

burgerMenu.onclick = () => {
    burgerMenu.classList.toggle('menu-open');
    menuList.classList.toggle('list__open')
}



