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

$(document).ready(function () {
    let slider = $('.news__slider');
    slider.slick( {
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
            ]
    })
})