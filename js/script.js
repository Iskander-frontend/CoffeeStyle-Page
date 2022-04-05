let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
let product = document.querySelector('.product__price')
let popup = document.querySelector('.popup')
let counterBox = document.querySelector('.counter')
let sale = document.querySelector('.sale')
let counter = 0;

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})

// sale.addEventListener('click', function () {
//     popup.classList.add('active')
//     counter++;
//     counterBox.textContent=counter;
// })
// product.addEventListener('click', function () {
//         popup.classList.add('active')
//         counter++;
//         counterBox.textContent=counter;
// })

