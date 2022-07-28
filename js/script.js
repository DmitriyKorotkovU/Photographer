let header__burger = document.querySelector('.header__burger');
let header__navigator = document.querySelector('.header__navigator');
let back = document.querySelector('body');
let header__list = document.querySelector('.h-centerside__list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header__navigator.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}