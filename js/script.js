let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
let product = document.querySelector('.product__price')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})

product.addEventListener('click', function () {
        console.log("penis")
})


