let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let menuItem = document.getElementsByClassName('header__link')
let body = document.querySelector('body');
const productItem = document.getElementsByClassName('product__price')
let popup = document.querySelector('.popup')
let counterBox = document.querySelector('.counter')
let counter = 0;

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})

for (let index = 0; index < menuItem.length; index++){
    menuItem[index].addEventListener('click', function () {
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        body.classList.remove('active')
    })
}

function del() {
    popup.classList.remove('active')
}
function addDel() {
    for (let index = 0; index < productItem.length; index++){
        productItem[index].addEventListener('click', function () {
            popup.classList.add('active')
            counter++;
            counterBox.textContent=counter;
            setTimeout(del, 3000);
        })
}
}
addDel()
